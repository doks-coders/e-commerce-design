import React from 'react'
import { Flex, HStack, Box, VStack, Heading, Text, Button, Container, Stack,Image,Divider } from '@chakra-ui/react'
import IconSvg from './IconSvg'
import SimpleDrawer from '../../components/Drawer/SimpleDrawer'
import Link from 'next/link'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

const Header = () => {
    return (
        <>
            <Flex zIndex="4" background="white" position="fixed" width="100%" boxShadow={'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} py="4">
                <Container maxW="container.xl">
                    <HStack justifyContent={'space-between'}>
                        <HStack display={['none', 'none', 'flex']} spacing={10}>
                            <Link href="/">
                                <Text fontSize="sm" cursor="pointer" fontWeight="semibold" color="red.500">HOME</Text>
                            </Link>
                            <Link href="/shop">
                                <Text fontSize="sm" cursor="pointer" fontWeight="semibold">SHOP</Text>
                            </Link>
                            <Link href="/detail">
                                <Text fontSize="sm" cursor="pointer" fontWeight="semibold">DETAIL</Text>
                            </Link>
                            <Link href="/checkout">
                                <Text fontSize="sm" cursor="pointer" fontWeight="semibold">CHECKOUT</Text>
                            </Link>

                        </HStack>

                        <Box display={['block', 'block', 'none']}>
                            <SimpleDrawer btnColor="black" />
                        </Box>


                        <Box h="45px" w="130px">
                            <IconSvg />
                        </Box>
                        <HStack spacing="0">

                            <Menu>
                                <MenuButton as={Button} bg="white" >
                                    <Box cursor="pointer" _hover={{ color: 'red.500' }} position="relative"><i className='pi pi-shopping-bag'></i>
                                        <Flex position="absolute"
                                            bg="red.500" borderRadius={'full'}
                                            top="-2" left="-1" w="15px" h="15px"
                                            justifyContent={'center'} alignItems="center"
                                            fontSize={'10px'} color={'white'}>2</Flex>
                                    </Box>
                                </MenuButton>
                                <MenuList>
                                    <>
                                    <HStack px="3" py="1" justifyContent="space-between">
                                        <Image width="10" objectFit="cover" height="10" src="Img/portfolio-1.jpg"></Image>
                                        <Stack spacing="0">
                                            <Text fontSize="10">Shirt</Text>
                                            <Text fontWeight="bold" fontSize="11">2 White Tees</Text>
                                        </Stack>

                                        <Text fontSize="10">$149</Text>
                                    </HStack>
                                    <Divider/>
                                    </>


                                    <>
                                    <HStack px="3" py="1" justifyContent="space-between">
                                        <Image width="10" objectFit="cover" height="10" src="Img/portfolio-1.jpg"></Image>
                                        <Stack spacing="0">
                                            <Text fontSize="10">Shirt</Text>
                                            <Text fontWeight="bold" fontSize="11">White Tees</Text>
                                        </Stack>

                                        <Text fontSize="10">$149</Text>
                                    </HStack>
                                    <Divider/>
                                    </>
                                    
                                   
                                    <Flex mt="2" justifyContent={'center'}>
                                        <Link href="/checkout">
                                        <Button colorScheme={'red'} size="sm">Checkout</Button>
                                        </Link>
                                   
                                    </Flex>
                                    
                                    
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} bg="white">

                                    <Box cursor="pointer" _hover={{ color: 'red.500' }} position="relative"><i className='pi pi-heart'></i>
                                        <Flex position="absolute"
                                            bg="red.500" borderRadius={'full'}
                                            top="-2" left="-1" w="15px" h="15px"
                                            justifyContent={'center'} alignItems="center"
                                            fontSize={'10px'} color={'white'}>2</Flex>
                                    </Box>
                                </MenuButton>
                              
                                <MenuList>
                                    <>
                                    <HStack px="3" py="1" justifyContent="space-between">
                                        <Image width="10" objectFit="cover" height="10" src="Img/portfolio-1.jpg"></Image>
                                        <Stack spacing="0">
                                            <Text fontSize="10">Shirt</Text>
                                            <Text fontWeight="bold" fontSize="11">White Tees</Text>
                                        </Stack>

                                        <Text fontSize="10">$149</Text>
                                    </HStack>
                                    <Divider/>
                                    </>


                                    <>
                                    <HStack px="3" py="1" justifyContent="space-between">
                                        <Image width="10" objectFit="cover" height="10" src="Img/portfolio-2.jpg"></Image>
                                        <Stack spacing="0">
                                            <Text fontSize="10">Shirt</Text>
                                            <Text fontWeight="bold" fontSize="11">Black Tees</Text>
                                        </Stack>

                                        <Text fontSize="10">$149</Text>
                                    </HStack>
                                    <Divider/>
                                    </>
                                    
                                   
                                    
                                    
                               
                                </MenuList>
                            </Menu>
                            <Button bg="white">
                                <Box cursor="pointer" _hover={{ color: 'red.500' }} position="relative"><i className='pi pi-user'></i>
                                </Box>
                            </Button>


                        </HStack>

                    </HStack>
                </Container>
            </Flex>
        </>
    )
}

export default Header