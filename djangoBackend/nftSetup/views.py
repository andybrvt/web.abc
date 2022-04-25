from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models
from builder.models import OwnerWalletKey
from rest_framework.decorators import authentication_classes, permission_classes
import json
from django.core.files.images import ImageFile
from django.conf import settings

from django.core.files.base import ContentFile
from django.core.files.uploadedfile import InMemoryUploadedFile
from io import BytesIO

from PIL import Image
import pandas as pd
import numpy as np
import time
import os
import random
from progressbar import progressbar

import warnings
# Create your views here.

# So input stuff that you are gonna need
# config file, its just a list of objects (find someone way to get this set up)

# then you are gonna need the images

# then you are gonna need the ipfs information

# then you need to generate the ipfs data

# then place to store the output


def testFunction():
    print('what is going on here 123')


"""
    config --> will be config file
    data --> hold all the temp images

"""
# Parse the configuration file and make sure it's valid
def parse_config(config, request):

    for layer in config:


        layer_path = layer['name']+'-image'


        traits = dict(request.data)[layer_path] #get images

        # Go into assets/ to look for layer folders
        # layer_path = os.path.join(assets_path, layer['directory']) # FOR THE SPECIFC LAYERS

        # Get trait array in sorted order
        # (list of the the pictures in the directory)
        # traits = sorted([trait for trait in os.listdir(layer_path) if trait[0] != '.'])

        # # If layer is not required, add a None to the start of the traits array
        # if not layer['required']:
        #     traits = [None] + traits

        # # Generate final rarity weights
        if layer['rarity_weights'] is None:
            rarities = [1 for x in traits]
        elif layer['rarity_weights'] == 'random':
            rarities = [random.random() for x in traits]
        elif type(layer['rarity_weights'] == 'list'):
            assert len(traits) == len(layer['rarity_weights']), "Make sure you have the current number of rarity weights"
            rarities = layer['rarity_weights']
        else:
            raise ValueError("Rarity weights is invalid")

        rarities = get_weighted_rarities(rarities)

        # Re-assign final values to main CONFIG
        layer['rarity_weights'] = rarities
        layer['cum_rarity_weights'] = np.cumsum(rarities)
        layer['traits'] = traits



# Weight rarities and return a numpy array that sums up to 1
def get_weighted_rarities(arr):
    return np.array(arr)/ sum(arr)


# Generate a single image given an array of filepaths representing layers
# takes in the file path of the images, and file path of the out put
def generate_single_image(project, imageTraits, imageName, output_filename=None):

    # Treat the first layer as the background
    # bg = Image.open(os.path.join('assets', filepaths[0]))

    bg = Image.open(imageTraits[0])

    # Loop through layers 1 to n and stack them on top of another
    for images in imageTraits[1:]:
        img = Image.open(images)
        bg.paste(img,(0,0), img)

    buffer = BytesIO()
    bg.save(fp = buffer, format="PNG")
    newImage = ContentFile(buffer.getvalue())

    real_image = InMemoryUploadedFile(
        newImage,
        None,
        imageName,
        'image/png',
        newImage.tell,
        None
    )

    # Now that I have the image, now I have to save the image into our database
    newImage = models.GeneratedOut.objects.create(
        project = project
    )
    newImage.nftImage = real_image
    newImage.save()



def get_total_combinations(config):

    total = 1
    for layer in config:
        total = total * len(layer['traits'])
    return total

def select_index(cum_rarities, rand):

    cum_rarities = [0] + list(cum_rarities)
    for i in range(len(cum_rarities) - 1):
        if rand >= cum_rarities[i] and rand <= cum_rarities[i+1]:
            return i

    # Should not reach here if everything works okay
    return None


# Generate a set of traits given rarities
def generate_trait_set_from_config(config):

    trait_set = []
    trait_paths = []

    for layer in config:
        # # Extract list of traits and cumulative rarity weights
        traits, cum_rarities = layer['traits'], layer['cum_rarity_weights']

        # # Generate a random number
        rand_num = random.random()

        # # Select an element index based on random number and cumulative rarity weights
        idx = select_index(cum_rarities, rand_num)

        # Add selected trait to trait set
        trait_set.append(traits[idx])
        #
        # # Add trait path to trait paths if the trait has been selected
        # if traits[idx] is not None:
        #     trait_path = os.path.join(layer['directory'], traits[idx])
        #     trait_paths.append(trait_path)

    return trait_set, trait_paths



def generate_images(project, config, edition, count, drop_dup=True):

    # Initialize an empty rarity table
    rarity_table = {}
    for layer in config:
        rarity_table[layer['name']] = []

    # # Define output path to output/edition {edition_num}
    # op_path = os.path.join('output', 'edition ' + str(edition), 'images')
    #
    # Will require this to name final images as 000, 001,...
    zfill_count = len(str(count  - 1))
    #
    # # Create output directory if it doesn't exist ( you dont need this path becuase you are saving in db)
    # if not os.path.exists(op_path):
    #     os.makedirs(op_path)
    #
    # Create the images
    for n in progressbar(range(count)):

        # Set image name
        image_name = str(n).zfill(zfill_count) + '.png'

        # Get a random set of valid traits based on rarity weights
        trait_sets, trait_paths = generate_trait_set_from_config(config)


        # # Generate the actual image
        generate_single_image(project, trait_sets, image_name)

        # Populate the rarity table with metadata of newly created image
        for idx, trait in enumerate(trait_sets):
            print(type(trait.name))
            # print(trait[: -1 * len('.png')])
            if trait is not None:
                rarity_table[config[idx]['name']].append(trait.name[: -1 * len('.png')])
            else:
                rarity_table[config[idx]['name']].append('none')

    print(rarity_table)
    # # Create the final rarity table by removing duplicate creat
    rarity_table = pd.DataFrame(rarity_table).drop_duplicates()
    print("Generated %i images, %i are distinct" % (count, rarity_table.shape[0]))
    #
    if drop_dup:
        # Get list of duplicate images
        img_tb_removed = sorted(list(set(range(count)) - set(rarity_table.index)))

        # Remove duplicate images
        print("Removing %i images..." % (len(img_tb_removed)))


        # Here you have to get all the images
        # First get the project, filter out the images and then start deleting

        generated_images = models.GeneratedOut.objects.filter(project = project)

        # for items in generated_images:
        #
        #     print(items.nftImage.name)
        #     filtered_image= models.GeneratedOut.objects.filter(nftImage = items.nftImage.name)
        #     print(filtered_image)
        file_name = generated_images[0].nftImage.name
        path_list = file_name.split("/")[:-1]
        new_image_path = "/".join(path_list)

        #op_path = os.path.join('output', 'edition ' + str(edition))
        for i in img_tb_removed:

            filtered_image = models.GeneratedOut.objects.filter(nftImage = new_image_path+'/'+str(i)+'.png').delete()

        # # Rename images such that it is sequentialluy numbered
        for idx, img in enumerate(generated_images):
            os.rename(settings.MEDIA_ROOT+"/"+img.nftImage.name, settings.MEDIA_ROOT+'/'+new_image_path+'/'+str(idx)+ '.png')
            img.nftImage.name = new_image_path+'/'+str(idx)+ '.png'

            img.save()
    # # Modify rarity table to reflect removals
    rarity_table = rarity_table.reset_index()
    rarity_table = rarity_table.drop('index', axis=1)
    print(type(rarity_table), 'what is this')

    return rarity_table





@authentication_classes([])
@permission_classes([])
class TestRunning(APIView):
    def post(self, request, *args, **kwargs):

        print(request.data)
        config = json.loads(request.data['config'])


        parse_config(config, request)

        print("Assets look great! We are good to go!")
        print()

        tot_comb = get_total_combinations(config)


        print("You can create a total of %i distinct avatars" % (tot_comb))
        print()


        num_avatars = int(request.data['count'])
        print("You are gonna create a total of %s nfts" % (request.data['count']))


        edition_name = request.data['collectionName']

        print("The name of this collection is -->%s" % (edition_name))

        owner, created = OwnerWalletKey.objects.get_or_create(
            publicKey = request.data['owner']
        )

        project = models.Project.objects.create(
            name= edition_name,
            owner = owner
        )

        print("Starting task...")

        rt = generate_images(project,config, edition_name, num_avatars,)


        print('Saving metadata...')

        # Now that you have the rt you convert it to a json, and when you need it
        # convert it to a csv

        rt_json = rt.to_json()
        project.metaData = json.dumps(rt_json)
        project.save()


        # You can pass in the form data here of the different images
        # instead of folders it can be grouped into a field

        # Steps of the NFT generation
        # -check assset



        return Response("what is this")
