from scripts.helpful_scripts import get_account
from brownie import CreateCollectionContract
from scripts.upload_to_frontend import upload_to_frontend

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

def grabAllCollectionTest():
    account = get_account()
    collectionContract = CreateCollectionContract[-1]
    number = collectionContract.getAllCollectionAddresses(account)
    print(f"Here is the number {number}")

def grabAllCollection():
    account = get_account()
    collectionContract = CreateCollectionContract[-1]
    array = collectionContract.getAllCollectionAddresses(account)
    print(array)
    print("grabbed all collection addresses")

def main():
    deploy_core_contract()
    # grabAllCollectionTest()
    upload_to_frontend()
    # createCollection()
    # grabAllCollection()
#
