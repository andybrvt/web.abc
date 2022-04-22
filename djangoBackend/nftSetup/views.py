from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.decorators import authentication_classes, permission_classes


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
    print('what is going on here')


# Parse the configuration file and make sure it's valid
def parse_config():

    # Input traits must be placed in the assets folder. Change this value if you want to name it something else.
    assets_path = 'assets'  # PUT IMAGES HERE


    # Loop through all layers defined in CONFIG
    for layer in CONFIG: # PUT CONFIG FILE THAT YOU WILL RENDER HERE (PROBALLY GONNA BE RENDERED BY CODE OR INPUT)

        # Go into assets/ to look for layer folders
        layer_path = os.path.join(assets_path, layer['directory']) # FOR THE SPECIFC LAYERS

        # Get trait array in sorted order
        # (list of the the pictures in the directory)
        traits = sorted([trait for trait in os.listdir(layer_path) if trait[0] != '.'])

        # If layer is not required, add a None to the start of the traits array
        if not layer['required']:
            traits = [None] + traits

        # Generate final rarity weights
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

@authentication_classes([])
@permission_classes([])
class TestRunning(APIView):
    def post(self, request, *args, **kwargs):
        testFunction()

        print(request.data)

        # You can pass in the form data here of the different images
        # instead of folders it can be grouped into a field

        # Steps of the NFT generation
        # -check assset


        return Response("what is this")
