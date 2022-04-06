

export const NFTCollectionBlocks = [

  {
    id: 'MintNFTButton',
    label: "Mint NFT Button",
    category: "NFT Collection",
    activate: true,
    media: `
      <div>
        <button type="button" class="btn btn-primary">Mint</button>
      </div>
    `,
    content: `
      <div data-gjs-type= "MintNFTButton"></div>
    `


  },
  {
    id: "NFTMarketPlace",
    label: "NFT Market Place",
    category: "NFT Collection",
    activate: true,
    media: `
      <div>this is a market place</div>
    `,
    content: `
      <div data-gjs-type= "NFTMarketPlace"></div>
    `

  }


]
