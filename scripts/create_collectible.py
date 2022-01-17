from scripts.helpful_scripts import get_account
from brownie import BasicNFT



def create_basic_nft():
    account = get_account()
    basicNFT = BasicNFT[-1] #most recent one that is created
    creation_tx = basicNFT.createCollectible({"from": account})
    creation_tx.wait(1)
    print(basicNFT.tokenCounter())
    print("Collectible created!")


def main():
    create_basic_nft()
