
"use client"
// import React from 'react'

import { HStack , Image, Box, Text, Flex } from "@chakra-ui/react"
import { Rating } from '../common'


type CourseListBoxProps = {
    course: any
}

const CourseListBox = ({course}: CourseListBoxProps) => {
  return (
    <Flex
        bg="white"
        boxShadow="md"
        p="15px"
        borderRadius="xl"
    >

        <Image
        src="https://media.istockphoto.com/id/604370074/fr/photo/jeune-coureuse-de-fitness-sur-le-sentier-du-bord-de-mer-du-lever-du-soleil.jpg?s=612x612&w=0&k=20&c=TtNqgsxc9M_Y8xVNnxFamEKQzcUL4LZrsuziJeOXSI8="
        alt="image"
        w="150px"
        h="120px"
        borderRadius="xl"
        />

        <Box 
        px="10px"
        >
        <Text
            fontWeight="semibold"
        >
            {course?.title}
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
           {course?.description}

        </Text>

        <HStack>
            <Rating 
                changeable={false}
                value={4}
            />

        </HStack>

        </Box>


    </Flex>
  )
}

export default CourseListBox