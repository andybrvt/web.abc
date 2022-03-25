import image12 from '../../../../images/image12.png';
import image13 from '../../../../images/image13.png';
import image14 from '../../../../images/image14.png';
import image20 from '../../../../images/image20.png';


export const NFTShowcaseBlocks = [

  {
    id: 'NFTShowcase',
    label: "NFT Collection",
    category: "BlockChain",
    activate: true,
    media:
    `
      <div>
        <img class="img" src="${image20}" />
      </div>
    `,
    // content: {type: 'NFTShowcase'},
    content:
    `
        <div data-gjs-type= "NFTShowcase"></div>

    `,
    select:true,

  },
  {
    id: 'AutomaticNFTShowcase',
    label: "Automatic NFT Collection",
    category: "BlockChain",
    activate: true,
    media:
    `
      <div>
        <img class="img" src="${image20}" />
      </div>
    `,
    // content: {type: 'NFTShowcase'},
    content:
    `
        <div data-gjs-type= "AutomaticNFTShowcase"></div>

    `,
    select:true,

  },
  {
    id: 'TransactionList',
    label: 'Transactions List',
    category: "BlockChain",
    activate: true,
    media: `
      <div>
        <img class="img" src="${image13}" />
      </div>
    `,
    content: {
      activeOnRender: 1,
      type: 'TransactionList'
    },
    select:true,


  },{
    id: "Web3Stats",
    label: "Web3 Stats",
    category: 'BlockChain',
    activate: true,
    media: `
    <div>
      <img class="img" src="${image14}" />
    </div>`,
    content: {
      activeOnRender:1,
      type: 'StatsList'
    },
    select:true,

  }

]
