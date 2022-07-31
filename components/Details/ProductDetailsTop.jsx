import React from 'react'
import { useState } from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Grid, Button, Image, Container, Stack } from '@chakra-ui/react'
import DropdownDemo from '../PrimeComponents/DropdownDemo'
import NumberButton from './NumberButton'
import StarRatings from '../SubComponents/StarRatings'
const ProductDetailsTop = () => {
    let getMode = (e) => {
        setSelectedMode(e.value);
    }
    let [selectedMode, setSelectedMode] = useState('None')

    const modes = [
        { name: 'SM' },
        { name: 'MD' },
        { name: 'XL' },
        { name: 'XXL' },
    ];


    return (
        <Flex flexDirection={'column'} w="100%">
            <Box>
                <Box bg="teal.400" as="span" fontSize="12" color="white" py="0.5" px="2">Trending</Box>
            </Box>




            <Heading fontSize={'3xl'} fontWeight="semibold">Red Digital Marketing</Heading>
            <HStack my="10px">

                <StarRatings postiveRatingsColor={"yellow.400"} negativeRatingsColor={"blue.900"} />


                <Text color="blackAlpha.800" fontSize="sm">12 Customer Reviews</Text>
            </HStack>
            <Text mb="5px" fontWeight="bold" fontSize="2xl">$250</Text>

            <Text color="blackAlpha.700" fontSize="sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum praesentium soluta nihil qui, omnis aut eius inventore dolorem culpa. Aperiam accusantium ipsa pariatur, nihil eveniet aut consequuntur dicta dignissimos quidem.
            </Text>

            <HStack mt="15px">
                <Text>Select Size:</Text>
                <Box as="span" w={['150px', '150px', '250px']}>
                    <DropdownDemo width={'100%'} selectMode={selectedMode} placeholder="Select Size" onModeChange={getMode} modes={modes} />

                </Box>
            </HStack>

            <Flex mt="15px">
                <NumberButton />

                <Button bg="red.500" ml="2" _hover={false} color="white" size="sm" py="1" px="5">
                    <Box as="span" mr="2" >
                        <i className='pi pi-shopping-cart'></i>
                    </Box>

                    Add to cart
                </Button>

                <Button size="sm" bg="white">
                    <i className="pi pi-heart-fill"></i>
                </Button>
                <Button size="sm" bg="white">
                    <i className="pi pi-share-alt"></i>
                </Button>
            </Flex>

            <Flex mt="25px" w={["100%", "100%", "300px"]} bg="blackAlpha.50" alignItems={'center'}  >
                <Box p="2">
                    <Flex py="2" px="3">
                        <Text fontWeight="bold" mr="2">CATEGORY:</Text>
                        <Text>Shirts</Text>
                    </Flex>

                    <Flex py="2" px="3">
                        <Text fontWeight="bold" mr="2">TAGS:</Text>
                        <Text>Innovation</Text>
                    </Flex>
                </Box>
            </Flex>


        </Flex>
    )
}

export default ProductDetailsTop