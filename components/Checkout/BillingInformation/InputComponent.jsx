import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import InputComponentLayout from './InputComponentLayout'
const InputComponent = ({keyInput,width,name,type,placeholder}) => {
  return (
   <InputComponentLayout width={width} name={name}>
 <Input  type={type} placeholder={placeholder}/>

   </InputComponentLayout>

  )
}

export default InputComponent