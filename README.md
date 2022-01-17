ALERT: You do not need python to make a dapp. You just need javascript and solidty 



Steps on how to create an nft
1. Create the erc721 file
2. Create a function on the erc721 file (create a colectable)
3. Create a function on the erc721 to set the collectable to the right tokenId
4. Now you will begin by making the tokenURI
5. In order to get the tokenURI, you must first get the metadata
6. Create a metadata folder, this will be a sample metadata folder so that you can fill in information. It will pretty much just be a dict
7. If you want to mint an image to the block chain, you first must add the image to ipfs first
8. get the image
9. Get the pathlibrary to get the path of the image
10. Run your ipfs node/If you want to do the alternative, you can use pinata (in this case you can just use the pinata api key to make a request.post using pinata api to send it over)
11. Get the ipfs_url which be that of your node
12. Use the api/v0/add end point of the your ipfs
13. Then run a request response using the ipfs api with your image binary file to upload
14. To get the uri of the image, you just get the hash of the request reponse and then follow up with the ?filename={FILENAME}
15. You then start filling out the information from the metadata template of what you want and then run the same upload function to ipfs
16. From their you get the ipfs uri, then run setTokenURI --> set the uri correctly with the tokenId



Steps on how to upload to ipfs/pinata automatically
1. Get an image (differs if it is in directory or temp file)
2. Turn image into byte data by doing a .read()
3. Run a pinata request. If you are uploading a file (use a specific endpoint for it). You can also do it by json. Check docs here: https://docs.pinata.cloud/api-pinning/pin-json
4. Once you have the pinata request, get the uri from the image and then start collecting the information for the sample metadata. Fill the information in. Do the same thing you did with the request for the picture.
5. Send it to pinata, grab uri.
6. This time however you would run the setTokenURI
7. Then you are done


Steps to set up frontend for solidity
You are gonna need address, abi, contract interfaces
1. Copy ./build folder to the frontend, this build folder holds all your interfaces, contracts, etc that we deployed for you to use
2. Copy brownie-config.yaml over, this holds all the network address
3. Build some scripts so that you can copy it over
4. --> run this function if you want to copy it over: brownie run scripts/upload_to_frontend.py
