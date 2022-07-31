import React from 'react'
import { Button, Input,Flex, Grid, Container,Box,Stack, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'

const Description = () => {
  return (
    <>
    <Box>
        <Text color="blackAlpha.700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem possimus quod? Aliquid nam quo quae dolorem ut eos saepe voluptate! Illum voluptas cumque, omnis quos deserunt voluptatibus in id.
        </Text>

 <Box color="blackAlpha.700" p="6">
 <ul>
  <li>Lavender Fragrance</li>
  <li>Summer Prices</li>
  <li>Light Weight</li>
</ul>
 </Box>

 <Flex w="100%">
                        <Grid minH="300px"  w="100%" templateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(3,1fr)",
                    
                        ]} gap="4">
   <Image height={'250px'} w="100%" objectFit="cover" src="Img/portfolio-details-1.jpg"></Image>
   <Image height={'250px'} w="100%" src="Img/portfolio-1.jpg" objectFit="cover"></Image>
   <Image height={'250px'} w="100%" src="Img/portfolio-1.jpg" objectFit="cover"></Image>
                        </Grid>
                    </Flex>




    </Box>
    </>
  )
}

export default Description