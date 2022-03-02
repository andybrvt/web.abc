import React, { useState, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  Slider,
  Box,
  Button,
  Link,
  FormControl,
  FormLabel,
  Code,
  Modal, ModalBody, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton, ModalContent,
  useDisclosure,
  FormErrorMessage,
  IconButton,
  Input, Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
import './SmartContractCustomize.css';
import { Header } from './Header';
export const SmartContractCustomize = (props) => {
  console.log(props.type)
  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(20)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return(
    <div>
      <Header history={props.history} />
      <div style={{width:500, background:'gray'}}>
        <div style={{padding:20, width:500, height:775, }}>
          <Stack
            bg={useColorModeValue('white', 'gray.900')}
            style={{height:'100%'}}
            boxShadow={'lg'}
            p={5}
            rounded={'xl'}
            // align={'center'}
            pos={'relative'}
            >

            <div style={{marginTop:20, marginBottom:20}}>
              <div class="actionAttributeHeader">
                Link
              </div>
              <Divider/>
            </div>
            <div style={{marginTop:20, marginBottom:20}}>
              <div class="actionAttributeHeader">
                Function
              </div>
              <Button onClick={onOpen}>Open Modal</Button>
              <Divider/>
            </div>
          </Stack>
        </div>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*
        <div class="collectionTitle">
          NFT Smart Contracts
        </div>
        <div class="collectionTitle">
          Mint Collection
        </div>
        <div class="collectionTitle">
          Mint Smart Contract
        </div>
        <div class="collectionTitle">
          Buy NFT
        </div>
        <div class="collectionTitle">
          Sell NFT
        </div>



        */}
      // remove first div css later

    </div>
  )
}
