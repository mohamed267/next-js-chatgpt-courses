"use client"

import React, { useEffect, useState } from 'react'
import { Box,Avatar,Center, Flex,Badge, HStack, Icon, Heading, IconButton, Tab, TabList, TabPanels, Tabs, Text, useColorModeValue, Image, Modal, useDisclosure, ModalContent, ModalBody, ModalHeader, ModalOverlay, Skeleton, SkeletonText, SkeletonCircle } from '@chakra-ui/react'


import randomColor from "randomcolor"
import { BsThreeDots, BsClock } from "react-icons/bs"

import {BiBadge, BiHeading, BiPlus, BiSearch} from "react-icons/bi"
import { BsBarChartFill } from "react-icons/bs"
import { If, Rating } from '..'
import { CourseListBox } from '../courses'
import CourseChapterBox from '../courses/CourseChapterBox'
import dynamic from 'next/dynamic'
import { AnyNaptrRecord } from 'dns'
import NewCourseForm from './NewCourseForm'
import { useCreateCourse } from '@/app/api/course/createCourse'
import CoursesChapterBoxSkelton from './CoursesChapterBoxSkelton'

const ScrollArea = dynamic(
  () => import('react-scrollbar'),
  { ssr: false }
)



type CourseListWrapperProps = {
    courses: any
}



type Course = {
    title?: string,
    description?: string,
    chapters?: any
}

const CourseListWrapper =  ({courses}:CourseListWrapperProps) => {
    const {isOpen , onOpen , onClose }  =  useDisclosure()
    const { mutate: createCourse ,  isLoading: isCreating, data: courseData , isSuccess: isCreated}  = useCreateCourse()

    const [course , setCourse ] = useState<Course>({})


    const tabSelectedColor = useColorModeValue("gray.900", "gray.800")


    const handleCreateCourse = (courseData: any) =>{
      onClose()
      createCourse(courseData)
    }


    useEffect(()=>{
      if(isCreated){
        setCourse(courseData)
      }
    } , [isCreated, courseData])

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent borderRadius="xl" >
            <ModalHeader> New course </ModalHeader>
            <NewCourseForm  createCourse={handleCreateCourse} />
          </ModalContent>

        </Modal>

        <Flex
          borderRadius="2xl"
          h="100%"
          alignItems="stretch"
        > 


          <Box 
            w="40%"
            px="20px"
            py="20px" 
          > 
            <HStack
              justifyContent="space-between"
            >
              <Text
                fontWeight="semibold"
                fontSize="lg"
              >
                Cources
              </Text>  

              <IconButton 
                size="sm"
                aria-label='search'
                icon={<BiPlus />}
                variant="white"
                onClick={onOpen}
              />
            </HStack> 

            <Tabs>
              <TabList>
                <Tab _selected={{ color: tabSelectedColor }} fontSize="lg" color="gray.300" >All</Tab>
                <Tab _selected={{ color: tabSelectedColor }} fontSize="lg"  color="gray.300" >Active</Tab>
                <Tab _selected={{ color: tabSelectedColor }} fontSize="lg"  color="gray.300" >Completed</Tab>

              </TabList>

              <TabPanels>

                <Flex
                  flexDirection="column"
                  py="20px"
                  rowGap="10px"
                >
                    {
                        courses?.map((course: any , key: any)=>(
                            <Box cursor="pointer" onClick={()=>{setCourse(course)}} key={key} >
                                <CourseListBox  course={course}  />
                            </Box>
                        ))
                    }
                </Flex>

              </TabPanels> 



            </Tabs>

          </Box>

          <Box 
            w="60%"   
            bg="white" 
            py="20px"
            borderRadius="xl"

            
          > 

            <ScrollArea 
              speed={0.8}
              horizontal={false}
              style={{
                height:"100%",
                paddingLeft: "20px",
                paddingRight: "20px"
              }}
            >
              <If condition={isCreating} > 
                <Box>
                  <Skeleton w="100%"  h="400px" objectFit="cover" borderRadius="xl"  />
                  <HStack
                    py='20px'
                    gap="20px"
                  >
                    

                    <SkeletonText  w="200px" noOfLines={1} />

                    <Text
                      fontSize="15px"
                      display="flex"
                    >
                      <SkeletonText  w="20px" noOfLines={1} mx="10px" />
                      <SkeletonText  w="50px" noOfLines={1} />

                    </Text>
                    <Skeleton p="5px"  px="10px" gap="10px"   />


                  </HStack>
                  <SkeletonText noOfLines={1}  w="200px" mb="20px" />
                  <SkeletonText noOfLines={3}  w="100%" />
                  <HStack
                    my="15px"
                  >
                    <SkeletonCircle  width="40px" height="40px" />

                    <Box  w="200px"  >
                      <SkeletonText noOfLines={1}  w="100x" mb="10px" />
                      <SkeletonText noOfLines={1}  w="100x" fontSize="xs" /> 

                    </Box>

                  </HStack>

                  <Flex
                      flexDir="column"
                      rowGap="10px"
                      py="20px"
                    >
                      {[1, 2, 3].map((chapter: any , key: any)=>(
                          <CoursesChapterBoxSkelton key={key} />

                      )) }
                      

                  </Flex>
                  
                    
                </Box>
              </If>
              <If condition={!isCreating} >
                <Box>
                  <Image
                    src="https://media.istockphoto.com/id/604370074/fr/photo/jeune-coureuse-de-fitness-sur-le-sentier-du-bord-de-mer-du-lever-du-soleil.jpg?s=612x612&w=0&k=20&c=TtNqgsxc9M_Y8xVNnxFamEKQzcUL4LZrsuziJeOXSI8="
                    alt="image"
                    w="100%"
                    h="400px"
                    objectFit="cover"
                    borderRadius="xl"
                  />
                  <HStack
                    py='20px'
                    gap="20px"
                  >
                    <Rating 
                      size="15px"
                      value={3.5}
                    />

                    <Text
                      fontSize="15px"
                    >
                      <Text px="10px" as="span" fontWeight="bold" >
                          4
                      </Text>
                      <Text
                        color="gray.400"
                        as="span"
                      >
                        (200)
                      </Text>

                    </Text>

                    <Badge p="5px"  px="10px" gap="10px" display="flex" alignItems="center" color="gray"  textTransform={"capitalize"} borderRadius="md" 
                      >
                      <Icon 
                        as={BsBarChartFill}
                      />
                      
                      intermidaire
                    </Badge>

                  </HStack>

                  <Heading
                    fontSize="2xl"
                  >
                    {course?.title}

                  </Heading>

                  <Text
                    color="gray.400"
                    fontSize="sm"
                    py="10px"
                  >

                      {course?.description ?? ""}
                  </Text>

                  <HStack
                    py="15px"
                  >
                    <Avatar 
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    />

                    <Box>
                      <Text
                        fontWeight="semibold"
                        fontSize="sm"
                      >
                        Gregory madison
                      </Text>
                      <Text
                        fontSize="xs"
                      >
                        Teacher sysetm
                      </Text>
                    </Box>

                  </HStack>


                  <Box
                    py="30px"
                  >

                    <Heading
                      fontSize="xl"
                    >
                      {`Courses's content`}
                    </Heading>


                    <Flex
                      flexDir="column"
                      rowGap="10px"
                      py="20px"
                    >
                      { course?.chapters?.map((chapter: any , key: any)=>(
                          <CourseChapterBox  chapter={chapter} key={key} />

                      )) }
                      

                    </Flex>


                  </Box>


                </Box>

              </If>


            </ScrollArea>

            

          </Box> 


        </Flex>
      </>
    )
}

export default CourseListWrapper
