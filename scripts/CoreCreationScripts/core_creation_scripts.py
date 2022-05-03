# this script will be use to test and deploy the contracts
from brownie import Contract, CoreCreationContract, CreateCollectionContract, BasicERC721, BasicERC721a, config, network
from scripts.helpful_scripts import get_account
from web3 import Web3
from scripts.upload_to_frontend import upload_to_frontend


def deploy_core_creation_contract():
    account = get_account(); #This will get our current account
    network.gas_price(10000000000)
    coreCreationContract = CoreCreationContract.deploy(
        {"from": account},
        publish_source = False
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
        {'from': account},
    )
    address = coreCreationContract.collectionDict(account.address, 0)
    print(address)
    print("New erc721 created")


def createERC721A():
    account = get_account();
    coreCreationContract = CoreCreationContract[-1]
    print('Creating the new collection')
    coreCreationContract.createBasicERC721A(
        "test",
        "TEST",
        10,
        1000,
        Web3.toWei(0.002, 'ether'),
        "https://ipfs.moralis.io:2053/ipfs/QmZeXZyB8BfNSPJLwhkFJnQMJz2Z9hXDwSn5dV3hjUSbnK/metadata/",
        {'from': account},

    )

    print(getCurrentERC721A())
    print("New erc721A created")


def getAddressTest():
    account = get_account()
    coreCreationContract = CoreCreationContract[-1]
    address = coreCreationContract.testReturn()
    print(address)

def getCurrentERC721A():
    account = get_account()
    coreCreationContract = CoreCreationContract[-1]
    address = coreCreationContract.getERC721Contracts(account.address)
    print('got new address')
    return address[-1]

def mintingFunction():
    account = get_account()
    # get the erc721A contract here
    currentERC721AAddress = getCurrentERC721A()
    # Now that you have the address you can use the contract to pass int he address
    erc721AContract = Contract.from_abi(BasicERC721a._name, currentERC721AAddress, BasicERC721a.abi)

    amountPayed = Web3.toWei(0.022, 'ether')
    erc721AContract.mint(1, {'from':account, "value": amountPayed})
    print(currentERC721AAddress)
    print(erc721AContract)

def checkInformation():
    account = get_account()
    currentERC721AAddress = getCurrentERC721A()
    erc721AContract = Contract.from_abi(BasicERC721a._name, currentERC721AAddress, BasicERC721a.abi)

    print(erc721AContract.tokenURI(1))
    print(erc721AContract)

def withDrawFunction():
    account = get_account()
    # get the erc721A contract here
    currentERC721AAddress = getCurrentERC721A()
    # Now that you have the address you can use the contract to pass int he address
    erc721AContract = Contract.from_abi(BasicERC721a._name, currentERC721AAddress, BasicERC721a.abi)
    # newRate = Web3.toWei(0.022, 'ether')
    erc721AContract.withdraw({'from':account})
    print(currentERC721AAddress)


def setMintRate():
    account = get_account()
    currentERC721AAddress = getCurrentERC721A()
    erc721AContract = Contract.from_abi(BasicERC721a._name, currentERC721AAddress, BasicERC721a.abi)

    newRate = Web3.toWei(0.022, 'ether')
    erc721AContract.setMintRate(newRate, {'from':account})


def main():
    deploy_core_creation_contract()
    createERC721A()
    upload_to_frontend()
