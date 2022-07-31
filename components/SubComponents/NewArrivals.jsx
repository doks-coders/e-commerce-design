import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text,Grid, Button,Image, Container, Stack } from '@chakra-ui/react'
import ProductItem from './ProductItem'
// /src,width,height
const NewArrivals = () => {

   
  return (
   <>
   <Flex >
    <Container maxW="container.xl">
      <Box  mt="50px" mb="20px">
      <Heading textAlign={'center'} fontWeight="semibold" fontSize="3xl">New Arrivals</Heading>
      <Text textAlign="center" fontSize="15">Browse the Newest Products</Text>
      </Box>
    


<Flex w="100%">
                        <Grid minH="300px"  w="100%" templateColumns={[
                          "repeat(1,1fr)",
                          "repeat(2,1fr)",
                          "repeat(5,1fr)",
                    
                        ]} gap="4">
                            <ProductItem src={'Img/portfolio-1.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-2.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-3.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-4.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-5.jpg'} height="100%" width={"100%"}/>
                        </Grid>
                    </Flex>
                    
    </Container>
   </Flex>
   </>
  )
}

export default NewArrivals