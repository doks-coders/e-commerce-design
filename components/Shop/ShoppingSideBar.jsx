import React from 'react'
import {useState} from 'react'
import { Flex, HStack, Box, VStack, Heading, Text,Grid, Button,Image, Container, Stack } from '@chakra-ui/react'
import {RangeSlider,RangeSliderFilledTrack, RangeSliderThumb,RangeSliderTrack} from '@chakra-ui/react'
import {CheckboxGroup, Checkbox} from '@chakra-ui/react'
const ShoppingSideBar = () => {
  return (
    <>
       <>
    <Text fontWeight="semibold" mb="10px"  fontSize="xl">Shop by Category</Text>
<CategoriesElements/>
    </>


    <>
    <Text mt="20px" mb="10px"  fontWeight="semibold" fontSize="xl">Price Range</Text>
<RangeSliderElement/>
    </>

<>
<Text mt="20px" mb="10px" fontWeight="semibold" fontSize="xl">Show By Brand</Text>

<CheckBoxElement/>
</>

    </>
  )
}

export default ShoppingSideBar

const CategoriesElements = ()=>{

  let elements = [
      {name:'Clothes',number:'12'},
      {name:'Electronics',number:'40'},
      {name:'Health & Beauty',number:'50'},
      {name:'Shoes',number:'70'},
      {name:'Watches',number:'40'},
      {name:'Accessories',number:'50'},
  ]
  return (
      <>
      {
          elements.map((val,index)=>(
              <HStack _hover={{color:'red'}} cursor="pointer" my="0.5" key={index} justifyContent={'space-between'}>
<Text fontSize="sm">{val.name}</Text>
<Box color="black" fontWeight="bold" px="1" bg="blackAlpha.50">
  <Text fontSize="11">{val.number}</Text>
</Box>
</HStack>
          ))
      }
      </>
  )
}

const RangeSliderElement = ()=>{
  let [rangeValues,setRangeValues] = useState([30,80])
  return (
      <>
      <RangeSlider mt="5"
        aria-label={['min', 'max']}
        onChange={(val) => 
          setRangeValues(val.map(val=> val*1000 ))}
      aria-label={['min', 'max']} 
      defaultValue={[30, 80]}>
<RangeSliderTrack bg='red.100'> 
  <RangeSliderFilledTrack bg='tomato' />
</RangeSliderTrack>
<RangeSliderThumb boxSize={12} index={0}>
  <Box fontSize="12" color='tomato'>
  {rangeValues[0]}
  </Box>
</RangeSliderThumb>
<RangeSliderThumb boxSize={12} index={1}>
  <Box fontSize="12" color='tomato' >
      {rangeValues[1]}
  </Box>
</RangeSliderThumb>
</RangeSlider>
<Flex  w="100%" justifyContent={'space-between'}>
<Text fontSize="12" fontWeight="bold">From</Text>
<Text fontSize="12" fontWeight="bold">To</Text>
</Flex>
      </>
  )
}

const CheckBoxElement = ()=>{
  return(
      <>
      <CheckboxGroup  colorScheme='red' > 
<Stack spacing={2} direction={'column'}>
  <Checkbox > 
  <Text fontSize="sm">
  Zara
  </Text>
  </Checkbox>
  <Checkbox fontSize="12" ><Text fontSize="sm">
  Gucci
  </Text></Checkbox>
  <Checkbox fontSize="12" ><Text fontSize="sm">
  Rayban
  </Text></Checkbox>
</Stack>
</CheckboxGroup>
      </>
  )
}
