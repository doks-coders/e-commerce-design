import React from 'react'

import { Button, Input, Grid, Container, Text, Heading, Divider,Box, VStack, HStack, Image,Flex,Stack } from '@chakra-ui/react'
import NumberButton from '../Details/NumberButton'

const ShoppingCart = () => {
  return (
    <Flex flexDirection={'column'}>


           
             <Box overflow={'auto'} fontSize={["10","10","13"]} w="100%">
                <Box w={["500px","500px","100%"]}>
                <table style={{width:'100%'}}>
                    <tbody>
             <tr style={{background:"rgba(0, 0, 0, 0.04)" }}>
                    <td>
                        <Box py="2" pl="2"><Text fontWeight="semibold">PRODUCT</Text> </Box>
                    </td>
                    <td >
                        <Box py="2" pl="2"><Text fontWeight="semibold">PRICE</Text> </Box>
                    </td>

                    <td >
                        <Box py="2" pl="2"><Text fontWeight="semibold">QUANTITY</Text> </Box>
                    </td>
                    <td >
                        <Box py="2" pl="2"><Text fontWeight="semibold">TOTAL</Text> </Box>
                    </td>
                </tr>

           <CartItems/>


           </tbody>
                </table>
                </Box>
             
             </Box>
             <HStack mt={["0","0","5"]} flexDir={['column-reverse','column-reverse','row']} justifyContent={'space-between'}>
             <Flex pt="5" flexDir={['column','column','row']}>
    <Button bg="red.600" color="white">Continue Shopping</Button>
    <Button variant={'outline'} color="red.600">Proceed to Checkout</Button>
</Flex>

<Stack pt="5" pb="2" spacing={0}>
    <Text color="blackAlpha.700"  fontSize={'sm'}>Cart Total</Text>
    <Text fontWeight={'semibold'} fontSize={'xl'}>$75.00</Text>
</Stack>
             </HStack>

            
           
              
          
        
                 
             

    </Flex>

  )
}

export default ShoppingCart






let CartItems= ({width})=>{

    let cartItems = [
        {name:'Blue Perfume',price:'$350',total:"$350",image:"Img/portfolio-1.jpg"},
        {name:'Blue Perfume',price:'$350',total:"$350",image:"Img/portfolio-2.jpg"},
        {name:'Blue Perfume',price:'$350',total:"$350",image:"Img/portfolio-3.jpg"},
        {name:'Blue Perfume',price:'$350',total:"$350",image:"Img/portfolio-4.jpg"},
    ]
    return (
        <>
{
cartItems.map((val,index)=>(

    <tr key={index}>
    <td>
    <HStack py="2" pl="2">
        <Image objectFit="cover" src={val.image} boxSize="50px"></Image>
        <Text  fontWeight={'semibold'} >{val.name}</Text>
         </HStack>
    </td>
    <td >
        <Box py="2" pl="2"><Text >{val.price}</Text>
         </Box>
    </td>
    <td>
        <NumberButton/>
    </td>
    <td >
        <HStack>
        <Box w="90%" py="2" pl="2"><Text >{val.total}</Text> </Box>
        <Button variant="outline" >
            <i className='pi pi-trash'></i>
        </Button>
        </HStack>                       
    </td>
    </tr>
))

}
        </>
    )
}