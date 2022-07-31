import React from 'react'
import { Flex, HStack, Box,Input, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'


const SubscriptionPanel = () => {
  return (
    <>
    <Flex mt="100px" mb="20px">
      <Container maxW="container.xl">
<HStack flexDirection={['column','column','column','row']} bg="blackAlpha.100" py="8" px="6">
  <Stack py="4" flexBasis="50%">
    <Text fontWeight="semibold" textAlign={["center","center","left"]} fontSize="3xl">Get <Box as="span" color="red.500">50%</Box>  off discount</Text>
       <Text textAlign={["center","center","left"]} fontSize="12px" > Lorem  culpa officiis a ipsam temporibus omnis fugit nisi ullam a </Text>
  </Stack>
  <Flex  py="2" flexBasis="50%">
    <Input bg="white"  flexBasis={'70%'} placeholder='Enter your email address'></Input>
<Button flexBasis={'30%'} bg="red.500" fontSize={["10","10","10","13"]} color="white">Subscribe</Button>
  </Flex>

</HStack>
      </Container>
    </Flex>
    </>
  )
}

export default SubscriptionPanel