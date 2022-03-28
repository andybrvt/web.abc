/*
  This will be the real editor to edit stuff directly
*/
import React, { useState, useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './Editor.css'
import {BlocksContainer} from '../Blocks/BlocksContainer';
import {LayersContainer} from '../Layers/LayersContainer';
import {StylesContainer} from '../Styles/StylesContainer';
import {PagesContainer} from '../Pages/PagesContainer';
import {TraitsContainer} from '../Traits/TraitsContainer';
import {Drawer} from '../../UsefulComponents/Drawer';
import ProfileDropDown from './ProfileDropDown';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, Dropdown, Button as AntButton, Space, Popover as AntdPopover, Divider} from 'antd';
import { LockOutlined, PlusOutlined, RadarChartOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { Input, Form, List, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay, faTrash, faEye, faSave, faImage } from '@fortawesome/free-solid-svg-icons'
import {IconButtonCanvas} from '../../TestingFolder/ReactDesignerTest';
import { Button as Button, ButtonGroup, Box, Tooltip, useColorModeValue, Text, Stack, IconButton } from '@chakra-ui/react'
import { BlockAttribute } from '../BlockAttributes/BlockAttribute';
import {
  ButtonType1,
  ButtonType2,
  ButtonType3,
  ButtonType4,
  ButtonType5,
  CoreButtonType } from './CustomTypes/CustomButtonTypes';
import {
  UpdateTextType,
  Header1TextType,
  Header2TextType,
  Header3TextType,
  Header4TextType,
  Header5TextType,
  Header6TextType,
  ParagraphTextType
} from './CustomTypes/CustomTextTypes';
import {
  ShapeType,
  Circle1,
  Triangle2
} from './CustomTypes/CustomShapeTypes';
import {
  LineTypes,
  Line1,
  Line2,
} from './CustomTypes/CustomLineTypes';
import {
  InputTypes,
  Input1,
  Input2,
} from './CustomTypes/CustomInputTypes';
import {
  RowCore,
  ColumnCore,
} from './CustomTypes/CustomTemplateTypes';
import {
  CustomLinkText1
} from './CustomTypes/CustomHeaderNavTypes';
import {
  CustomBoxType
} from './CustomTypes/CustomBoxType';
import {
  CustomNFTShowcase,
  CustomAutomaticNFTShowcase,
  CustomTransactionList,
  CustomStatsList,
  CustomAddressProfile
} from './CustomTypes/CustomBlockChainType';
import {
  CustomCopyToClipboard
} from './CustomTypes/CustomCopyToClipboardTypes';
import {
  CustomSocialMediaFooter
} from './CustomTypes/CustomSocialMediaType';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import grapesjsStyleBg from 'grapesjs-style-bg';
import image1 from '../../../images/image3.png';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Lorem
} from '@chakra-ui/react'
import axios from 'axios';
import { useEthers } from "@usedapp/core";
import { useParams } from 'react-router-dom';
import {PickNFTModal} from '../NFT/PickNFTModal';
import {PickImageModal} from './PickImageModal';
import {AddSocialMediaModal} from '../SocialMedia/AddSocialMediaModal';
import {EditorHeader} from './EditorHeader'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import * as dateFns from 'date-fns';
import { TestModal } from './TestModal';

const PLUGINS = [
  grapesjsBlocksBasic,
  CoreButtonType,
  ButtonType1,
  ButtonType2,
  ButtonType3,
  ButtonType4,
  ButtonType5,
  UpdateTextType,
  Header1TextType,
  Header2TextType,
  Header3TextType,
  Header4TextType,
  Header5TextType,
  Header6TextType,
  ParagraphTextType,
  ShapeType,
  Circle1,
  Triangle2,
  LineTypes,
  Line1,
  Line2,
  InputTypes,
  Input1,
  Input2,
  RowCore,
  ColumnCore,
  grapesjsStyleBg,
  CustomLinkText1,
  CustomBoxType,
  CustomNFTShowcase,
  CustomAutomaticNFTShowcase,
  CustomTransactionList,
  CustomStatsList,
  CustomAddressProfile,
  CustomCopyToClipboard,
  CustomSocialMediaFooter
]



const translatedItems = [
  'mTemplate1',
  'mTemplate2',
  'mTemplate3',
  'template1',
  'template2',
  'template3',
  'info1',
  'info2',
  "info3",
  "info4",
  "info5",
  "info6",
  "header1",
  "header2",
  "header3",
  "footer1",
  "NFTShowcase",
  "Web3Stats",
  "TransactionList",
  'AutomaticNFTShowcase',
  'AddressProfile',
  "SocialMediaFooter1"
]


export const Editor = (props) => {

  const Web3Api = useMoralisWeb3Api()
  // const {  onOpen, onClose, testOpen } = useDisclosure()

  const { isOpen: isNFTOpen, onOpen: onNFTOpen, onClose: onNFTClose } = useDisclosure()
  const { isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose } = useDisclosure()
  const { isOpen: isSocialMediaOpen, onOpen: onSocialMediaOpen, onClose: onSocialMediaClose} = useDisclosure()

  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const btnRef = React.useRef()



  const {websiteId} = useParams()


  const {activateBrowserWallet, account, chainId } = useEthers();
  const [preview, setPreview] =useState(false);
  const [editorMain, setEditor] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [toolsCategory, setToolsCategory] = useState("");
  const [pageIds, setPageIds] = useState([]);


  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [popOver, setPopOver]= useState(true);
  const [TextCssVariable, setTestCssVariable]= useState(null);
  const [BlockClickType, setBlockClickType]= useState(null);

  const [showModal, setShowModal] = useState(false);



  const closeImageModal=() => {
    setImageModal(false)
  }

  const useOutSideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event){
        const className = event.srcElement.className
        if (ref.current && !ref.current.contains(event.target) && typeof className ==="string") {
            if(className.includes("gjs-frame")){
              setVisibility(false)
            }}}
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.addEventListener("mousedown", handleClickOutside)
      }
    }, [ref]);
  }

  function testCoord (xVal, yVal, widthVal, heightVal){
    setCurrentX(xVal+100)
    setCurrentY(yVal)
    setCurrentWidth(widthVal)
    setCurrentHeight(heightVal)
    setTestCssVariable({
            position: "absolute",
            left: xVal,
            top: yVal,

            color: "red",
          })
  }

  const wrapperRef  = useRef(null);
  useOutSideAlerter(wrapperRef)

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: 1,
      allowScripts: 1,
      dragMode: 'translate',
      height: '95vh',
      width: 'auto',
      plugins:PLUGINS,
      autosave: true,
      pluginsOpts: {
        grapesjsStyleBg:{}
      },
      selectorManager: {
         componentFirst: true,
       },
      canvas:{
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          'https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&subset=latin,latin-ext',
          'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap',
          // open sans
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap',
          // roboto
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
          // lato, raleway, poppins
          'https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@300&family=Raleway:wght@300&display=swap',
          // meriwether
          'https://fonts.googleapis.com/css2?family=Merriweather&display=swap',
          // Montserrat
          "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
        ],
        scripts:  [
          "https://kit.fontawesome.com/2638379ee9.js",
          "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js",
          "https://unpkg.com/moralis/dist/moralis.js",
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"

        ]
      },

      // this is the local storage
      // storageManager: {
      //   id: 'gjs-', // just the identifier that you will be using
      //   type: 'local', // type of storage
      //   autosave: true,
      //   autoload: true,
      //   stepsBeforeSave: 1, // how mnay changes are neccary before save happens,
      //   storeComponents: true, // enable/disable storing of componets in JSON format
      //   storeStyles: true,
      //   storeHtml: true,
      //   storeCss: true
      // },
      // // this is the remote storage (probally gonna use this one here)
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 2,
        urlStore: `${global.API_ENDPOINT}/builder/saveWebsite/${websiteId}`,
        urlLoad: `${global.API_ENDPOINT}/builder/loadWebsite/${websiteId}`, // django endpoint would go here
        contentTypeJson: true,
        params: {
        },
        headers: {
          "Content-Type": "application/json",
        }
      },
      assetManager:{
        assets: [
      'https://via.placeholder.com/350x250/78c5d6/fff/image1.jpg',
      'https://via.placeholder.com/350x250/459ba8/fff/image2.jpg',
      'https://via.placeholder.com/350x250/79c267/fff/image3.jpg',
      'https://via.placeholder.com/350x250/c5d647/fff/image4.jpg',
      'https://via.placeholder.com/350x250/f28c33/fff/image5.jpg',
      'https://via.placeholder.com/350x250/e868a2/fff/image6.jpg',
      'https://via.placeholder.com/350x250/cc4360/fff/image7.jpg',
    ],
        // custom:true,
      },
      panels: {
        defaults: [

        // {
        //   id:'panel-switcher', // id of the element, honestly be any becuase you are adding shit in
        //   el: '.panel__switcher', // this is the element you want to put it in
        //   buttons:[
        //     {
        //       id: 'show-layers',
        //       active: true, // gotta set this one too to active only (like the button is clicked on)
        //       label: 'Layers',
        //       command: "show-layers", //PUT BACK LATER
        //       togglable: false,
        //     },
        //     {
        //       id: 'show-style',
        //       active: true, // means when the button is active then the thing runs
        //       label: 'Styles',
        //       command: 'show-styles', // PUT BACK LATER
        //       togglable: false
        //     },
        //     {
        //       id: 'Traits',
        //       active: true,
        //       label: "Traits",
        //       command: 'show-traits',
        //       togglable: false
        //     },
        //     {
        //       id: 'alert-button',
        //       className: 'btn-alert-button',
        //       label: 'Clear',
        //       command(editor) {
        //         // editor.BlockManager.getAll().reset();
        //         editor.runCommand('core:canvas-clear');
        //       }
        //
        //     },
        //     {
        //       id: 'export',
        //       className: 'btn-alert-button',
        //       label: "Export",
        //       command(editor){
        //         editor.runCommand("export-template")
        //       }
        //     },
        //
        //   ]
        // },


      ]
      },
      pageManager: {
        // pages: [
        //   {
        //     id: 'page 1',
        //     name: 'Page 1',
        //     component: '<div id="comp1">Page 1</div>',
        //
        //   },
        // ]
      },
      traitManager: {
       appendTo: '.trait-container',
      },
      styleManager: {

      },
      deviceManager:{
        devices:[
          {
            name: 'Desktop',
            width: '',
          }, {
            name: 'Mobile',
            width: '320px', // value used on canvas width
            widthMedia: '480px', // this value will be used in css@media
          }
        ]
      },
      blockManager: {
        appendTo: '#blocks',
      }

    })




    editor.DomComponents.addType("NFTShowcase", {
      view: {
        onActive(){
          onNFTOpen()
        }
      }
    })

    editor.DomComponents.addType("SocialMediaFooter", {
      view: {
        onActive(){
          onSocialMediaOpen()
        }
      }
    })

    editor.addComponents(`<script src="https://kit.fontawesome.com/2638379ee9.js" crossorigin="anonymous"></script>`);

    // editor.addComponents(`
    //   <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" crossorigin="anonymous"></script>
    //   <script src="https://unpkg.com/moralis/dist/moralis.js" crossorigin="anonymous"></script>
    //   `)

    editor.runCommand('sw-visibility');
    editor.on("block:drag:start", (block, obj) => {
      setVisibility(false)

      if(translatedItems.includes(block.id)){
        editor.setDragMode("translate")
      } else {
        editor.setDragMode("absolute")
      }
    })

    {/*
      new modal
    let bstModal, modalTitle, modalBody;
    editor.on('modal', (props) => {
      if (!bstModal) {
        // const modalEl = document.getElementById('gjsModal');
        // modalTitle = document.querySelector('.modal-title');
        // modalBody = document.querySelector('.modal-body');
        // bstModal = new bootstrap.Modal(modalEl);
        // update GrapesJS modal state when Bootstrap modal is closed
        const modalEl = document.getElementById('gjsModal');
        bstModal = new bootstrap.Modal(modalEl);
        modalEl.addEventListener('hide.bs.modal', props.close);
      }

      if (props.open) {
        // // clear the current elements
        // modalTitle.innerHTML = '';
        // modalBody.innerHTML = '';
        // // Add new elements
        // modalTitle.appendChild(props.title);
        // modalBody.appendChild(props.content);
        bstModal.show();
      } else {
        bstModal.hide();
      }
    });
    */}

    editor.on("block:drag:stop", async(block, obj) => {


      // delete this later so that it is the actual account
      const account = "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab";

      if(block !== null){

        // GOTTA SET THIS SO IT CAN RUN ON PREVIEW TOO

        const type = block.get('type')
        console.log(type)


        if(type === "AddressProfile"){

          const wrapper = editor.getWrapper()
          const el = wrapper.find('.copy-to-clipboard-address-button')[0]
          el.addAttributes({"value":account})
          el.components(account.slice(0, 15) +'...')
        }


        // This is where you set the scripts
        // Remember this has nothing to do with the outside information
        // this is strictly within the iframe
        if(type === "AutomaticNFTShowcase"){
          block.set("script", `
            async function script(props){

              const fixURL = (url) => {
                if(url !== null && url !== undefined){
                  if(url.startsWith("ipfs")){
                    return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://").slice(-1)[0]
                  }
                  else {
                    return url+"?format=json"
                  }

                }
              }

              function imageExists(image_url){

                  var http = new XMLHttpRequest();

                  http.open('HEAD', image_url, false);
                  http.send();

                  return http.status != 404;

              }


              // let spinnerWrapper = document.getElementsByClassName("nft-collection-container-background")[0].getElementsByClassName("");

              let placeHolderContainer = document.getElementsByClassName("delete-nft-collectionContainer")[0];

              console.log(placeHolderContainer, 'test test test')
              let collectionContainer = document.querySelectorAll(".nft-collection-container");

              const serverUrl = "https://9gobbcdpfilv.usemoralis.com:2053/server";
              const appId = "bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg";
              Moralis.start({ serverUrl, appId });
              const options = {
                chain: "eth",
                address: "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab",
              }

              const nftList = await Moralis.Web3API.account.getNFTs(options);


              placeHolderContainer.parentElement.removeChild(placeHolderContainer);


              nftList.result.forEach(function(nft){
                let url = fixURL(nft.token_uri);

                fetch(url)
                .then(response => response.json())
                .then(data => {
                  const img = fixURL(data.image);
                  const name = data.name;

                  console.log(imageExists(img), 'does it exist')

                  if(imageExists(img)){
                    collectionContainer.forEach((collection) => {
                      console.log(collection)


                      var nftContainers= document.createElement("div");
                      nftContainers.className = 'nftContainers';

                      // The card porition of the nft (picture)
                      var nftCards = document.createElement("div")
                      nftCards.className = "nftCards";
                      var nftImages = document.createElement("img");
                      nftImages.className = "nftImages";
                      nftImages.src = img;
                      nftCards.appendChild(nftImages);


                      // The name porition of the nft
                      var nftName = document.createElement("div");
                      nftName.className = "nftName";
                      var nftNameText = document.createElement("div");
                      nftNameText.className = "nftNameText";
                      nftNameText.appendChild(document.createTextNode(name));
                      nftName.appendChild(nftNameText);


                      nftContainers.appendChild(nftCards);
                      nftContainers.appendChild(nftName);

                      collection.appendChild(nftContainers);
                    })



                  }


                })
                .catch(err => {
                  console.log(err)
                })

              })



            }
          `)

        }


        if(type === "TransactionList"){
          const transactionAddress = 'https://etherscan.io/tx/'
          const addressAddress = "https://etherscan.io/address/"

          block.set("script", `
            async function script(props){

              let spinnerWrapper = document.getElementsByClassName("nft-transactions-background-container")[0].getElementsByClassName("spinner-border")[0]
              console.log(spinnerWrapper)

              const transactionAddress = 'https://etherscan.io/tx/'
              const addressAddress = "https://etherscan.io/address/"

              const renderTimestamp = timestamp =>{
                let prefix = '';
                const timeDiff = Math.round((new Date().getTime() - new Date(timestamp).getTime())/60000)
                if (timeDiff < 1 ) {
                  prefix = 'Just now';
                } else if (timeDiff < 60 && timeDiff >= 1 ) {
                  prefix = timeDiff+' minutes ago';
                }else if (timeDiff < 24*60 && timeDiff > 60) {
                  prefix = Math.round(timeDiff/60)+' hours ago';
                } else if (timeDiff < 31*24*60 && timeDiff > 24*60) {
                  prefix = Math.round(timeDiff/(60*24))+' days ago';
                } else {
                    prefix = new Date(timestamp).toLocaleDateString("en-US");
                }

                return prefix;
              }

              const serverUrl = "https://9gobbcdpfilv.usemoralis.com:2053/server";
              const appId = "bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg";
              Moralis.start({ serverUrl, appId });



              const options = {
                chain: "eth",
                address: "${account}",
                order: "desc",
                from_block: "0",
              };
              const transactions = await Moralis.Web3API.account.getTransactions(options);
              const recentTransactions = transactions.result.slice(0,20)


              spinnerWrapper.parentElement.removeChild(spinnerWrapper);



              let transactionContainer = document.querySelectorAll(".nft-transactions-container");
              console.log(transactionContainer)

              transactionContainer.forEach((container) => {
                console.log(container)

                recentTransactions.forEach((transaction, index) => {
                  console.log(transaction)

                  var element = document.createElement("div");
                  element.className = "transactionItem";
                  element.key = index;

                  // FOR TX SYMBOL
                  var txBox = document.createElement("div");
                  txBox.className += "txBox";
                  var tx = document.createElement("div");
                  tx.appendChild(document.createTextNode("TX"));
                  txBox.appendChild(tx);
                  element.appendChild(txBox);

                  // FOR HASH BLOCK
                  var hashBlock = document.createElement("div");
                  hashBlock.className += "hashBlock";
                  var hash = document.createElement("div")
                  var hashLink = document.createElement("a")
                  hashLink.href = transactionAddress+transaction.hash;
                  hashLink.appendChild(document.createTextNode(transaction.hash.slice(0,14)+"..."))
                  hash.appendChild(hashLink)
                  hashBlock.appendChild(hash)
                  element.appendChild(hashBlock)


                  // FOR TO FROM BLOCK
                  var toFromBlock = document.createElement("div")
                  toFromBlock.className = "toFromBlock";

                  var toFromContainer = document.createElement("div")
                  toFromContainer.className = "toFromContainer";

                  var fromContainer = document.createElement("div");
                  fromContainer.appendChild(document.createTextNode("From "));
                  var fromHash = document.createElement("a");
                  fromHash.href = addressAddress + transaction.from_address;
                  fromHash.appendChild(document.createTextNode(transaction.from_address.slice(0,14)+'...'));
                  fromContainer.appendChild(fromHash)

                  var toContainer = document.createElement("div");
                  toContainer.appendChild(document.createTextNode("To "));
                  var toHash = document.createElement("a");
                  toHash.href =addressAddress + transaction.to_address;
                  toHash.appendChild(document.createTextNode(transaction.to_address.slice(0,14)+"..."));
                  toContainer.appendChild(toHash);

                  toFromContainer.appendChild(fromContainer)
                  toFromContainer.appendChild(toContainer)

                  toFromBlock.appendChild(toFromContainer)
                  element.appendChild(toFromBlock)



                  // DATEBLOCK
                  var dateBlock = document.createElement("div")
                  dateBlock.className = "dateBlock";
                  var dateCont = document.createElement("div")
                  dateCont.appendChild(document.createTextNode(renderTimestamp(transaction.block_timestamp)));
                  dateBlock.appendChild(dateCont);

                  element.appendChild(dateBlock);

                  container.appendChild(element)


                })


              })
            }
          `)
        }

        if(type === "StatsList"){

          // GOTTA SET THIS SO IT CAN RUN ON PREVIEW
          const transactionsOptions = {
            chain: "eth",
            address: "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab",
            order: "desc",
            from_block: "0",
          };
          // const transactions = await Web3Api.account.getTransactions(transactionsOptions)

          const transfersOptions = {
            chain: "eth",
            address: "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab",
            from_block: "0",
          };
          // const transfers = await Web3Api.account.getTokenTransfers(transfersOptions);


          const nftTransfersOptions = {
            chain: "eth",
            address: "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab",
            limit: "5",
          };

          let [transactions, transfers,transfersNFT] = await Promise.all([
            Web3Api.account.getTransactions(transactionsOptions),
            Web3Api.account.getTokenTransfers(transfersOptions),
            Web3Api.account.getNFTTransfers(nftTransfersOptions)
          ])

          const totalTransactions = transactions.total
          const totalTransfers = transfers.total
          const totalTransfersNFT = transfersNFT.total
          const target = block
          const targetId = block.getId()

          block.set("script", `
            async function script(props){

              const serverUrl = "https://9gobbcdpfilv.usemoralis.com:2053/server";
              const appId = "bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg";
              Moralis.start({ serverUrl, appId });

              const transactionsOptions = {
                chain: "eth",
                address: "${account}",
                order: "desc",
                from_block: "0",
              };

              const transfersOptions = {
                chain: "eth",
                address: "${account}",
                from_block: "0",
              };


              const nftTransfersOptions = {
                chain: "eth",
                address: "${account}",
                limit: "5",
              };

              let [transactions, transfers,transfersNFT] = await Promise.all([
                Moralis.Web3API.account.getTransactions(transactionsOptions),
                Moralis.Web3API.account.getTokenTransfers(transfersOptions),
                Moralis.Web3API.account.getNFTTransfers(nftTransfersOptions)
              ])

              const totalTransactions = transactions.total
              const totalTransfers = transfers.total
              const totalTransfersNFT = transfersNFT.total



              let containers = document.querySelectorAll(".numTransactions, .numTransfers, .numNFTTransfers");
              let interval = 2000;


              containers.forEach((container) => {

                console.log(container.className);

                let startValue = 0;
                let endValue = 0;
                if(container.className === "numTransactions"){
                  endValue = parseInt(totalTransactions);
                }
                if(container.className === "numTransfers"){
                  endValue = parseInt(totalTransfers);
                }
                if(container.className === "numNFTTransfers"){
                  endValue = parseInt(totalTransfersNFT);
                }

                let duration = Math.floor(interval/endValue);
                let counter = setInterval(function(){
                  startValue += 1;
                  container.textContent = startValue;
                  if(startValue == endValue || endValue == 0){
                    clearInterval(counter);
                  }
                }, duration);

              })
            }
          `)




        }

      }


    })



    editor.Commands.add('open-live-preview', {
      run(editor, sender){

        const pageId = editor.Pages.getSelected().getId()
        props.history.push(`/previewPage/${websiteId}/${pageId}`)
        // const html = editor.getHtml();
        // const css = editor.getCss();
        // const js = editor.getJs();
        // console.log(js)
        // let formData = new FormData()
        // formData.append("css", css)
        // formData.append('js', js)
        //
        //
        // axios.post(`${global.API_ENDPOINT}/builder/uploadCss`, formData)
        // .then(res=> {
        //
        //   props.history.push(`/previewPage/${websiteId}/1`, {
        //     html: html,
        //     css: css,
        //     js: js,
        //     websiteId:websiteId,
        //     pageId: 1,
        //   })
        //
        // })


      }

    })

    editor.on('run:export-template:before', opts => {
      console.log('Before the command run');
      if (0 /* some condition */) {
        opts.abort = 1;
      }
    });

    editor.on('component:selected', (block, obj) =>{
      setBlockClickType(block._previousAttributes.type)



      // console.log(editor.Canvas.getElementPos(editor.getSelected().getEl()))
      // console.log(editor.Canvas.getElementPos(editor.getSelected().getEl()).top)
      // console.log(editor.Canvas.getElementPos(editor.getSelected().getEl()).left)
      // if(obj.event) {
      //   if(obj.event.clientX!=null || obj.event.clientY!=null ) {
      //     // console.log(obj.event.clientX)
      //
      //     // console.log(obj.event.clientY)
      //     testCoord(
      //      editor.Canvas.getElementPos(editor.getSelected().getEl()).left,
      //      editor.Canvas.getElementPos(editor.getSelected().getEl()).top,
      //      obj.event.srcElement.clientWidth, obj.event.srcElement.clientHeight
      //     )
      //   }
      // }




      // SET SCRIPTS AT DEPLOYMENT ONLY (OR YOU CAN RUN THIS ON JUST THE PREVIEW PAGE
      // NO NEED TO HAVE ANY CONNECTIONS WITH THE EDITOR)
      // const target = editor.getSelected()
      // const targetId = target.getId()
      //
      // target.set("script", `
      //
      //   async function script(props){
      //     Moralis.initialize("bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg");
      //     Moralis.serverURL = "https://9gobbcdpfilv.usemoralis.com:2053/server";
      //
      //     console.log('does this work 12341234')
      //     const options = {
      //       chain: "rinkeby",
      //       address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
      //     };
      //
      //     const nftList = await Moralis.Web3.getNFTs(options);
      //
      //     console.log(nftList)
      //
      //     // used to set it after wards when running the program
      //     // const collection = document.getElementsByClassName("nftImages")
      //     //
      //     // for(let i = 0; i< collection.length; i++){
      //     //     collection[i].src = nftList[]
      //     // }
      //
      //
      //   }
      //
      //
      //
      // `)

      //HERE IS A WAY TO SET THE JAVASCRIPT ON CLICK FUNCTION
      // GONNA PUT THIS IN A FUNCTION CALL LATER
      // const target = editor.getSelected()
      // const targetId = target.getId()
      // console.log(targetId)
      // target.set("script", `
      //   function script(props) {
      //     var element = document.getElementById("${targetId}");
      //     element.addEventListener("click", function () {
      //       console.log('this works')
      //     });
      //   }
      //
      // `)



    })

    editor.on("storage:store", function(e){


    })


    editor.on("storage:load", function(e){
      axios.get(`${global.API_ENDPOINT}/builder/getWebsitePages/${websiteId}`)
      .then(res=> {
        setPageIds(res.data)
      })
    })

    editor.on('run:export-template', () => console.log('After the command run'));
    editor.on('abort:export-template', () => console.log('Command aborted'));

    editor.on("component:add", (model, argument) => {


    })
    setEditor(editor)
  },[account])

  const renderTimestamp = timestamp =>{
    console.log(timestamp)
    let prefix = '';
    console.log(new Date().getTime())
    console.log(new Date(timestamp).getTime())
    const timeDiff = Math.round((new Date().getTime() - new Date(timestamp).getTime())/60000)
    console.log(timeDiff)
    if (timeDiff < 1 ) {
      prefix = `Just now`;
    } else if (timeDiff < 60 && timeDiff >= 1 ) {
      prefix = `${timeDiff} minutes ago`;
    }else if (timeDiff < 24*60 && timeDiff > 60) {
      prefix = `${Math.round(timeDiff/60)} hours ago`;
    } else if (timeDiff < 31*24*60 && timeDiff > 24*60) {
      prefix = `${Math.round(timeDiff/(60*24))} days ago`;
    } else {
        prefix = `${new Date(timestamp).toLocaleDateString("en-US")}`;
    }

    return prefix;
  }

  // mechanics for opening and closing the drawer
  const changeDrawerVisibility = (category) => {

    if(visibility === false){
      setToolsCategory(category)
      setVisibility(true)
    } else{
      if(category !== toolsCategory){
        setToolsCategory(category)
        if(!visibility){
          setVisibility(true)
        }
      } else {
        setToolsCategory('')
        setVisibility(false)
      }
    }
  }

  const showPreview = () => {
    editorMain.runCommand('open-live-preview');

  }

  const clearCanvas = () => {
    editorMain.runCommand('core:canvas-clear')
  }


  const storeEditor = () => {

    const websiteId = props.history.location.state.websiteId


    const formData =  new FormData()
    formData.append("publicKey", 1)
    const allPages = editorMain.Pages.getAll();
    formData.append("numPages", allPages.length)
    formData.append("name", 'some test name') //Change this later
    formData.append("owner", account)


    const htmlAll = allPages.map((p, index) => {
      var pageName = p.getName()
      var pageId = p.getId()
      var pageComp = p.getMainComponent()
      var html = editorMain.CodeManager.getCode(pageComp, "html")
      var css = editorMain.CodeManager.getCode(pageComp, 'css')
      var js = editorMain.CodeManager.getCode(pageComp, "js")



      var pageDict = {
        "name": pageName,
        'pageId': pageId,
        'html': html,
        'css': css,
        'js': js
      }
      formData.append(index, JSON.stringify(pageDict))
      // temp variable



    })


    axios.post(`${global.API_ENDPOINT}/builder/saveWebPreview/${websiteId}`, formData)

  }

  return(
    <div>


      <EditorHeader/>



      <div class="editorRow">
        <div class = "firstColumn">
          <div className = "mainButtons">
            <div className = "mainButtonHolder">
             <AntButton
               onClick = {() => changeDrawerVisibility("basic")}
               type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            {/*
              <div className = "buttonHolder">
                <AntButton
                  onClick = {() => changeDrawerVisibility("shapes")}
                  type="primary" shape="circle" icon={<FontAwesomeIcon style={{marginRight:5}} icon={faShapes} />} size="large" />
              </div>

              */}


            {/*
              <div className =<<< "buttonHolder">
                <AntButton
                  onClick = {() => changeDrawerVisibility("input")}
                  type="primary" shape="circle" icon={<FontAwesomeIcon icon={faKeyboard} />} size="large" />
              </div>

              */}


            <div className = "buttonHolder">
              <AntButton
                onClick = {() => showPreview()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faEye} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() =>

                  setImageModal(true)
                 }
                shape="circle"
                 icon={<FontAwesomeIcon icon={faImage} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() => showPreview()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faEye} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() => storeEditor()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faSave} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() => clearCanvas()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faTrash} />} size="large" />
            </div>

          </div>
        </div>

        <div ref = {wrapperRef}>
          <Drawer  visibility = {visibility}>

              <BlocksContainer editor = {editorMain} category ={toolsCategory}/>


          </Drawer>
        </div>
        <div class="column">
          <div id = "gjs"></div>
        </div>


        <BlockAttribute
          blockType={BlockClickType}
          editor = {editorMain}/>

      </div>

      <PickNFTModal
        editor = {editorMain}
        onClose = {onNFTClose}
        isOpen = {isNFTOpen}
        scrollBehavior={scrollBehavior}/>

      <AddSocialMediaModal
        editor = {editorMain}
        onClose = {onSocialMediaClose}
        isOpen = {isSocialMediaOpen}

         />

      <PickImageModal
          editor = {editorMain}
          onClose = {onImageOpen}
          isOpen = {isImageOpen}
          scrollBehavior={scrollBehavior}/>


        <TestModal
          editor = {editorMain}
          visible={imageModal}
          closeModal={closeImageModal}
        />

    </div>


  )
}
