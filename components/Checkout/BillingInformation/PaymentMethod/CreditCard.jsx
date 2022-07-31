import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import { useState } from 'react'
import DropdownDemo from '../../../PrimeComponents/DropdownDemo'
import InputComponent from '../InputComponent'
import InputComponentLayout from '../InputComponentLayout'
const CreditCard = () => {

    let [selectMonth, setSelectedMonth] = useState('None')
    let getMonth = (e) => {
        setSelectedMonth(e.value);
    }

    const months = [
        { name: 'January' },
        { name: 'February' },
        { name: 'March' },
        { name: 'April' },
    ];



    let [selectYear, setSelectedYear] = useState('None')
    let getYear = (e) => {
        setSelectedYear(e.value);
    }

    let marginLeft = 2
    let getPercentBasis = (percentage)=>{
let newPercentage =  `${(percentage - marginLeft)}%`
return newPercentage
    }

    const years = [
        { name: '2001' },
        { name: '2002' },
        { name: '2003' },
        { name: '2004' },
    ];

  return (
    <>
    <Flex flexDirection={['column','column','row']}  flexWrap="wrap">
        <Flex ml={marginLeft} flexBasis={getPercentBasis(100)} >
        <InputComponent  width={'100%'} name={'Name On Card'} type={'text'} placeholder={'Please input your name'} />
        </Flex>
   

    <Box ml={marginLeft}  flexBasis={getPercentBasis(70)} >
    <InputComponent  width={'100%'} name={'Card Number'} type={'number'} placeholder={'0000-0000-0000-0000'} />
  </Box>

    <Box ml={marginLeft} flexBasis={getPercentBasis(30)}>
    <InputComponent  width={'100%'} name={'CVV'} type={'number'} placeholder={''} />
   </Box>




    <Box ml={marginLeft} flexBasis={getPercentBasis(50)} >
    <InputComponentLayout name="Month" width="100%">
    <DropdownDemo width={'100%'} selectMode={selectMonth} placeholder="Select Month" onModeChange={getMonth} modes={months} />
    </InputComponentLayout>
    </Box>

    <Box ml={marginLeft} flexBasis={getPercentBasis(50)}>
    <InputComponentLayout name="Year" width="100%">
    <DropdownDemo width={'100%'} selectMode={selectYear} placeholder="Select Year" onModeChange={getYear} modes={years} /> 
    </InputComponentLayout>
    </Box>

      
   
    </Flex>
    </>
  )
}

export default CreditCard