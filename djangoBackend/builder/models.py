from django.db import models
from django.utils import timezone


"""
    This will be each page of the website
"""
class WebsitePage(models.Model):
    name = models.CharField(max_length = 255, blank = True)
    html = models.TextField(blank = True)
    css = models.TextField(blank = True)
    js = models.TextField(blank = True)
    secondaryId = models.CharField(max_length = 255, blank = True)
    # delete this later
    pageNum = models.IntegerField(default = 0, blank =False)


"""
    Since everything will be done with your wallet,
    to keep everyone id anonymous, we will use their
    public key to get their websites
"""
class OwnerWalletKey(models.Model):
    publicKey = models.TextField(blank = False)


"""
    This will be the offical page for the website
"""
class OfficialWebsitePage(models.Model):
    name = models.CharField(max_length = 255, blank = True)
    html = models.TextField(blank = True)
    css = models.TextField(blank = True)
    js = models.TextField(blank = True)
    secondaryId = models.CharField(max_length = 255, blank = True)


"""
    This will be the general holder the website
    it will hold all the other pages of the site
    It will be associated with your address

    Use address field as a forigen key and then use
    a many to many for all the pages on the model

"""
class Website(models.Model):
    owner = models.ForeignKey(OwnerWalletKey, related_name = "owner_key", on_delete = models.CASCADE,null= True  )
    pages = models.ManyToManyField(WebsitePage, related_name="website_page", blank = True,)
    officalPages = models.ManyToManyField(OfficialWebsitePage, related_name = "website_official_page", blank= True)
    name = models.CharField(max_length= 255,default = "default website")
    lastChanged = models.DateTimeField(default = timezone.now, blank = False)
    websiteAssets = models.TextField(blank = True)
    websiteUserName=models.CharField(max_length=255,blank=True)
    profilePic = models.ImageField(('profilePic'),
                                        upload_to='profilePic/public/profile_pictures/%Y/%m',
                                        blank=True,
                                        default = 'profilePic/public/profile_pictures/default.png'
                                        )
    # initialPage = models.ForeignKey(WebsitePage, related_name = "initial_page", on_delete= models.CASCADE, null = True)
    newlyCreated = models.BooleanField(default = True)
    type = models.CharField(max_length = 255, default = "personal") #this will be use to knwo which website type you are making
