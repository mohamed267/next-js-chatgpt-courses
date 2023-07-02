"use client"

import React , { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Flex, Center,Icon,LinkBox, Text , Box, HStack, Heading, IconButton} from "@chakra-ui/react"
import randomColor from 'randomcolor'

import { BsThreeDots, BsClock, BsPause } from "react-icons/bs"
import Link from 'next/link'



type CourseChapterProps = {
    chapter: any
}


const CourseChapterBox = ({chapter}:CourseChapterProps) => {
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
            >
                <HStack
                    fontSize="sm"
                    fontWeight="500"
                >
                    <Icon 
                    color="gray.400"
                    as={BsClock}
                    />
                    <Text
                    
                    color="gray.400"
                    >
                    {chapter.timeToRead}
                    </Text>


                </HStack>

                <Text
                    fontSize="md"
                    fontWeight="semibold"
                >
                    {chapter?.title}

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
                   {chapter.description}

                </Text>


            </Box>
            <LinkBox
                
                alignSelf="center"
                justifySelf="end"
                >
                <Link  href={`/chapters/${chapter.id}`} >
                
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

CourseChapterBox.propTypes = {}

export default CourseChapterBox