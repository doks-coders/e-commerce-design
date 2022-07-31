import React from 'react'
import {useEffect,useState} from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'
const Banner = () => {
  let images =["Img/portfolio-details-3.jpg","Img/portfolio-details-1.jpg","Img/portfolio-details-2.jpg"]
  

  const [imageindex, setImageIndex] = useState(0);
  const [animation,setAnimation] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
    
      setImageIndex((imageindex) => {
        /***
 * Set the image index to the next one after beginning
 */
         if(imageindex == (images.length-1)) return 0
        else return imageindex + 1
        });
/***
 * Set the timeout function to make the animation true after a second, just for delay purposes
 */
        setTimeout(()=>{
          setAnimation(true)
        },1000)

        setAnimation(false)
    }, 5000);
    return () => clearInterval(interval);
  }, []);


let nextImage = (val)=>{
  if(val == (images.length-1)) return 0
  else return val + 1
}

 return (<>
<Flex className={animation?"CustomCarousel":''} h="500px" position="relative" >
<Image h="100%" objectFit="cover" w="100%" src={images[imageindex]} ></Image>
<Image h="100%" className="nextImage"   transition={animation?'.5s ease':'.0s ease'} objectFit="cover"  src={
  images[nextImage(imageindex)]} ></Image>


<Box position={'absolute'} top="0" w="100%" h="100%"   background="black" opacity="0.5"> </Box>
    <Container position={'absolute'} h="100%" top="0" right="0" left="0" maxW="container.xl">
        <Flex w="100%" h="100%" >  
      <Flex   w={["100%","100%","50%"]}  h="100%">
        <Stack color="white" spacing={6}  w="100%" h="100%" justifyContent={'center'}>
            <Text fontWeight="semibold">SUMMER 2022</Text>
            <Heading fontWeight="semibold" fontSize={["3xl","3xl","50px"]}>Fashion Collections</Heading>
            <Text fontWeight="light" w="300px" > Lorem ipsum dolor svero vitae temporibus perspiciatis minus saepe blanditiis? Consequuntur. </Text>
            <Box>
            <Button color="white" zIndex="2" bg="red.500">Shop Now</Button>
            </Box>
            
        </Stack>
      </Flex>
        </Flex>

    </Container>
    <Flex position={'absolute'} top="0" w="100%" h="100%"  justifyContent="flex-end">

      <Flex h="100%" w="30%"  flexDirection="column" justifyContent={'flex-end'}>
        <Text p="4" color="white" fontWeight="bold" fontSize={["lg","lg","3xl"]} as="div" textAlign="right">0{nextImage(imageindex)+1} <Box fontSize={["sm","sm","lg"]} as="span">/03</Box></Text>
      </Flex>
    </Flex>
</Flex>
</>
  )
}

export default Banner

//background="linear-gradient(to right, #fdfdfd05,white,#fdfdfd05)" 
//background="linear-gradient(-90deg,  ,#fdfdfd05 )"