"use client"

import React , { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Flex, Center,Icon,LinkBox, Text , Box, HStack, Heading, IconButton, SkeletonText, SkeletonCircle} from "@chakra-ui/react"
import randomColor from 'randomcolor'

import { BsThreeDots, BsClock, BsPause } from "react-icons/bs"
import Link from 'next/link'






const CoursesChapterBoxSkelton = () => {
    const color = useMemo(()=>(randomColor({luminosity: 'dark'})) , [])
    return (
        <Flex
            boxShadow="xl"
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            pr="20px"
        >
            <Center bg={color} minW="150px" minH='120px' h="100%"  >
                <Icon
                    as={BsThreeDots}
                    color="white"
                    fontSize="5xl"
                />
            </Center>

            <Box
                px="20px"
                py="10px"
                flexGrow={1}
            >
                <HStack
                    fontSize="sm"
                    fontWeight="500"
                >
                    <SkeletonCircle w="10px" h="10px" />
                    <Text
                    
                    color="gray.400"
                    >
                    <SkeletonText w="100px" noOfLines={1} />
                    </Text>


                </HStack>

                <Text
                    fontSize="md"
                    fontWeight="semibold"
                >
                    <SkeletonText  w="200px" noOfLines={1} />

                </Text>

                <Text
                    color="gray.400"
                    fontSize="sm"
                    display="-webkit-box"
                    noOfLines={2}
                    orientation='vertical'
                    overflow="hidden"
                    textOverflow="ellipsis"
                    my="10px"
                >
                  <SkeletonText noOfLines={3} w="100%" />

                </Text>


            </Box>
            <LinkBox
                
                alignSelf="center"
                justifySelf="end"
                >
                <Link href="#">
                
                    <IconButton 
                        aria-label='start'
                        icon={<BsPause />}
                        variant='base'
                        marginLeft="auto"
                        bg={color}
                        borderRadius="full"
                        boxShadow="xl"
                        color="white"
                        
                    
                    />
                </Link>
            
            </LinkBox>


        </Flex>
    )
}


export default CoursesChapterBoxSkelton