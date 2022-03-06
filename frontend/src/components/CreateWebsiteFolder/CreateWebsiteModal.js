import React, {useState, useEffect} from 'react';

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


export const CreateWebsiteModal = (props) => {


  var visible = props.visible

  const [name, setName] = useState("");

  const onInputChange = (e) => {
    setName(e.target.value)
  }

  const onCancel = () => {
    setName("")
    props.onCancel()
  }

  const createWebSite = () => {

    const address = props.account
    // Now you can create your website
    const formData = new FormData()
    formData.append("owner", address)
    formData.append("name", name)

    axios.post(`${global.API_ENDPOINT}/builder/createWebsite`, formData)
    .then(res => {
      console.log(res.data) // this wants to be number

      props.history.push(`/build/${res.data}`, {
        websiteId: res.data
      })

    })

  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  console.log(props)
  return(
    <Modal
      size="4xl"
      isOpen={visible}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      // isOpen={isOpen}
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
            <Input onChange = {onInputChange} placeholder='First name' />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button onClick={createWebSite} colorScheme='blue' mr={3}>
            Save
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
