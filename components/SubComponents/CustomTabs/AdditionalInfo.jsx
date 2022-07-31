import React from 'react'


import {  Box, Text } from '@chakra-ui/react'


const AdditionalInfo = () => {
  return (
 <>
 <Box>
    <Text mb="8" color="blackAlpha.700" fontSize="md">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut totam voluptatem perferendis laborum. Aliquid beatae enim consequatur! Deleniti consectetur vitae, nobis nihil numquam magni eos ab qui repellat animi quia.
    </Text>


         <DetailsTable width="100%"/>

 </Box>
 </>
  )
}

export default AdditionalInfo


let DetailsTable= ({width})=>{

    let details = [
        {label:'Brand',value:'Other'},
        {label:'Ram Size',value:'512'},
        {label:'Package Thickness',value:'7 Centimeters'},
        {label:'Package Weight',value:'42 Grams'},
    ]
    return (
        <>
           <table style={{width:width}}>
            {
                details.map((val,index)=>(
                    <tr key={index}>
                    <td style={{borderWidth:'1px'}}>
                        <Box py="2" pl="2"><Text fontWeight="bold">{val.label}</Text> </Box>
                    </td>
                    <td style={{borderWidth:'1px'}}><Box py="2" pl="2"><Text color="blackAlpha.700">{val.value}</Text> </Box></td>
                </tr>
              
                ))
            }
                 
              </table>
        </>
    )
}