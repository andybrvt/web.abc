import React, { useState, useEffect } from "react";
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


  export const StyleColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const colors = [
    // "gray.500",
    "Black",
    "gray",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "white"
  ];

  const onColorChange = (e) => {
    props.handleChange(e.target.value)
    setColor(e.target.value)
  }

  return (
    <ChakraProvider theme={theme}>
        <div class="miniStyleHeader">
          {props.label}
        </div>
        <Popover variant="picker">
          <PopoverTrigger>

            <Button
              aria-label={color}
              background={color}
              height="30px"
              width="30px"
              padding={0}
              minWidth="unset"
              borderRadius={(props.background) ? 5:30}
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
                      onColorChange(e)
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
                  onColorChange(e)
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>

    </ChakraProvider>
  );
}
