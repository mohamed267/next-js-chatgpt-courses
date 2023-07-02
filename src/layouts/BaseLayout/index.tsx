"use client"

import React from 'react'
import  {PropsWithChildren} from "react"


import { Box, useColorModeValue, useDisclosure, Flex } from "@chakra-ui/react"

// importing layout sub component
import SideBarContent from './SideBarContent'

const BaseLayout = ({children}: PropsWithChildren) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const contentBg = useColorModeValue("card.light" , "card.dark")

    return (

        <body suppressHydrationWarning={true}  >

            <Box
                
            >
                
                <SideBarContent />
                <Box
                    ml="100px"
                    minW={"calc(100vw - 120px)"}
                    maxH="calc(100vh)"
                    // maxH={"calc(100vh - 40px)"}
                    boxSize="border-box"
                    p="10px"
                    h="100vh"
                    
                >
                    <Box
                        w="100%"
                        h='100%'
                        bg={contentBg}
                        borderRadius="30px"
                        overflow="hidden"
                        // bg="green"
                        border="1px"
                        borderColor="gray.100"
                        boxShadow="md"
                    >
                        {children}

                    </Box>

                </Box>
            </Box>

        </body>
    )
}

export default BaseLayout