import React from 'react'
import { Button, Input, Grid, Container, Text, Heading, Divider,Box, VStack, HStack, Image,Flex,Stack } from '@chakra-ui/react'
const Completed = () => {
  return (
    <>
    <Flex flexDirection="column" justifyContent={'center'} alignItems="center">
<Box fontSize="100px">
    <i style={{fontSize:'inherit'}} className="pi pi-car"></i>
</Box>
<Text fontSize="3xl"> Thank You</Text>
<Text width={["100%","100%","600px","600px"]} textAlign="center" color="blackAlpha.700">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet velit debitis asperiores odio? Dolor accusamus, ea qui quo tempora labor
</Text>
<Button mt="5" bg="red.500" color="white">Continue Shopping</Button>
    </Flex>
    </>
  )
}

export default Completed