import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text,Grid, Button,Image, Container, Stack } from '@chakra-ui/react'
import {RangeSlider,RangeSliderFilledTrack, RangeSliderThumb,RangeSliderTrack} from '@chakra-ui/react'
import {CheckboxGroup, Checkbox} from '@chakra-ui/react'
import DropDownDemo from '../PrimeComponents/DropdownDemo'
import ShoppingSideBar from './ShoppingSideBar'
import {useState} from 'react'
import ShopHeader from './ShopHeader'
import ProductItem from '../SubComponents/ProductItem'
import ShopBanner from './ShopBanner'
import PaginatorDemo from '../PrimeComponents/Pagination'
const Shop = () => {

    

  return (
   <>
   <Flex  flexDirection="column">
    <ShopBanner/>
    <Container maxW="container.xl">

        <Flex  flexDir={["column-reverse","column-reverse","column-reverse","row"]} w="100%">
<Flex pr="5" mt="10" flexDirection="column" flexBasis="18%"  >
<ShoppingSideBar/>
</Flex>

<Flex mt="10" flexDirection={'column'} flexBasis="82%">
<ShopHeader/>
<Flex w="100%">
                        <Grid minH="300px"  w="100%" templateColumns={[
                          "repeat(2,1fr)",
                          "repeat(2,1fr)",
                          "repeat(4,1fr)",
                    
                        ]} gap="4">
                            <ProductItem src={'Img/portfolio-1.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-2.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-3.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-4.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-5.jpg'} height="100%" width={"100%"}/>


                            <ProductItem src={'Img/portfolio-1.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-2.jpg'} height="100%" width={"100%"}/>
                            <ProductItem src={'Img/portfolio-3.jpg'} height="100%" width={"100%"}/>
                      
                        </Grid>

                    </Flex>
                    <Flex mt="5" justifyContent={'flex-end'}>
                    <PaginatorDemo indexEntered={1} total="10"/>
                    </Flex>
</Flex>
        </Flex>
    </Container>
   </Flex>
   </>
  )
}

export default Shop


