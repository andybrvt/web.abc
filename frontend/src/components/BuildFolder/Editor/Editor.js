/*
  This will be the real editor to edit stuff directly
*/

import React, { useState, useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './Editor.css';
import imageUser from '../../../images/imageUser.png';
import {BlocksContainer} from '../Blocks/BlocksContainer';
import {NFTBlocksContainer} from '../Blocks/NFTBlocksContainer';
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
  renderNFTTemplate1
} from './CustomTypes/NFTCollection1';
import {
  CustomCopyToClipboard
} from './CustomTypes/CustomCopyToClipboardTypes';
import {
  CustomSocialMediaFooter
} from './CustomTypes/CustomSocialMediaType';
import {
  CustomMintNFTButton,
  CustomNFTMarketPlace,
  CustomNFTRoadMap,
  CustomConnectToWalletButton
} from './CustomTypes/CustomNFTCollectionTypes';

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
import {NFTRoadMapModal} from '../NFT/NFTRoadMapModal';
import {PickImageModal} from './PickImageModal';
import {AddSocialMediaModal} from '../SocialMedia/AddSocialMediaModal';
import {EditorHeader} from './EditorHeader'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import * as dateFns from 'date-fns';
import { TestModal } from './TestModal';
import {InitialEditorModal} from './InitialEditorModal';
import { TrashModal } from './TrashModal'
import { useScreenshot } from "use-screenshot-hook";

import astro from '../Blocks/BasicBlocks/NFTCollectionTemplates/astro.svg';
import coding from '../Blocks/BasicBlocks/NFTCollectionTemplates/coding.svg';
import apartment from '../Blocks/BasicBlocks/NFTCollectionTemplates/apartment.svg';
import creating from '../Blocks/BasicBlocks/NFTCollectionTemplates/creating.svg';


import twitter from '../Blocks/BasicBlocks/NFTCollectionTemplates/twitter.png';
import opensea  from '../Blocks/BasicBlocks/NFTCollectionTemplates/opensea.png';
import discord from '../Blocks/BasicBlocks/NFTCollectionTemplates/discord.png';
import space1 from '../Blocks/BasicBlocks/NFTCollectionTemplates/space1.svg';
import space2 from '../Blocks/BasicBlocks/NFTCollectionTemplates/space2.svg';
import space3 from '../Blocks/BasicBlocks/NFTCollectionTemplates/space3.svg';
const PLUGINS = [
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
  CustomLinkText1,
  CustomBoxType,
  CustomNFTShowcase,
  CustomAutomaticNFTShowcase,
  CustomTransactionList,
  CustomStatsList,
  CustomAddressProfile,
  CustomCopyToClipboard,
  CustomSocialMediaFooter,
  CustomMintNFTButton,
  CustomConnectToWalletButton,
  CustomNFTMarketPlace,
  CustomNFTRoadMap,
  renderNFTTemplate1,
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
  "SocialMediaFooter1",
  "NFTMarketPlace",
  "NFTRoadMap",
  'renderNFTTemplate1'
]


export const Editor = (props) => {

  const Web3Api = useMoralisWeb3Api()
  const ref1 = useRef(null);
    const { image, takeScreenshot } = useScreenshot({ref:ref1});
  // Open and close for modals
  const { isOpen: isNFTOpen, onOpen: onNFTOpen, onClose: onNFTClose } = useDisclosure()
  const { isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose } = useDisclosure()
  const { isOpen: isSocialMediaOpen, onOpen: onSocialMediaOpen, onClose: onSocialMediaClose} = useDisclosure()
  const { isOpen: isInitialModalOpen, onOpen: onInitialModalOpen, onClose: onInitialModalClose} = useDisclosure()
  const { isOpen: isNFTRoadMapOpen, onOpen: onNFTRoadMapOpen, onClose: onNFTRoadMapClose} = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const btnRef = React.useRef()


  const {websiteId, buildType} = useParams()


  const {activateBrowserWallet, account, chainId } = useEthers();
  const [preview, setPreview] =useState(false);
  const [editorMain, setEditor] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [trashCondition, setTrashCondition] = useState(false);
  const [toolsCategory, setToolsCategory] = useState("");
  const [pageIds, setPageIds] = useState([]);
  const [personalWebsiteUsername, setPersonalWebsiteUsername] = useState("");
  const [personalProfilePic, setPersonalProfilePic]=useState("");
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [popOver, setPopOver]= useState(true);
  const [TextCssVariable, setTestCssVariable]= useState(null);
  const [BlockClickType, setBlockClickType]= useState(null);

  const [showModal, setShowModal] = useState(false);
  const [isNewlyCreated, setIsNewlyCreated] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  const closeImageModal=() => {
    setImageModal(false)
  }

  const openTrashModal=() => {
    setTrashCondition(true)
  }

  const closeTrashModal=() => {
    setTrashCondition(false)
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


  const showPersonalTemplate = (editor) =>{

  }





  const getAllNotes= () => {
    axios.get(`${global.API_ENDPOINT}/builder/getPersonalSiteUsername/${websiteId}`)
      .then(res => {

        setPersonalWebsiteUsername(res.data);

      })

      // axios.get(`${global.API_ENDPOINT}/builder/getPersonalSiteProfilePic/${websiteId}`)
      // .then(res => {
      //   console.log(res.data, 'what is this here')
      //   setPersonalProfilePic(res.data)
      // })
  }




  useEffect(() => {
    getAllNotes();

    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: 1,
      allowScripts: 1,
      dragMode: 'translate',
      height: '95vh',
      width: 'auto',
      plugins:PLUGINS,
      autosave: true,

      selectorManager: {
         componentFirst: true,
       },
      layerManager: {
        appendTo: '.layers-container'
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
          //poor story
          "https://fonts.googleapis.com/css2?family=Poor+Story&display=swap",
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

        ],
        // custom:true,
      },
      panels: {
        defaults: []
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

    editor.DomComponents.addType("NFTMarketPlace", {
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
    editor.DomComponents.addType("NFTRoadMap", {
      view: {
        onActive(){
          onNFTRoadMapOpen()
        }
      }
    })

    // editor.runCommand('sw-visibility');
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
      const account = "0x5b92a53e91495052b7849ea585bec7e99c75293b";
      // const account = "0x53a19F44548182602b3B665AB9B9717735Ed53be";


      if(block !== null){

        // GOTTA SET THIS SO IT CAN RUN ON PREVIEW TOO

        const type = block.get('type')
        console.log(type)


        if(type === "AddressProfile"){


          block.append(

            <div data-gjs-type ="box" class = "profile-inner-wrapper">
              <div class = "userCircleWrapper">
                <div class = "userCircle">
                  {
                    (personalProfilePic)?
                    <img data-gjs-type ="image" class = "circleProfilePic" src = {personalProfilePic}/>
                    :
                    ''
                  }

                </div>
              </div>
              <div class = "centerInfo">
              <h1 data-gjs-type ="text">
                        {personalWebsiteUsername?
                          <div>
                            {personalWebsiteUsername}
                          </div>
                        :
                        <div>
                          @usernamebbb
                        </div>


                        }

                        </h1>
              </div>


                <div data-gjs-type ="CopyToClipboard" value = {account} >
                  {account.slice(0,15)+'...'}
                </div>

            </div>
          )

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
                address: "${account}",
              }

              const nftList = await Moralis.Web3API.account.getNFTs(options);


              placeHolderContainer.parentElement.removeChild(placeHolderContainer);


              nftList.result.forEach(async(nft) =>{
                const metadata = JSON.parse(nft.metadata)

                if(metadata !== null){

                  const img = fixURL(metadata.image);
                  const name = metadata.name;

                  if(metadata.name === undefined){
                    console.log(metadata)
                  }

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


                } else if(nft.token_uri !== null){
                  let url = fixURL(nft.token_uri)
                  const params = { theUrl: url}

                  const data = await Moralis.Cloud.run("fetchJSON", params)

                  console.log(data, 'stuff here')
                  if (data.status === 302){
                    const newUrl = data.headers.location

                    const newParams = {theUrl: newUrl}
                    const newData = await Moralis.Cloud.run("fetchJSON", params)

                    const img = fixURL(newData.image);
                    const name = newData.name;

                    if(newData.name === undefined){
                      console.log(metadata)
                    }

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


                  } else {
                    const img = fixURL(data.image);
                    const name = data.name;

                    if(data.name === undefined){
                      console.log(metadata)
                    }

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


                }

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
                  hashLink.target ="_blank";
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
                  fromHash.target ="_blank";
                  fromHash.href = addressAddress + transaction.from_address;
                  fromHash.appendChild(document.createTextNode(transaction.from_address.slice(0,14)+'...'));
                  fromContainer.appendChild(fromHash)

                  var toContainer = document.createElement("div");
                  toContainer.appendChild(document.createTextNode("To "));
                  var toHash = document.createElement("a");
                  toHash.target ="_blank";
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

      }

    })

    editor.on('run:export-template:before', opts => {
      if (0 /* some condition */) {
        opts.abort = 1;
      }
    });

    editor.on('component:selected', (block, obj) =>{
      setBlockClickType(block._previousAttributes.type)

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


    editor.on("storage:load", function(e){
      axios.get(`${global.API_ENDPOINT}/builder/getWebsitePages/${websiteId}`)
      .then(res=> {
        setPageIds(res.data)
      })
    })

    editor.on('run:export-template', () => console.log('After the command run'));
    editor.on('abort:export-template', () => console.log('Command aborted'));


    setTimeout(() => {
      axios.get(`${global.API_ENDPOINT}/builder/isNewlyCreated/${websiteId}`)
      .then( res => {
        setIsNewlyCreated(res.data)
        if(res.data === true){

          if(buildType === "personal"){
            onInitialModalOpen()

            editor.addComponents(
                 `
                 <div data-gjs-type = "AddressProfile"></div>
                <div data-gjs-type = "SocialMediaFooter"></div>
                <div data-gjs-type = "AutomaticNFTShowcase"></div>
                <div data-gjs-type = "StatsList"></div>
                <div data-gjs-type = "TransactionList"></div>
                 `
               )

            setTimeout(() => {
              editor.getComponents().forEach(component => {
                const type = component.get("type")
                const account = "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab";


                if(type === "AddressProfile"){
                  component.append(

                    <div data-gjs-type ="box" class = "profile-inner-wrapper">
                      <div class = "userCircleWrapper">
                        <div class = "userCircle">
                          {
                            (personalProfilePic)?
                            <img data-gjs-type ="image" class = "circleProfilePic" src = {personalProfilePic}/>
                            :
                            ''
                          }
                        </div>
                      </div>
                      <div class = "centerInfo"><h1 data-gjs-type ="text">
                        {personalWebsiteUsername?
                          <div>
                            {personalWebsiteUsername}
                          </div>
                        :
                        <div>
                          @usernameaaa
                        </div>


                        }

                        </h1>

                      </div>


                        <div data-gjs-type ="CopyToClipboard" value = {account} >
                          {account.slice(0,15)+'...'}
                        </div>

                    </div>
                  )


                }




                if(type === "AutomaticNFTShowcase"){
                  component.set("script", `
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

                      let collectionContainer = document.querySelectorAll(".nft-collection-container");
                      console.log(collectionContainer, 'whattt is this')

                      const serverUrl = "https://9gobbcdpfilv.usemoralis.com:2053/server";
                      const appId = "bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg";
                      Moralis.start({ serverUrl, appId });
                      const options = {
                        chain: "eth",
                        address: "${account}",
                      }

                      const nftList = await Moralis.Web3API.account.getNFTs(options);


                      placeHolderContainer.parentElement.removeChild(placeHolderContainer);


                      nftList.result.forEach(async(nft) =>{
                        const metadata = JSON.parse(nft.metadata)

                        if(metadata !== null){

                          const img = fixURL(metadata.image);
                          const name = metadata.name;

                          if(metadata.name === undefined){
                            console.log(metadata)
                          }

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


                        } else if(nft.token_uri !== null){
                          let url = fixURL(nft.token_uri)
                          const params = { theUrl: url}

                          const data = await Moralis.Cloud.run("fetchJSON", params)

                          console.log(data, 'stuff here')
                          if (data.status === 302){
                            const newUrl = data.headers.location

                            const newParams = {theUrl: newUrl}
                            const newData = await Moralis.Cloud.run("fetchJSON", params)

                            const img = fixURL(newData.image);
                            const name = newData.name;

                            if(newData.name === undefined){
                              console.log(metadata)
                            }

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


                          } else {
                            const img = fixURL(data.image);
                            const name = data.name;

                            if(data.name === undefined){
                              console.log(metadata)
                            }

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
                        }
                      })
                    }
                  `)

                }

                if(type === "TransactionList"){
                  const transactionAddress = 'https://etherscan.io/tx/'
                  const addressAddress = "https://etherscan.io/address/"

                  component.set("script", `
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
                          hashLink.target ="_blank";
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
                          fromHash.target ="_blank";
                          fromHash.appendChild(document.createTextNode(transaction.from_address.slice(0,14)+'...'));
                          fromContainer.appendChild(fromHash)

                          var toContainer = document.createElement("div");
                          toContainer.appendChild(document.createTextNode("To "));
                          var toHash = document.createElement("a");
                          toHash.href =addressAddress + transaction.to_address;
                          toHash.target ="_blank";
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


                  component.set("script", `
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

                
              })
            }, 1000)

          }

          if(buildType === "nft"){
            editor.addComponents(
              `
              <div data-gjs-type = "renderNFTTemplate1"> </div>
          
              `
            )

            setTimeout(() => {
              editor.getComponents().forEach(component => {
                const type = component.get("type")
                const account = "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab";


                if(type === "renderNFTTemplate1"){
                  component.append(

                    <div data-gjs-dmode="absolute" class="row tempHeight">
                    <div class="col">
                      <div class ='gradientBackground'/>
                    </div>

        <div data-gjs-type="box" class="header">
       
          <div class="menuM">
            <div class="logoGap">
              
            </div>
            <a class="headerItem">
               <img data-gjs-type="image" src={discord} width={40} height={40} />
            </a>
            <a class="headerItem">
              <img data-gjs-type="image" src={twitter} width={40} height={40} />
            </a>
            <div class="headerItem">
               <img data-gjs-type="image" src={opensea} width={35} height={35} />
            </div>
          </div>
        </div>

        <div class="template1ImageContainer">
          <div class="template1ImageInner">
            <img data-gjs-type="image" src={space2} class="space2Image" />
            <img data-gjs-type="image" src={space3} class="space3Image"/>
          </div>
        </div>

        <div data-gjs-type="box" class = "headerClone">
          <div class="tripleComparisonContainer">
              <h1 data-gjs-type="text" class ="mainTitle">
                Monkey Squad
              </h1>
            <div data-gjs-type="text" class = "tripleComparisonSubHeader">
              10,000 space travelers looking for a way home by building and creating together.
            </div>
          </div>
        </div>   
        <div class="spaceGap"></div>
        
        <div data-gjs-type="box" class = "NFTSpecPosition">
          <div class = "NFTSpecRow">
            <img data-gjs-type="image"  src={space1} class="space1Image" />

            <div class = "NFTSpecContainer">
              <p data-gjs-type="text" class ="NFTSpecTitle"> The Specs </p>
              <p data-gjs-type="text" class = "MFTSpecContent"> Each monkey is unique and programmatically generated from over 200 possible traits, including expression, headwear, clothing, and more. 
              Some of the monkeys are more rare than others.
              The monkeys are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Mint price to be determined.
              </p>
            </div>
          </div>
        </div>

       <div class="spaceGap"></div> 

       
        <div data-gjs-type="box" class = "tripleComparisonSection">
          <div class="tripleComparisonContainer">
            <p data-gjs-type="text"  class="tripleComparisonHeader">
              Grow together
            </p>
            <p data-gjs-type="text" class="tripleComparisonSubHeader">
              Build and invest as a community
            </p>
          </div>  
          <div class="centerTripleContent"> 
          <div class="teamContainer">
            <div class="infoSection">
              <div class="itemCenter">
              <img data-gjs-type="image" src={astro} width={300} height={200} />
                <div class="infoSectionTitle"> Build </div>
                <p data-gjs-type="text" class="infoSectionDesc">
                  ful learning rarely comes from passively consuming content. 
                  It comes from building, teaching, a
                </p>
              </div>
            </div>
        
            <div class="infoSection">
              <div class="itemCenter">
        
                    <img data-gjs-type="image" src={creating} width={300} height={225} />
            
                <div class="infoSectionTitle"> Create </div>
                <p data-gjs-type="text" class="infoSectionDesc">
                  ful learning rarely comes from passively consuming content. 
                  It comes from building, teaching, a
                </p>
              </div>
            </div>

            <div class="infoSection">
              <div class="itemCenter">
                
                <img data-gjs-type="image" src={apartment} width={300} height={200} />

                
              
                <div class="infoSectionTitle"> Own </div>
                <p data-gjs-type="text" class="infoSectionDesc">
                  ful learning rarely comes from passively consuming content. 
                  It comes from building, teaching, a
                </p>
              </div>
            </div>
            



            </div>
          </div>
       

          </div>
          


        <div class="spaceGap"></div> 

        <div data-gjs-type="box" class="teamSection">
     
              <div class="teamTitle">
              Team
              </div>
  
          <div data-gjs-type="box" class="teamContainer">
            
            <div class="card">
            <img data-gjs-type="image" class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_960_720.png"/>
              <div class="container">
                <h4 data-gjs-type="text" class="teamPersonName"><b>John Doe</b></h4>
                <p data-gjs-type="text" class="teamPersonRole">Founding Artist</p>
              </div>
            </div> 

            <div class="card">
                <img data-gjs-type="image" class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png"/>
                <h4 data-gjs-type="text" class="teamPersonName"><b>Jillian Lee</b></h4>
                <p data-gjs-type="text" class="teamPersonRole">Head of Marketing</p>
            </div>
            
           
            <div class="card">
              <img data-gjs-type="image" class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/01/06/10/10/nft-6919119_960_720.jpg"/>
              <div class="containerCardPadding">
                <h4 data-gjs-type="text"  class="teamPersonName"><b>John Doe</b></h4>
                <p data-gjs-type="text" class="teamPersonRole">Head of Community Affairs </p>
              </div>
            </div> 

   

            </div> 
 
          
            
          </div>
          <div class="spaceGap"></div> 
          <div class="spaceGap"></div> 
        </div>
   
                  )


                }
          })
            }, 1000)








          }

          






        }

      })

    }, 1000)


    const dc = editor.DomComponents;
    editor.on('load', () => editor.select(dc.getWrapper()));

    setEditor(editor)
  },[account, personalWebsiteUsername, personalProfilePic])


  const renderTimestamp = timestamp =>{
    let prefix = '';
    const timeDiff = Math.round((new Date().getTime() - new Date(timestamp).getTime())/60000)
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
    editorMain.store()
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

      if(!pageName){
        pageName = ""
      }

      var pageDict = {
        "name": pageName,
        'pageId': pageId,
        'html': html,
        'css': css,
        'js': js
      }
      formData.append(index, JSON.stringify(pageDict))
      // temp variable
      setCurrentPage(pageId)
    })



    axios.post(`${global.API_ENDPOINT}/builder/saveWebPreview/${websiteId}`, formData)
    .then(res => {
      editorMain.runCommand('open-live-preview');
    })
  }

  const onlySave = () => {
    editorMain.store()
  }

  const showScreenShot = () => {
    takeScreenshot().then(data => {
      console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEe")
      console.log(data)
    if(image){
      console.log(image)
    }
      // logic
  });

  }


  return(
    <div>

      <EditorHeader
        storeEditor={storeEditor}
        websiteId={websiteId}
        editor = {editorMain}
        history = {props.history}
        account = {account}
        />
        {/* <div ref={ref1}>test</div> */}


      <div  class="editorRow">

        <div class = "firstColumn">
          <div className = "mainButtons">
            <div className = "mainButtonHolder">
               <AntButton
                 // style={{width:50, height:50}}
                 size="large"
                 onClick = {() => changeDrawerVisibility("basic")}
                 type="primary" shape="circle" icon={<PlusOutlined />} />
              </div>
              <div className = "buttonHolder">
                <AntButton
                  type="primary"
                  class="buttonShadow"
                  onClick = {() =>

                    setImageModal(true)
                   }
                  shape="circle"
                   icon={<FontAwesomeIcon icon={faImage} />} size="large" />
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

            {/*
            <div className = "buttonHolder">
              <AntButton
                type="primary"
                class="buttonShadow"
                onClick = {() => showPreview()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faEye} />} size="large" />
            </div>
            */}
            <div className = "buttonHolder">
              <AntButton
                type="primary"
                onClick = {() => onlySave()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faSave} />} size="large" />
            </div>





            <div className = "buttonHolder">
              <AntButton
                type="primary"
                onClick = {() => openTrashModal()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faTrash} />} size="large" />
            </div>

          </div>
        </div>

        <div ref = {wrapperRef}>
          <Drawer  visibility = {visibility}>

            {
              buildType === "personal" ?

              <BlocksContainer editor = {editorMain} category ={toolsCategory}/>

              :

              <NFTBlocksContainer editor = {editorMain} category = {toolsCategory} />

            }



          </Drawer>
        </div>

        <div class="column">
          <div id = "gjs"></div>
        {/* {image && <img style={{width:300, height:300}} src={image} />} */}

        </div>


        <BlockAttribute
          blockType={BlockClickType}
          editor = {editorMain}/>

      </div>

      <NFTRoadMapModal
        editor = {editorMain}
        onClose = {onNFTRoadMapClose}
        isOpen = {isNFTRoadMapOpen}
         />

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
          onClose = {onImageClose}
          isOpen = {isImageOpen}
          scrollBehavior={scrollBehavior}/>

      <InitialEditorModal

        editor = {editorMain}
        onClose = {onInitialModalClose}
        isOpen = {isInitialModalOpen}

         />

      <TestModal
        editor = {editorMain}
        visible={imageModal}
        closeModal={closeImageModal}
      />


      <TrashModal
        editor = {editorMain}
        visible={trashCondition} // trashcondition
        onlySave={onlySave}
        closeModal={closeTrashModal}
      />

    </div>


  )
}
