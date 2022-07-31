import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text,Grid, Button,Image, Container, Stack } from '@chakra-ui/react'
import DropDownDemo from '../PrimeComponents/DropdownDemo'
import {useState} from 'react'
const ShopHeader = () => {
    let getMode = (e) => {
        setSelectedMode(e.value);
         }
    let [selectedMode,setSelectedMode] = useState('None')
    
        const modes = [
            { name: 'Alphabetically (A-Z)'},
            { name: 'Alphabetically (Z-A)'},
            { name: 'Prices (High - Low)'},
            { name: 'Prices (Low - High)'},
        ];
    
  return (
    <HStack justifyContent={'space-between'}>
    <Text fontSize={'sm'} as="div">
    Showing  {' '}
    <Box as="span" fontWeight="bold">12</Box>{' '}
    of <Box as="span" fontWeight="bold">126</Box>
    </Text>

    <Flex>
    <Button bg="white">
         <i className='pi pi-list'></i>
     </Button>
      <Button bg="white">
         <i className='pi pi-th-large'></i>
     </Button>
     <Box display={['none','none','block']} >
     <DropDownDemo width={'100%'} selectMode={selectedMode} placeholder="Default"  onModeChange={getMode} modes={modes} />
     </Box>

     <Box display={['block','block','none']} >
     <DropDownDemo width={'100px'} selectMode={selectedMode} placeholder="Default" onModeChange={getMode} modes={modes} />
     </Box>
  
    </Flex>
 </HStack>
  )
}

export default ShopHeader