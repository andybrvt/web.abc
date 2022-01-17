from brownie import network, BasicNFT
from scripts.helpful_scripts import get_account, OPENSEA_URL


# TOKEN_URI = "https://ipfs.io/ipfs/Qma9DTGjJ313e8UMRzNSEWHeFo35ZmxJ4quxfxTzYnyQVD?filename=0-test1.json"
# TOKEN_URI = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json"
TOKEN_URI = "https://gateway.pinata.cloud/ipfs/QmY8YAUdfk91RJBdUFqADYpH85tf8tACdLgPJxLLAwdaxy?filename=test2.json"

def main():
    advanced_collectible = BasicNFT[-1]
    number_of_collectibles = advanced_collectible.tokenCounter()
    print(f"You have {number_of_collectibles} tokenIds")
    for token_id in range(number_of_collectibles):
        if not advanced_collectible.tokenURI(token_id).startswith("https://"):
            print(f"Setting tokenURI of {token_id}")
            set_tokenURI(token_id, advanced_collectible, TOKEN_URI)

def set_tokenURI(token_id, nft_contract, tokenURI):
    account = get_account()
    tx = nft_contract.setTokenURI(token_id, tokenURI, {"from": account})
    tx.wait(1)
    print(
        f"Awesome! You can view your NFT at {OPENSEA_URL.format(nft_contract.address, token_id)}"
    )
    print("Please wait up to 20 minutes, and hit the refresh metadata button")
