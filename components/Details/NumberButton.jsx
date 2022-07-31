import React from 'react'
import {useState} from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Grid, Button, Image, Container, Stack } from '@chakra-ui/react'


const NumberButton = () => {
    
let [number, setNumber]  = useState(0)


let addNumber = (val)=>{
    setNumber(val+1)
}
let subtTractNumber = (val)=>{
    if(val>0){
        setNumber(val-1)
    }
}

  return (
    <HStack>
    <Button variant={'outline'} onClick={()=>subtTractNumber(number)} p="1" size="sm"> 
    <i style={{fontSize:'10px'}} className="pi pi-chevron-left"></i>
    </Button>

<Flex> {number} </Flex>
    <Button variant={'outline'}  onClick={()=>addNumber(number)}  p="1" size="sm"> 
    <i style={{fontSize:'10px'}} className="pi pi-chevron-right"></i>
    </Button>
</HStack>
  )
}

export default NumberButton