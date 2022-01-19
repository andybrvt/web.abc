from scripts.helpful_scripts import get_account
from brownie import BasicNFT


"""
    Function will be used to deploy the BasicNFT
    smart contract

    params
    -name --> string name
    -symbol --> string symbol
"""
def deploy_basic_nft(name, symbol):
    account = get_account()
    print("Deploying Contract...")
    basicNFT = BasicNFT.deploy(
        name,
        symbol,
        {"from": account}
    )
    print("Deploy Contract Finished")
    return basicNFT

def create_basic_nft():
    account = get_account()
    basicNFT = BasicNFT[-1] #most recent one that is created
    creation_tx = basicNFT.createCollectible({"from": account})
    creation_tx.wait(1)
    print(basicNFT.tokenCounter())
    print("Collectible created!")

def main():
    deploy_basic_nft("website", "WEB")
    create_basic_nft()
        "Dogs", "DOG"
