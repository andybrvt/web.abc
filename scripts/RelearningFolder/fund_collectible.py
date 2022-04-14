from brownie import AdvancedCollectible
from scripts.RelearningFolder.relearn_helpfuls_scripts import fund_advanced_collectible


# the advancedCollectible that brownie gives us is actually a list of contracts that were
#  deployed (their address that is)
def main():
    advanced_collectible = AdvancedCollectible[len(AdvancedCollectible) -1]
    fund_advanced_collectible(advanced_collectible)
