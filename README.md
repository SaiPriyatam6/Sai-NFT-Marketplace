**To view the NFTs we need to connect to the blockchain. Need a wallet like MetaMask to access blockchain.**

Wrote the smartcontract for minting nfts. The deploy script is also written and when we deploy it in the chain, we get a Marketplace.json file which will have address and abi of the contract, through which we can access the contract later.

I have deployed the contract already.

Functionalities are we can list our NFT under the marketplace and we can also buy them(transfer of ownership) and the best part is that everything is recorded in blockchain. So no fooling around.

Wrote seperate js files for seperate components under src/components.

1. Marketplace lists all the NFTs
![Screenshot (305)](https://user-images.githubusercontent.com/96336717/187281336-547df9dd-8a7c-41b1-bf51-68584c3410e2.png)

2. NavBar is used to navigate to different pages and also has a connect button to connect to metamask.
3. NFT page is the page we get when we click on a NFT, and then we can see the details of the NFT there and can also buy it.
![Screenshot (309)](https://user-images.githubusercontent.com/96336717/187281804-6554a69b-5c62-477a-8a55-f6c55bb41d7d.png)

4. NFT tile is nothing but the tile shown in the marketplace page.
5. Profile is the page where we have all our own NFTs listed.
![Screenshot (307)](https://user-images.githubusercontent.com/96336717/187281692-caefe2b2-71a0-4ee8-99a6-5624202ed01b.png)

6. SellNFT is the page where we list the NFT or sell it to marketplace.
![Screenshot (306)](https://user-images.githubusercontent.com/96336717/187281580-2da3ede6-07ea-484f-a8e6-d1ab7518ba84.png)

Pinata.js handles the uploading of data part.
The idea is first when we click upload file, we upload the image to IPFS provider(pinata in this case, using pinata API) and get an url for the nft.
If the file already exist in IPFS we will get an error.
We will have a json for the nft and we will add the pinata url for the image to the json of the nft.
Finally we add the whole json to the pinata again by clicking List NFT, then we will get a URI which we will use in the contract.
