import React from 'react'
import { Box,Text } from '@chakra-ui/react'
const InputComponentLayout = ({children,name,width,keyInput}) => {
  return (
    <Box mr="2" mt="2" key={keyInput} w={width}>
    <Text color={'blackAlpha.700'} my="1.5">{name.toUpperCase()}</Text>  
 {children}
    </Box>
  )
}

export default InputComponentLayout