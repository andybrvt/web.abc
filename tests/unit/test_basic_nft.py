from scripts.helpful_scripts import get_account, LOCAL_BLOCKCHAIN_ENVIRONMENTS
from brownie import network, BasicNFT
from scripts.deploy_basic_nft import deploy_basic_nft, create_basic_nft
import pytest


def test_can_create_simple_collectible():
    if network.show_active() not in LOCAL_BLOCKCHAIN_ENVIRONMENTS:
        pytest.skip()

    basic_nft = deploy_basic_nft("Website", "WEB")
    create_basic_nft()
    assert basic_nft.ownerOf(0) == get_account()
