import React from 'react'
import {Box,Flex,Text,Spinner} from '@chakra-ui/react'
const LoadingElement = () => {
  return (
   <>
   <Flex h="100vh" w="100vw" flexDirection="column" justifyContent={'center'} alignItems="center" >
    <Spinner size="xl"/>
<Text fontSize="xl">Loading...</Text>
   </Flex>
   </>
  )
}

export default LoadingElement