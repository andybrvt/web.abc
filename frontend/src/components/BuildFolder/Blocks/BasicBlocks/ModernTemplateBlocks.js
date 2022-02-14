const rowStyle  = `
  .rowStyleM{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    padding: 10px;
  }
`
const rowStyleMedia = `
  .rowStyleM{
    position: relative;
    width: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
  }
`
const colStyle = `
.colStyleM{
  position: relative;
  min-height: 100px;
  max-height: 80vh;
  height: 80vh;
  flex-grow: 1;
  flex-basis: 100%;
  overflow:hidden;
}
`

const colStyleMedia = `
.colStyleM{
  position: relative;
  height: 150px;
  flex-grow: 1;
  flex-basis: 100%;
  overflow:hidden;
}
`

// this will be used more for modernized templates like that of the
// web3 space
export const ModernTemplateBlocks = [
  {
    id: 'mTemplate1',
    category: 'Modern Template',
    media: `<div>Stuff here</div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .gradientBackground{
          padding:25px;
          text-align: center;
          color: white;
          min-height: 500px;
          font: caption;
          background-image: linear-gradient(90deg, #00FFFF 1%, #F5F5DC 99%)
        }
      </style>
      <div class="rowStyleM">
        <div class="colStyleM">

        <div
          class ='gradientBackground'
        ></div>
        </div>
      </div>
    `
  }


]
