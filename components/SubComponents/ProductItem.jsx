import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Button,Image, Container, Stack } from '@chakra-ui/react'
const ProductItem = ({src,width,height}) => {
  return (
    <>
    <Box mt="8"  w={width} h={height}>
    <Flex className="productItem" width="100%" height={["70%","70%","60%","70%"]} flexDir={'column'} position="relative" >
    <Image src={src} height="100%" objectFit="cover" w="100%"></Image>
    <Flex  position="absolute" top="0" width="100%" height="100%">
      <Box>
      <Text bg="blue.500" color="white" fontSize={['7px','7px','10px']} fontWeight="bold" py="1" px="1.5" m="3"> New Arrival</Text>
      </Box>
    </Flex>
    
    <Flex className='productButton' p="2"  position="absolute" justifyContent={'flex-end'} top="0" width="100%" height="100%">
      <Flex  w="30px" justifyContent="flex-end" flexDirection="column">
     <Flex borderRadius={2} boxShadow={'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}  flexDirection="column" alignItems="center" justifyContent={'center'}  bg="white" >
    <Box p="1" _hover={{color:'red'}}> <i style={{fontSize:'12px'}}  className="pi pi-heart-fill"></i> </Box>
    <Box p="1" _hover={{color:'red'}}> <i style={{fontSize:'12px'}} className="pi pi-image"></i> </Box>
    <Box p="1" _hover={{color:'red'}} > <i style={{fontSize:'12px'}} className="pi pi-shopping-bag"></i> </Box>
      
     </Flex>
      </Flex>
    </Flex>
    
          </Flex>
          <Text my="2" fontWeight="semibold" fontSize={'sm'} textAlign="center">White USB Cable</Text>
    <Text my="2"  color="blackAlpha.700" fontSize={'sm'}  textAlign="center">$100.00</Text>
    </Box>
   
   
    </>
    
  )
}

export default ProductItem