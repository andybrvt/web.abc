import React, { useState, useEffect } from 'react';
import {
  Menu, Select,
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
  Text,
  Image,
  Badge,
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
              <div style={{marginTop:25}}>
                <Select size='sm' placeholder='Choose page'>
                  <option value='option1'>Page 1</option>
                  <option value='option2'>Page 2</option>
                  <option value='option3'>Page 3</option>
                </Select>
              </div>
            </div>

            <div style={{marginTop:20, marginBottom:20}}>
              <div class="actionAttributeHeader">
                Add Function
              </div>
              <Divider/>
              <Button onClick={onOpen}>Open Modal</Button>
            </div>
          </Stack>
        </div>
      </div>

      <Modal
        size="4xl"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Choose Function </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{display:'flex', flexDirection:'row'}} pb={10}>
            <Box style={{marginRight:50}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={'https://bit.ly/2Z4KKcF'} alt={'Rear view of modern home with pool'} />
              <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      New
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      5 contracts &bull; 3 contracts
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    NFT Collections
                  </Box>
                  <Box>
                    Mint NFT, Buy NFT, Sell NFT ...

                  </Box>
                </Box>
            </Box>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={'https://bit.ly/2Z4KKcF'} alt={'Rear view of modern home with pool'} />
              <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Coming soon
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      2 beds &bull; 3 baths
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    Banking coming soon...
                  </Box>
                  <Box>
                    Send Eth, Receive Eth, ...

                  </Box>
                </Box>
            </Box>
          </ModalBody>


          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name of Project</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
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

      // remove first div css later

    </div>
  )
}
