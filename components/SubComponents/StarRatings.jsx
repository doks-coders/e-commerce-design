import React from 'react'
import { HStack,Box } from '@chakra-ui/react'
const StarRatings = ({postiveRatingsColor,negativeRatingsColor}) => {
  return (
<>

<HStack spacing="0.5" mr="4" color={postiveRatingsColor}>
                    <Box> <i className='pi pi-star-fill'></i> </Box>
                    <Box> <i className='pi pi-star-fill'></i> </Box>
                    <Box> <i className='pi pi-star-fill'></i> </Box>
                    <Box> <i className='pi pi-star-fill'></i> </Box>
                    <Box color={negativeRatingsColor}> <i className='pi pi-star-fill'></i> </Box>
                </HStack>
</>
  )
}

export default StarRatings