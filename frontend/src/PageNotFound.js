import React, { useState, useEffect } from 'react';
import { Result, Button } from 'antd';
import { Center, Square, Circle } from '@chakra-ui/react'


export const PageNotFound = (props) => {

  return(
    
    <Center>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button 
          href="/"
          type="primary">Back Home</Button>}
      />
    </Center>

  )
}
