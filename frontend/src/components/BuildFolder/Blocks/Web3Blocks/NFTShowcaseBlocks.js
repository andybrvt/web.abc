import image12 from '../../../../images/image12.png';
import image13 from '../../../../images/image13.png';


export const NFTShowcaseBlocks = [

  {
    id: 'NFTShowcase',
    label: "NFTShowcase",
    category: "BlockChain",
    activate: true,
    media:
    `
      <div>
        <img class="img" src="${image12}" />
      </div>
    `,
    content: {type: 'NFTShowcase'},
    select:true,

  },
  {
    id: 'TransactionList',
    label: 'TransactionList',
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
    media: `<div>This will be for the stats</div>`,
    content: {
      activeOnRender:1,
      type: 'StatsList'
    },
    select:true,

  }

]
