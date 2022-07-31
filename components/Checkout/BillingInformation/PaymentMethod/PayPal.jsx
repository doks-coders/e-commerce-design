import React from 'react'
import { Button,Stack, Box, Flex,Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import DropdownDemo from '../../../PrimeComponents/DropdownDemo'
import InputComponent from '../InputComponent'
import InputComponentLayout from '../InputComponentLayout'
const PayPal = () => {


   
    let marginLeft = 2
    let getPercentBasis = (percentage)=>{
let newPercentage =  `${(percentage - marginLeft)}%`
return newPercentage
    }

  

  return (
    <>
    <Flex flexDirection={['column','column','row']}  flexWrap="wrap">
   
   

    
   <Flex ml={marginLeft} flexBasis={getPercentBasis(100)} >
        <InputComponent  width={'100%'} name={'Email Address'} type={'email'} placeholder={'Email address'} />
        </Flex>



        <Flex ml={marginLeft} flexBasis={getPercentBasis(100)} >
        <InputComponent  width={'100%'} name={'Password'} type={'password'} placeholder={'Password'} />
        </Flex>

      <Stack p="4" mt="2" spacing="3" w="100%">
        <Flex>
          <Checkbox colorScheme={'red'} mr="3"/>  Stay Logged In For Faster Checkout
        </Flex>
        <Box>
        <Button bg="red.500" color="white">Login to Paypal</Button>
        </Box>
      </Stack>
   
    </Flex>
    </>
  )
}

export default PayPal