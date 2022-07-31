import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import { useState } from 'react'
import DropdownDemo from '../../../PrimeComponents/DropdownDemo'
import InputComponent from '../InputComponent'
import InputComponentLayout from '../InputComponentLayout'
const BankTransfer = () => {

    let [selectAccount, setSelecAccount] = useState('None')
    let getAccounts = (e) => {
        setSelecAccount(e.value);
    }

    const accounts = [
        { name: 'Zenith' },
        { name: 'First Bank' },
        { name: 'Ecobank' },
        { name: 'Fidelity Bank' },
    ];



   
    let marginLeft = 2
    let getPercentBasis = (percentage)=>{
let newPercentage =  `${(percentage - marginLeft)}%`
return newPercentage
    }

  

  return (
    <>
    <Flex flexDirection={['column','column','row']}  flexWrap="wrap">
   
   

    <Box ml={marginLeft}  flexBasis={getPercentBasis(50)} >
    <InputComponent  width={'100%'} name={'Routing Number'} type={'number'} placeholder={'eg. eguono'} />
  </Box>

  <Box ml={marginLeft}  flexBasis={getPercentBasis(50)} >
    <InputComponent  width={'100%'} name={'Account Number'} type={'number'} placeholder={'0000-0000-0000-0000'} />
  </Box>

   <Flex ml={marginLeft} flexBasis={getPercentBasis(100)} >
        <InputComponent  width={'100%'} name={'Name On Bank Account'} type={'text'} placeholder={''} />
        </Flex>



        <Flex ml={marginLeft} flexBasis={getPercentBasis(50)} >
        <InputComponent  width={'100%'} name={'Bank Name'} type={'text'} placeholder={''} />
        </Flex>

    <Box mt="1" ml={marginLeft} flexBasis={getPercentBasis(50)}>
    <InputComponentLayout  name="Account Type" width="100%">
    <DropdownDemo width={'100%'} selectMode={selectAccount} placeholder="Account type" onModeChange={getAccounts} modes={accounts} /> 
    </InputComponentLayout>
    </Box>

      
   
    </Flex>
    </>
  )
}

export default BankTransfer