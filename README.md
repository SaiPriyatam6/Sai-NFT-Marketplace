Wrote the smartcontract for minting nfts. The deploy script is also written and when we deploy it in the chain, we get a Marketplace.json file which will have address and abi of the contract, through which we can access the contract later.

I have deployed the contract already.

Functionalities are we can list our NFT under the marketplace and we can also buy them(transfer of ownership) and the best part is that everything is recorded in blockchain. So no fooling around.

Wrote seperate js files for seperate components under src/components.

1. Marketplace lists all the NFTs
2. NavBar is used to navigate to different pages and also has a connect button to connect to metamask.
3. NFT page is the page we get when we click on a NFT, and then we can see the details of the NFT there and can also buy it.
4. NFT tile is nothing but the tile shown in the marketplace page.
5. Profile is the page where we have all our own NFTs listed.
6. SellNFT is the page where we list the NFT or sell it to marketplace

The idea is first when we click upload file, we upload the image to IPFS provider(pinata in this case, using pinata API) and get an url for the nft.
If the file already exist in IPFS we will get an error.
We will have a json for the nft and we will add the pinata url for the image to the json of the nft.
Finally we add the whole json to the pinata again by clicking List NFT, then we will get a URI which we will use in the contract.
