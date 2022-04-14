from brownie import AdvancedCollectible, accounts, config, interface, network


def fund_advanced_collectible(nft_contract):
    dev = accounts.add(config['wallets']['from_key'])

    # when interacting with contracts on chain, gonna need two things
    # interfaces or abi and the address

    # When you pass in the address like that you are able to get the smart contract
    link_token = interface.LinkTokenInterface(config['networks'][network.show_active()]['link_token'])

    # We might have to put some in ourselves (using our address that has LINK token in it)
    link_token.transfer(nft_contract, 1000000000000000000, {"from": dev})


def get_breed(breed_number):
    switch = {0:"PUG", 1: "SHIBA_INU", 2: "ST_BERNARD"}
    return switch[breed_number]
