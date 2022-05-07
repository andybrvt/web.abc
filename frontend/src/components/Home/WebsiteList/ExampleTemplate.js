import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Badge
} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import * as dateFns from 'date-fns';

export const ExampleTemplate = (props) => {

  const IMAGE = props.unsplashImage;
  const item = props.item

  return (
    <Center
      onClick = {() => props.onBuildDirect(item.id, item.type, item.deployedCondition)}
      py={12} className = "boxContainer">
      <Box
        role={'group'}
        p={6}
        maxW={'300px'}
        minW={"300px"}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Deployed
          </Text>
          <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
            {global.CAPITALIZE(item.name)}

          </Heading>
          {
            item.type === "personal" ?

            <Badge colorScheme='green'>Personal</Badge>

            :

            <Badge colorScheme='blue'>NFT</Badge>
          }
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'md'}>
              Last Modified
            </Text>
            <Text color={'gray.600'}>
              {/* {item.lastChanged} */}
              {dateFns.format(new Date(item.lastChanged), 'MMMM dd, yyyy')}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
