import React from 'react'
import { Flex, HStack, Box,Input, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'



const BenefitsPanel = () => {
  return (
   <>
   <Flex>
    <Container maxW="container.xl">
<Flex py="8" px="6" flexDirection={['column','column','column','row']} justifyContent="space-between">
 <HStack my="2">
  <Box p="2"> <i style={{fontSize:'50px'}} className='pi pi-car'></i> </Box>
  <Stack>
    <Text fontWeight="semibold">FREE SHIPPING</Text>
    <Text fontSize="12">For All Orders Above $99</Text>
  </Stack>
 </HStack>


 <HStack my="2">
  <Box p="2"> <i style={{fontSize:'50px'}} className='pi pi-thumbs-up'></i> </Box>
  <Stack>
    <Text fontWeight="semibold">30 DAYS RETURN</Text>
    <Text fontSize="12">If you have any problems</Text>
  </Stack>
 </HStack>


 <HStack my="2">
  <Box p="2"> <i style={{fontSize:'50px'}} className='pi pi-money-bill'></i> </Box>
  <Stack>
    <Text fontWeight="semibold">SECURE PAYMENT</Text>
    <Text fontSize="12">100% Secure Payment</Text>
  </Stack>
 </HStack>

 <HStack my="2">
  <Box p="2"> <i style={{fontSize:'50px'}} className='pi pi-phone'></i> </Box>
  <Stack>
    <Text fontWeight="semibold">24/7 SUPPORT</Text>
    <Text fontSize="12">Dedicated Support</Text>
  </Stack>
 </HStack>


  
</Flex>
    </Container>
   </Flex>
   </>
  )
}

export default BenefitsPanel