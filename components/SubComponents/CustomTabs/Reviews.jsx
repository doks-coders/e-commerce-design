import React from 'react'
import {useState} from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Grid, Button, Image, Container, Stack } from '@chakra-ui/react'
import StarRatings from '../StarRatings'
const Reviews = () => {
  return (
   <>
   <Box>
    <Text fontSize="11">Based on 12 Customers </Text>
    <Text fontWeight="bold" fontSize="lg">How customers reviewed this item</Text>

    <Flex mt="8">



    <Flex w="100%">
                        <Grid minH="300px"  w="100%" templateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                    
                        ]} gap="4">
                   <ReviewElement name={'Patrick Wood'} date={'15 March 2020'}  
comment={`Lorem ipsum dolor, sit amet consectetur adipisiquae? Blanditiis aut eum culpa vero ullam dolorum nihil quia nam quos nulla?`} 
image={'Img/portfolio-details-1.jpg'} />




<ReviewElement name={'Patrick Wood'} date={'15 March 2020'}  
comment={`Lorem ipsum dolor, sit amet consectetur adipisiquae? Blanditiis aut eum culpa vero ullam dolorum nihil quia nam quos nulla?`} 
image={'Img/portfolio-4.jpg'} />


<ReviewElement name={'Patrick Wood'} date={'15 March 2020'}  
comment={`Lorem ipsum dolor, sit amet consectetur adipisiquae? Blanditiis aut eum culpa vero ullam dolorum nihil quia nam quos nulla?`} 
image={'Img/portfolio-4.jpg'} />

                        </Grid>
                    </Flex>








 



        

    </Flex>

   </Box>
   </>
  )
}

export default Reviews



let ReviewElement = ({name,date,comment,image})=>{
    return (
        <>
               <Flex flexBasis="50%">
        <Box mr="2">
            <Box borderRadius={'full'} boxShadow={'0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'} p="1"  height="60px" w="60px" >
            <Image borderRadius={'full'} boxSize="100%" objectFit="cover" src={image}></Image>
            </Box>
               
        </Box>
               <Box >
<Text fontWeight="bold" fontSize="14">{name}</Text>
<Text mb="5px" color="blackAlpha.700" fontSize="13">{date}</Text>

<StarRatings postiveRatingsColor={"red.400"} negativeRatingsColor={"blue.900"}/>
            
             <Text mt="10px" color="blackAlpha.700" fontSize="13">
         {comment}
            </Text>
                </Box>
        </Flex>
        </>
    )
}