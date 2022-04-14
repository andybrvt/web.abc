from brownie import AdvancedCollectible, accounts, network, config
from scripts.RelearningFolder.relearn_helpfuls_scripts import fund_advanced_collectible


# the config has access to your brownie config
# account will be a list of all your accounts
def checkNumber():

    return len(AdvancedCollectible)
# When deploying to a real chain, you are gonna need a wallet address,
def main():
    dev = accounts.add(config['wallets']['from_key'])
    print(network.show_active())
    publish_source = False

    # for deploy you just gotta put in the value in the constructor
    # the config is just taking from the brownie config ymal
    advanced_collectible  = AdvancedCollectible.deploy(
        config['networks'][network.show_active()]['vrf_coordinator'],
        config['networks'][network.show_active()]['link_token'],
        config['networks'][network.show_active()]['keyhash'],
        {"from": dev},
        publish_source = publish_source
    )
    fund_advanced_collectible(advanced_collectible)

    return advanced_collectible
    # When you deploy this, you have to fund with LINK
