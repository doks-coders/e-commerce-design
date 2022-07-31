
import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import ShippingReturns from './CustomTabs/ShippingReturns'
import Reviews from './CustomTabs/Reviews'
import AdditionalInfo from './CustomTabs/AdditionalInfo'
import Description from './CustomTabs/Description'
const Customtabs = () => {
   let screenStyle = { color: 'white', bg: 'red.500' }
 
    return (
        <>
        <Flex >
        <Container  maxWidth="container.xl">

<Tabs borderColor={'white'} display={['none','none','none','block']}>
            <TabList  w="100%"  >
                <Tab flexBasis="50%" bg="blackAlpha.50"  mx="2" _selected={screenStyle} >Description</Tab>
                <Tab flexBasis="50%" bg="blackAlpha.50"  mx="2" _selected={screenStyle} >Additional Info</Tab>
                <Tab flexBasis="50%"  bg="blackAlpha.50"  mx="2" _selected={screenStyle} >Reviews</Tab>
                   <Tab flexBasis="50%" bg="blackAlpha.50"  mx="2" _selected={screenStyle} >Shipping Returns</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
              <Description/>
                </TabPanel>
                <TabPanel>
                            <AdditionalInfo/>
                </TabPanel>
                <TabPanel>
                            <Reviews/>
                </TabPanel>

                   <TabPanel>
                           <ShippingReturns/>
                </TabPanel>
            </TabPanels>

</Tabs>

<Flex mt="10" justifyContent={'center'}>
<Tabs borderColor={'white'}   ml="3" w="100%"  display={['block','block','block','none']}>
            <TabList  w="100%"  flexDirection={'column'} >
                <Tab flexBasis="50%" bg="blackAlpha.50"  _selected={screenStyle} >Description</Tab>
                <Tab flexBasis="50%" bg="blackAlpha.50"   _selected={screenStyle} >Additional Info</Tab>
                <Tab flexBasis="50%"  bg="blackAlpha.50"  _selected={screenStyle} >Reviews</Tab>
                   <Tab flexBasis="50%" bg="blackAlpha.50"  _selected={screenStyle} >Shipping Returns</Tab>
            </TabList>
            <TabPanels>
                <TabPanel >
              <Description/>
                </TabPanel>
                <TabPanel>
                              <AdditionalInfo/>
                </TabPanel>
                <TabPanel>
                                <Reviews/>
                </TabPanel>

                   <TabPanel>
                               <ShippingReturns/>
                </TabPanel>
            </TabPanels>

</Tabs>


</Flex>

</Container>

        </Flex>
         
        </>
    )
}

export default Customtabs



let CustomInformation = ({ heading, quote, information, image }) => {
    return (

        <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} >
            <Flex mr="5" flexBasis="70%" flexDirection="column">
                <Heading mb="2" fontSize={'2xl'} fontWeight="normal">{heading}</Heading>

                <Text color="#777777" my="2"> <i>{quote}</i> </Text>

                <Text color="#777777" my="2">{information}</Text>

            </Flex>

            <Flex height="200px" flexBasis="30%">
                <Image objectFit="cover" src={image} />
            </Flex>
        </Flex>

    )
}