from brownie import network, accounts, config
from web3 import Web3
NON_FORKED_LOCAL_BLOCKCHAIN_ENVIRONMENTS = ["hardhat", "development", "ganache"]
LOCAL_BLOCKCHAIN_ENVIRONMENTS = NON_FORKED_LOCAL_BLOCKCHAIN_ENVIRONMENTS + [
    "mainnet-fork",
    "binance-fork",
    "matic-fork",
]

# index will be used for ganache accounts
# id willbe used for loading accounts from the system
def get_account(index=None, id=None):
    if index:
        # for ganache accounts
        return accounts[index]
    if id:
        # straight on your system
        return accounts.load(id)
    if(network.show_active() in LOCAL_BLOCKCHAIN_ENVIRONMENTS):
        return accounts[0]
    # takes it in the env
    return accounts.add(config["wallets"]["from_key"])

def get_contract(contract_name):
    """
    This function will either:
        - Get an address from the config
        - Or deploy a Mock to use for a network that doesn't have the contract
    Args:
        contract_name (string): This is the name of the contract that we will get
        from the config or deploy
    Returns:
        brownie.network.contract.ProjectContract: This is the most recently deployed
        Contract of the type specified by a dictionary. This could either be a mock
        or a 'real' contract on a live network.
    """
    # link_token
    # LinkToken
    contract_type = contract_to_mock[contract_name]
    if network.show_active() in LOCAL_BLOCKCHAIN_ENVIRONMENTS:
        if len(contract_type) <= 0:
            deploy_mocks()
        contract = contract_type[-1]
    else:
        contract_address = config["networks"][network.show_active()][contract_name]
        contract = Contract.from_abi(
            contract_type._name, contract_address, contract_type.abi
        )
    return contract
