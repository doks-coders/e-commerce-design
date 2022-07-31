import React from 'react'
import {useState} from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Container, Text} from '@chakra-ui/react'
import ShoppingCart from './ShoppingCart'
import BillingInformation from './BillingInformation'
import Completed from './Completed'
const Checkout = () => {
  let screenStyle = { color: 'red.500', borderColor: 'red.500' }
  let [headText,setHeadText] = useState('Shopping Cart')
  return (
    <>
    <Flex flexDirection={'column'}>

    <Flex mb="19px" mt="3" py="3" bg="blackAlpha.50">

<Container maxW="container.xl">
  Home / <Box color="blackAlpha.600" as="span">Checkout</Box>
</Container>
</Flex>

      <Container maxW="1100px">
<Text fontSize="3xl" fontWeight="semibold" textAlign="center">{headText}</Text>
        
      <Tabs mt="8" borderColor={'white'} >
            <TabList  w="100%"  flexDirection={['column','column','row']}  >
                <Tab onClick={()=>setHeadText('Shopping Cart')} flexBasis="50%"   mx="2" _selected={screenStyle} >1. Shopping Cart</Tab>
                <Tab  onClick={()=>setHeadText('Billing Information')} flexBasis="50%"   mx="2" _selected={screenStyle} >2. Billing Information</Tab>
                <Tab onClick={()=>setHeadText('Completed')} flexBasis="50%"   mx="2" _selected={screenStyle} >3. Completed</Tab>
                 
            </TabList>
            <TabPanels mt="5">
                <TabPanel>
           <ShoppingCart/>
                </TabPanel>
                <TabPanel>
                     <BillingInformation/>
                </TabPanel>
                <TabPanel>
                    <Completed/>   
                </TabPanel>

                
            </TabPanels>

</Tabs>



      </Container>
    </Flex>
    </>
  )
}

export default Checkout


