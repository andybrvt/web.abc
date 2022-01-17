# File will include all the functionality to start fresh
# It will:
# -deploy solidity contract --> in the case that you don't have it
# -copy build folder over (update it too if more is added) --> to be able to get the
# contracts
# -it will copy over the brownie-config.yaml --> so that you can get all the networks
# in json format

import yaml
import json
import os
import shutil

# used to upload build and brownie config
def upload_to_frontend():
    # copy build over
    copy_folders_to_front_end("./build", "./frontend/src/chain-info")

    # copy ymal folder over as json
    with open("brownie-config.yaml", "r") as brownie_config:
        config_dict = yaml.load(brownie_config, Loader= yaml.FullLoader)
        # load up the yaml file

        # now json dump it
        with open("./frontend/src/brownie-config.json", "w") as brownie_config_json:
            json.dump(config_dict, brownie_config_json)

    print("Front end updated!")



def copy_folders_to_front_end(src, dest):
    if os.path.exists(dest):
        # checks if it exist, then remove it
        shutil.rmtree(dest)
    shutil.copytree(src, dest)


def main():
    upload_to_frontend()
