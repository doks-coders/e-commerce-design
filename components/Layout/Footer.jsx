import React from 'react'
import { Flex, HStack, Box,Input, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import IconSvg from './IconSvg'
const Footer = () => {
  return (
    <>
    <Flex  flexDirection={'column'} mt="50px">
     <Container maxW="container.xl">
 <Box w="100%" >
   <Flex flexDirection={['column','column','row']} w="100%" >
   <Flex flexDirection={'column'} flexBasis={'50%'}>
 <Stack color="#aaaaaa" spacing={2} mt="5" flexDirection={'column'}>



    <Box  h="45px" w="130px">
    <IconSvg/>
      </Box>
      <Text>We are Hallmarts</Text>
      <HStack>
        <Box> <i className="pi pi-wallet"></i> </Box>
          <Box> <i className="pi pi-paypal"></i> </Box>
          <Box> <i className="pi pi-chart-bar"></i> </Box>
          <Box> <i className="pi pi-microsoft"></i> </Box>
          <Box> <i className="pi pi-id-card"></i> </Box>
      </HStack>


 </Stack>
 
 
 
 
 </Flex>
 <Flex mt="5" flexDirection={'column'} flexBasis={'40%'}>
 <UseFulLinks/>
 
 </Flex>
 <Flex mt="5"  flexDirection={'column'} flexBasis={'40%'}>
 <OurServices/>
 </Flex>
 <Flex mt="5" flexDirection={'column'} flexBasis={'50%'}>


 <Flex mt="4" flexDirection={'column'}>
 <HStack mb="2">
 <Text color="#aaaaaa" >+909 039 0239</Text>
 </HStack>
 
 <HStack mb="2">
 <Text color="#aaaaaa">info@example.com</Text>
 </HStack>
 
 </Flex>

 <Flex my="2">
  <Box ><OutLineCircle icon="instagram"/></Box> 
  <Box ml="3"><OutLineCircle icon="twitter"/></Box> 
  <Box ml="3"><OutLineCircle icon="facebook"/></Box> 
  <Box ml="3"><OutLineCircle icon="linkedin"/></Box> 
 
   </Flex>



 </Flex>
   </Flex>
 
   
 
 </Box>
 
 
     </Container>
 
 <Flex mt="20" w="100%" bg="#f1f1f1" py="10">
 <Container maxW="container.xl">
 
 <Flex flexDirection={['column','column','row']} alignItems="center"  justifyContent={'space-between'} w="100%">
   <Flex flexDirection={'column'}>
 
     <Text>
     © Copyright <b>Hallmarts</b>. All Rights Reserved
     </Text>
  
 
   </Flex>
 

   <Text textAlign={['center','center','left']} as="div">
       Designed by <Box as="span" color="red.500">Daventy Agency</Box>
     </Text>
 
   
 </Flex>
 </Container>
 </Flex>
 
     
    </Flex>
    </>
  )
}

export default Footer






const UseFulLinks = ()=>{

  const usefullinks = [{name:'About',link:'/about'},
  {name:'Blog',link:'/blog'},
  {name:'Contact',link:'/contact'},
  {name:'FAQ',link:'/faq'}, //Terms Of Service
] //Privacy Policy

  return (
    <>
     <Heading mb="2" fontSize={'xl'}>Menu</Heading>
    {
      usefullinks.map((val,index)=>(     
        <Link href={val.link}>
        <HStack cursor={'pointer'} _hover={{color:'red.400'}} color="#aaaaaa" my="2" key={index}>
  <Box color="red.400">
  <i className="pi pi-chevron-right"></i>
  </Box>
 
  <Box>{val.name}</Box>
</HStack>
        </Link>

        
      ))
    }
    </>
  )
}



const OurServices = ()=>{

  const usefullinks = [{name:'My Account',link:'/'},
  {name:'Orders Tracking',link:'/'},
  {name:'Checkout',link:'/'},
  {name:'Wishlist',link:'/'}]

  return (
    <>
     <Heading mb="2" fontSize={'xl'}>Checkout</Heading>
    {
      usefullinks.map((val,index)=>(     
<HStack _hover={{color:'red.400'}} cursor={'pointer'}  color="#aaaaaa" my="2" key={index}>
<Box  color="red.400">
  <i className="pi pi-chevron-right"></i>
  </Box>
  <Box>{val.name}</Box>
</HStack>
        
      ))
    }
    </>
  )
}


const OutLineCircle = ({ icon }) => {
  return (
      <>
          <Flex color="white" background="red.400" justifyContent="center" alignItems={'center'}
              borderRadius={'full'} width="40px"
              height="40px" >
              <i style={{ fontSize: '20px' }} className={`pi pi-${icon}`}></i>
          </Flex>
      </>
  )

}