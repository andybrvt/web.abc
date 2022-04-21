from django.db import models
from builder.models import OwnerWalletKey


# Create your models here.
"""

    This will be the nft project

"""
class Project(models.Model):
    name = models.CharField(max_length = 255)
    owner = models.ForeignKey(OwnerWalletKey, related_name = "owner_project_key", on_delete= models.CASCADE,)


"""
    This will be a json and a image out put for the nft


    nftImage --> will be for the image of the picture generated
    metaData --> this will be the metadata of the image that you will upload to ipfs
    project --> this will be the project the images and metadata will be linked to
"""

class GeneratedOut(models.Model):
    nftImage = models.ImageField(("nftOutput"),
                                    upload_to = "nftOutput/public/nft_art/%Y/%m",
                                    blank = True,
                                    )
    metaData = models.TextField(blank = True)
    project = models.ForeignKey(Project, related_name = "nft_project", on_delete =models.CASCADE)
