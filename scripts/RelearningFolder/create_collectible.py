from brownie import AdvancedCollectible, accounts, config
from scripts.RelearningFolder.relearn_helpfuls_scripts import get_breed
import time


STATIC_SEED = 123

# Bronwie actually has a console that you can use to check out the shit

def main():
    dev = accounts.add(config['wallets']['from_key'])
    advanced_collectible = AdvancedCollectible[len(AdvancedCollectible) -1]

    # since you run that transaction funciton createCollectible
    transaction = advanced_collectible.createCollectible(STATIC_SEED,"None", {"from":dev})
    transaction.wait(1)
    requestId = transaction.events['requestedCollectible']['requestId']

    # You can run mapping like you run a function using these contracts
    token_id = advanced_collectible.requestIdToTokenId(requestId)
    # this will get that index tokenId you want that was set in the erc721
    # now that you used the tokenid, you can then get the breed of that token id
    time.sleep(55)

    breed = get_breed(advanced_collectible.tokenIdToBreed(token_id))
    print('Dog breed of tokenId {} is {}'.format(token_id, breed))
