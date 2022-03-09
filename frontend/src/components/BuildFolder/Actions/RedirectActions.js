import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Button
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom';


export const RedirectActions = (props) => {

  const [editor, setEditor] = useState(null)
  const [pages, setPages] = useState([])

  const {websiteId} = useParams()

  // when writing javascript, you are gonna need to end it wiht
  // a semi colon

  const onRedirectConnect = (pageId) => {

    const target = editor.getSelected()
    const targetId = target.getId()
    target.set("script", `
      function script(props) {
        var element = document.getElementById("${targetId}");
        element.addEventListener("click", function () {
          window.location.replace("http://localhost:3000/previewPage/${websiteId}/${pageId}");

        });
      }

    `)


  }


  useEffect(() => {
    if(props.editor !== null){
      setEditor(props.editor)
      var pm = props.editor.Pages;

      props.editor.on('page', () => {
        setPages([...pm.getAll()])


      })

    }

  }, [props.editor])

  return(
    <Accordion  allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Redirect
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Clicking on one will allow you to link a redirecting to the selected
          component

          <Stack>
            {
              pages.map((page, index) => {
                return(
                  <Button
                    onClick = {() => onRedirectConnect(page.getId())}
                    colorScheme='blue'>{page.get("name")} <LinkIcon /></Button>
                )

              })
            }

          </Stack>
        </AccordionPanel>
      </AccordionItem>


    </Accordion>

  )
}
