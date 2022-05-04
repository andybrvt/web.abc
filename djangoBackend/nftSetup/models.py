from django.db import models
from builder.models import OwnerWalletKey, WebsitePage
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver

# Create your models here.
"""

    This will be the nft project

    the contract will be the address
    the websites will be all the websites that uses this project
    the testWebsite will be the temporary solution

"""
class Project(models.Model):
    name = models.CharField(max_length = 255)
    owner = models.ForeignKey(OwnerWalletKey, related_name = "owner_project_key", on_delete= models.CASCADE,)
    metaData = models.TextField(blank = True)
    baseURI = models.CharField(max_length = 255, blank = True)
    contract = models.TextField(blank = True)
    website = models.ManyToManyField(WebsitePage, related_name= "provided_websites", blank = True)
    testWebsite = models.ForeignKey(WebsitePage, related_name = "temp_solution", null = True, on_delete= models.CASCADE)

"""
    This will be a json and a image out put for the nft


    nftImage --> will be for the image of the picture generated
    metaData --> this will be the metadata of the image that you will upload to ipfs
    project --> this will be the project the images and metadata will be linked to
"""

def user_directory_path(instance, filename):
    return "nftOutput/public/nft_art/%s/%s"%(str(instance.project.pk),filename)

class GeneratedOut(models.Model):
    nftImage = models.ImageField(("nftOutput"),
                                    upload_to =user_directory_path,
                                    blank = True,
                                    )
    project = models.ForeignKey(Project, related_name = "nft_project", on_delete =models.CASCADE)
    metaData = models.TextField(blank = True)


@receiver(pre_delete, sender=GeneratedOut)
def generatedOut_delete(sender, instance, **kwargs):
    instance.nftImage.delete(False)
