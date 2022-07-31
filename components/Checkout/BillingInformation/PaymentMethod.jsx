import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import CreditCard from './PaymentMethod/CreditCard'
import BankTransfer from './PaymentMethod/BankTransfer'
import PayPal from './PaymentMethod/PayPal'
const PaymentMethod = () => {
  let screenStyle = { color: 'white', bg: 'red.500' }
  return (
    <>
    <Box w="100%">
    <HStack mb="6" w="100%" p="3" justifyContent={'space-between'} bg="blackAlpha.50">
    <Box fontSize={'14'}>
    Payment Method
    </Box>
    
</HStack>
     <Tabs w="100%" borderColor={'white'} >
            <TabList fontSize={'11'} w="100%"  flexDirection={['column','column','row']}  >
                <Tab mr="1" flexBasis="50%" bg="blackAlpha.50"   _selected={screenStyle} >CREDIT CARD</Tab>
                <Tab  flexBasis="50%" bg="blackAlpha.50"     _selected={screenStyle} >BANK TRANSFER</Tab>
                <Tab ml="1"  flexBasis="50%" bg="blackAlpha.50"    _selected={screenStyle} >PAYPAL</Tab>
                 
            </TabList>
            <TabPanels>
                <TabPanel p="0">
           <CreditCard/>
                </TabPanel>
                <TabPanel p="0">
                    <BankTransfer/>
                </TabPanel>
                <TabPanel p="0">
                   <PayPal/>
                </TabPanel>

                
            </TabPanels>

</Tabs>


    </Box>
     
    </>
  )
}

export default PaymentMethod