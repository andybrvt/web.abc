import image25 from '../../../../images/image25.png';


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
      <div>
        <img class="img" src="${image25}" />
      </div>
    `,
    content: `
      <div data-gjs-type= "NFTMarketPlace"></div>
    `

  },

  {
    id: "NFTRoadMap",
    label: "NFT Road Map",
    category: "NFT Collection",
    activate: true,
    media: `
      <div>hey</div>
    `,
    content: `
      <div>hey</div>
    `
  }



]
