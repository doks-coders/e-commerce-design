import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'

const CollectionsDisplay = () => {
  return (
    <>
    <Flex mt="50px" h="350px" position="relative" >
    <Image h="100%" objectFit="cover" w="100%" src="Img/portfolio-9.jpg" ></Image>
    <Box position={'absolute'} top="0" w="100%" h="100%"   background="white" opacity="0.7"> </Box>
        <Container position={'absolute'} h="100%" top="0" right="0" left="0" maxW="container.xl">
            <Flex justifyContent={'flex-end'}  w="100%" h="100%" >  
          <Flex   w={["100%","100%","50%"]}  h="100%">
            <Stack color="black" spacing={6}  w="100%" h="100%" justifyContent={'center'}>
                <Heading fontWeight="semibold" fontSize={["3xl","3xl","40px"]}>Check Our Other Products</Heading>
                <Text fontWeight="thin" w={["250px","250px","250px","300px"]}  > Lorem ipsum dolor svero vitae temporibus perspiciatis minus saepe blanditiis? Consequuntur. </Text>
                <Box>
                <Button color="white" zIndex="2" bg="red.500">Shop Now</Button>
                </Box>
                
            </Stack>
          </Flex>
            </Flex>
    
        </Container>
       
    </Flex>
    </>
  )
}

export default CollectionsDisplay