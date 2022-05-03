from scripts.helpful_scripts import get_account, OPENSEA_URL
from brownie import BasicNFT

# sample_token_uri = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json"
sample_token_uri = "https://ipfs.moralis.io:2053/ipfs/QmbGtct7c9QzkYjoFswSvetm9C9qDrX5HLZG6KR4A5QvM2/image/178/0.png"
# first {} will be the contract address, second {} will be tokenId
def deploy_and_create():
    account = get_account()
    basicNFT = BasicNFT[-1]
    tx = basicNFT.simpleCreateCollectible(sample_token_uri, {"from": account})
    tx.wait(1)
    print(f"Awesome, you can view your NFT at {OPENSEA_URL.format(basicNFT.address, basicNFT.tokenCounter()-1)}")
    return basicNFT

def main():
    deploy_and_create()
