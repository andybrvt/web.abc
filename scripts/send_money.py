from scripts.helpful_scripts import get_account
from brownie import Transaction



def sendMoney():
    account = get_account()
    transactionAcc= Transaction.deploy({'from':account})
    # test=transactionAcc.transfer('0x53a19F44548182602b3B665AB9B9717735Ed53be', {'from':account, 'value':'0.01 ether'})
    # test=transactionAcc.transfer('0x53a19F44548182602b3B665AB9B9717735Ed53be', {'from':account})
    # test=transactionAcc.transfer('0x53a19F44548182602b3B665AB9B9717735Ed53be' ,{'from':account, 'gas
    ':50000})
    test.wait(1)
    print(test)
    print("done!")


def main():
    sendMoney()
