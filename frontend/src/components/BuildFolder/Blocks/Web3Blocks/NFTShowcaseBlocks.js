import image12 from '../../../../images/image12.png';


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
    content: {type: 'NFTShowcase'}
  },
  {
    id: 'TransactionList',
    label: 'TransactionList',
    category: "BlockChain",
    activate: true,
    media: `
      <div>Here is my transaction list</div>
    `,
    content: {
      activeOnRender: 1,
      type: 'TransactionList'}
  }

]
