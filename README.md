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
10. Run your ipfs node/If you want to do the alternative, you can use pinata (in this case you can just use the pinata api key to make a request.post to send it over)
11. Get the ipfs_url which be that of your node
12. Use the api/v0/add end point of the your ipfs
13. Then run a request response with your image binary file
14. To get the uri of the image, you just get the hash of the request reponse and then follow up with the ?filename={FILENAME}
15. You then start filling out the information from the metadata template of what you want and then run the same upload function to ipfs
16. From their you get the ipfs uri, then run setTokenURI --> set the uri correctly with the tokenId
