import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Grid, Button, Image, Container, Stack } from '@chakra-ui/react'
import { Tabs, TabPanels, TabPanel, TabList, Tab} from '@chakra-ui/react'
const ImageCarousel = () => {
  let ImageDimensions = ['300px','300px','450px']
  let thumbnailDimensions = ['80px','100px']
  return (
    <>


    <Tabs     
     borderColor={'white'} display={['flex']} flexDirection={["column-reverse","column-reverse","row"]}>
            <TabList bg="white"  flexDirection={['row','row','column']}    >
                <Tab flexBasis="50%" _selected={false} >
                <Image my="1" src='Img/portfolio-details-1.jpg' objectFit={'cover'} height={thumbnailDimensions} w="100px"></Image>
                </Tab>
                <Tab flexBasis="50%" _selected={false}>
                <Image my="1" src='Img/portfolio-3.jpg' objectFit={'cover'} height={thumbnailDimensions} w="100px"></Image>
                  </Tab>
                <Tab flexBasis="50%" _selected={false}>
                <Image my="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={thumbnailDimensions} w="100px"></Image>
                </Tab>
                  
            </TabList>
            <TabPanels >
                <TabPanel>
                <Image my="1" src='Img/portfolio-details-1.jpg' objectFit={'cover'} height={ImageDimensions} w="100%"></Image>
                </TabPanel>
                <TabPanel>
                <Image my="1" src='Img/portfolio-3.jpg' objectFit={'cover'} height={ImageDimensions} w="100%"></Image>
                </TabPanel>
                <TabPanel>
                <Image my="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={ImageDimensions} w="100%"></Image>
                </TabPanel>

                   
            </TabPanels>

</Tabs>





       

              
    </>
  )
}

export default ImageCarousel




/**
 * 
 *    <Flex  display={['none','none','flex']} flexDirection={'column'} mr="2" flexBasis={'15%'}>
                <Image my="1" src='Img/portfolio-details-1.jpg' objectFit={'cover'} height={'100px'} w="100px"></Image>
                <Image my="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={'100px'} w="100px"></Image>
                <Image my="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={'100px'} w="100px"></Image>
              </Flex>
              <Flex flexBasis={'85%'}>
                <Image my="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={['300px','300px','450px']} w="100%"></Image>
              </Flex>

              <Flex display={['flex','flex','none']} flexDirection={'row'} mr="2" flexBasis={'15%'}>
                <Image m="1" src='Img/portfolio-details-1.jpg' objectFit={'cover'} height={'80px'} w="80px"></Image>
                <Image m="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={'80px'} w="80px"></Image>
                <Image m="1" src='Img/portfolio-1.jpg' objectFit={'cover'} height={'80px'} w="80px"></Image>
              </Flex>


 */