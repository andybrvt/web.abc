from brownie import BasicNFT, network
from metadata.sample_metadata import metadata_template
from pathlib import Path
import requests
import json
import os


def upload_metadata_to_ipfs():
    basic_nft = BasicNFT[-1] # this is assuming you deployed one already
    number_of_basic_collectibles = basic_nft.tokenCounter()
    print(f"You have created {number_of_basic_collectibles}")


    for token_id in range(number_of_basic_collectibles):
        metadata_file_name = f"./metadata/{network.show_active()}/{token_id}-test1.json"
        print(metadata_file_name)

        # dictionary
        collectible_metadata= metadata_template
        if Path(metadata_file_name).exists():
            print("{metadata_file_name} already exist! Delete it to overwrite")
        else:
            collectible_metadata['name']='Test name'
            collectible_metadata['description']='Test desription'
            image_path="./img/test1.png"
            image_uri=None
            if(os.getenv("UPLOAD_IPFS")=="true"):
                image_uri = upload_to_ipfs(image_path)
            collectible_metadata["image"]=image_uri

            with open(metadata_file_name, "w") as file:
                json.dump(collectible_metadata, file)
            if(os.getenv("UPLOAD_IPFS")=="true"):
                upload_to_ipfs(metadata_file_name)


def upload_to_ipfs(filepath):
    print("Uploading to ipfs ...")
    with Path(filepath).open("rb") as fp:
        image_binary = fp.read()
        ipfs_url = "http://127.0.0.1:5001"
        endpoint = "/api/v0/add"
        response = requests.post(ipfs_url+endpoint, files={"file": image_binary})

        ipfs_hash = response.json()["Hash"]
        # hash is speicific to each image
        filename = filepath.split("/")[-1:][0]
        image_uri = f"https://ipfs.io/ipfs/{ipfs_hash}?filename={filename}"
        print(image_uri)
        return image_uri


def main():
    upload_metadata_to_ipfs()
