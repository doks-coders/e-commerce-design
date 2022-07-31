import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button,Stack, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import BuyerInfo from './BillingInformation/BuyerInfo'
import PaymentMethod from './BillingInformation/PaymentMethod'
const BillingInformation = () => {
  return (
   <>
   <Flex  flexDir={['column','column','column','row']}>
<Flex mt={["5","5","5","0"]} mr="2" flexBasis={'50%'}>
<BuyerInfo/>
</Flex>
<Flex mt={["5","5","5","0"]} flexDirection="column" mr flexBasis={'50%'}>
<PaymentMethod/>

<HStack mt="10" p="4" bg="blackAlpha.50"  flexDir={['column-reverse','column-reverse','row']} justifyContent={'space-between'}>
             <Flex  flexDir={['column','column','row']}>
    <Button bg="red.600" color="white">Back To Cart</Button>
    <Button variant={'outline'} color="red.600">Place Order</Button>
</Flex>

<Stack  spacing={0}>
    <Text color="blackAlpha.700"  fontSize={'sm'}>Cart Total</Text>
    <Text fontWeight={'semibold'} fontSize={'xl'}>$75.00</Text>
</Stack>
             </HStack>
</Flex>
   </Flex>

  

   </>
  )
}

export default BillingInformation