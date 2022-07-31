import React from 'react'
import { useState } from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import DropdownDemo from '../../PrimeComponents/DropdownDemo'
import InputComponent from './InputComponent'
const BuyerInfo = () => {
    let [selectedMode, setSelectedMode] = useState('None')
    let getMode = (e) => {
        setSelectedMode(e.value);
    }
    const states = [
        { name: 'Lagos' },
        { name: 'Abuja' },
        { name: 'Port Harcourt' },
        { name: 'Benin' },
    ];
  return (
    <>
   <Box w="100%">
   <HStack w="100%" p="3" justifyContent={'space-between'} bg="blackAlpha.50">
    <Box fontSize={'14'}>
    Home / <Box color="blackAlpha.600" as="span">Checkout</Box>
    </Box>
    <Box fontSize={'14'}>
    Returning user? <Box color="blackAlpha.600" as="span">Log in here</Box>
    </Box>
</HStack>

<Flex flexWrap={'wrap'}>
  <InputTypes/>

  
     <Flex w="100%">
     <Box mt="2" mr="2"  flexBasis={'50%'}>
    <Text color={'blackAlpha.700'} my="1.5">{'STATE'}</Text>  
    <DropdownDemo width={'100%'} selectMode={selectedMode} placeholder="Select State" onModeChange={getMode} modes={states} />
    </Box>


    <Box mt="2"  flexBasis={'50%'}>
    <Text color={'blackAlpha.700'} my="1.5">{'POSTAL CODE'}</Text>  
    <Input type={'Text'} placeholder={'Enter City Postal Code'}/>
     </Box>

     </Flex>

 

  
 
      
</Flex>
    </Box> 



    </>
  )
}

export default BuyerInfo

let InputTypes = ()=>{
    let inputs = [{key:'Full Name',type:'text',width:'100%',placeholder:'Enter your full name'},
    {key:'Email Address',type:'text',width:'100%',placeholder:'Enter your email address'},
    {key:'Address 1',type:'text',width:'100%',placeholder:'Enter your main address'},
    {key:'Address 2',type:'text',width:'100%',placeholder:'Enter your alternate address'},
    {key:'City',type:'text',width:'100%',placeholder:'Enter your city'}]
    
    return (
        <>
        {
            inputs.map((val,index)=>(
                <>
                <InputComponent keyInput={index} width={val.width} name={val.key} type={val.type} placeholder={val.placeholder} />
           
                </>
              
              
            ))
        }
        </>
    )
}