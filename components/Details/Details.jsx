import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Grid, Button, Image, Container, Stack } from '@chakra-ui/react'
import ImageCarousel from './ImageCarousel'
import ProductDetailsTop from './ProductDetailsTop'
import Customtabs from '../SubComponents/Customtabs'
import RelatedLikes from '../SubComponents/RelatedLikes'
const Details = () => {
  return (
    <>
      <Flex flexDirection={'column'}>
        <Flex mb="19px" mt="3" py="3" bg="blackAlpha.50">

          <Container maxW="container.xl">
            Home / <Box color="blackAlpha.600" as="span">Digital Smartwatch</Box>
          </Container>
        </Flex>

        <Container maxW="container.xl">
          <Flex flexDirection={['column', 'column', 'column', 'row']}>
            <Flex mb="20px" flexDirection={['column', 'column', 'row']} flexBasis={'50%'}>

              <ImageCarousel />


            </Flex>
            <Flex ml="4" flexBasis={'50%'}>
              <ProductDetailsTop />

            </Flex>
          </Flex>

        </Container>


        <Container mt="10" maxW="1000px">

          <Customtabs />
        </Container>

        <Container maxW="container.xl">
          <RelatedLikes />
        </Container>

      </Flex>
    </>
  )
}

export default Details