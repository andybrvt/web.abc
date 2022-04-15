# this script will be use to test and deploy the contracts
from brownie import CoreCreationContract, CreateCollectionContract, BasicERC721, config, network
from scripts.helpful_scripts import get_account

def deploy_core_creation_contract():
    account = get_account(); #This will get our current account
    network.gas_price(1000000000)
    coreCreationContract = CoreCreationContract.deploy(
        {"from": account},
        publish_source = True
        )


def createERC721():
    account = get_account();
    coreCreationContract = CoreCreationContract[-1]
    print("Creating the new collection")

    coreCreationContract.createBasicERC721(
        "test",
        "TEST",
        config['networks'][network.show_active()]['vrf_coordinator'],
        config['networks'][network.show_active()]['link_token'],
        config['networks'][network.show_active()]['keyhash'],
        {'from': account, "publish_source": True},
    )
    address = coreCreationContract.collectionDict(account.address, -1)
    print(address)
    print("New erc721 created")


def getAddressTest():
    account = get_account()
    coreCreationContract = CoreCreationContract[-1]
    address = coreCreationContract.testReturn()
    print(address)


def main():
    deploy_core_creation_contract()
