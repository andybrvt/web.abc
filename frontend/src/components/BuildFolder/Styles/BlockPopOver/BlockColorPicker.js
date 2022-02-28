import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Box,
  ChakraProvider,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  SimpleGrid,
  extendTheme,
  Input,
  Heading
} from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Popover: {
      variants: {
        picker: {
          popper: {
            maxWidth: "unset",
            width: "unset"
          }
        }
      }
    }
  }
});


  export const BlockColorPicker = (props) => {
  const [color, setColor] = useState("gray.500");

  const colors = [
    // "gray.500",
    "Black",
    "gray.500",
    "red.500",
    "green.500",
    "blue.500",
    "blue.800",
    "yellow.500",
    "orange.500",
    "purple.500",
    "pink.500"
  ];

  const onColarChange = (e) => {
    props.onStyleChange(e.target)
    setColor(e.target.value)
  }

  return (
    <ChakraProvider theme={theme}>

      <Center>
        <Popover variant="picker">
          <PopoverTrigger>
            <Button
              aria-label={color}
              background={color}
              height="30px"
              width="30px"
              padding={0}
              minWidth="unset"
              borderRadius={30}
            ></Button>
          </PopoverTrigger>
          <PopoverContent width="170px">
            <PopoverArrow bg={color} />
            <PopoverCloseButton color="white" />
            <PopoverHeader
              height="100px"
              backgroundColor={color}
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              color="white"
            >
              <Center height="100%">{color}</Center>
            </PopoverHeader>
            <PopoverBody height="120px">
              <SimpleGrid columns={5} spacing={2}>
                {colors.map((c) => (
                  <Button
                    value = {c}
                    name = "color"
                    key={c}
                    aria-label={c}
                    background={c}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={3}
                    _hover={{ background: c }}
                    onClick={(e) => {
                      onColarChange(e)
                    }}
                  ></Button>
                ))}
              </SimpleGrid>
              <Input
                borderRadius={3}
                marginTop={3}
                placeholder="red.100"
                size="sm"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Center>
    </ChakraProvider>
  );
}
