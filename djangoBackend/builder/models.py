from django.db import models

"""
    This will be each page of the website
"""
class WebsitePage(models.Model):
    name = models.CharField(max_length = 255, blank = True)
    html = models.TextField(blank = True)
    css = models.TextField(blank = True)
    js = models.TextField(blank = True)


"""
    Since everything will be done with your wallet,
    to keep everyone id anonymous, we will use their
    public key to get their websites
"""
class OwnerWalletKey(models.Model):
    publicKey = models.TextField(blank = False)



"""
    This will be the general holder the website
    it will hold all the other pages of the site
    It will be associated with your address

    Use address field as a forigen key and then use
    a many to many for all the pages on the model

"""
class Website(models.Model):
    owner = models.ForeignKey(OwnerWalletKey, related_name = "owner_key", on_delete = models.CASCADE,null= True  )
    pages = models.ManyToManyField(WebsitePage, related_name="website_page", blank = True)
