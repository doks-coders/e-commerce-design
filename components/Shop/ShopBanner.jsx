import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'

const ShopBanner = () => {
  return (
    <>
    <Flex h="200px" position="relative" >
    <Image h="100%" objectFit="cover" w="100%" src="Img/portfolio-8.jpg" ></Image>
    <Box position={'absolute'} top="0" w="100%" h="100%"   background="white" opacity="0.7"> </Box>
        <Container position={'absolute'} h="100%" top="0" right="0" left="0" maxW="container.xl">
            <Flex  w="100%" h="100%" >  
          <Flex   w={["100%","100%","50%"]}  h="100%">
            <Stack color="black" spacing={6}  w="100%" h="100%" justifyContent={'center'}>
                <Heading fontWeight="semibold" fontSize={["3xl","3xl","40px"]}>Shop</Heading>
                <Text fontWeight="thin" w={["250px","250px","250px","300px"]} as="div" > <Box as="span" fontWeight={'semibold'}>Home</Box> / Shop </Text>
                
                
            </Stack>
          </Flex>
            </Flex>
    
        </Container>
       
    </Flex>
    </>
  )
}

export default ShopBanner