from scripts.helpful_scripts import get_account
from brownie import CreateCollectionContract


def deploy_core_contract():
    account=get_account()
    collectionContract= CreateCollectionContract.deploy({"from":account})
    print("Deployed main collection contract!")
    return collectionContract

def createCollection():
    account = get_account()
    collectionContract = CreateCollectionContract[-1]
    print("Creating the new collection")
    collectionContract.createCollection(
        "firstCollection",
        "FRST",
        {"from": account}
    )
    address = collectionContract.collectionDict(account.address, 0)
    print(address)
    print("New collection created")

def main():
    deploy_core_contract()
    createCollection()
