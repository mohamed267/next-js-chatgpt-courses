"use client"

import React, {ReactText} from 'react'
import { IconType } from 'react-icons';


import { Box, Flex,Icon,  FlexProps, Image, useColorModeValue, LinkBox } from "@chakra-ui/react"

import Link from 'next/link';
// icons
import { AiOutlineLogout } from "react-icons/ai"
import {FiHome ,  FiTrendingUp, FiCompass, FiSettings, FiStar } from "react-icons/fi"
import { BsBook } from "react-icons/bs"


import Logo from "/logo.svg";
import { NewLineKind } from 'typescript';


interface LinkItemProps {
  name: string;
  icon: IconType;
  href?: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Cources', icon: BsBook , href: "/cources" },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

const SideBarContent = () => {

  const borderRightSidebarColor= useColorModeValue('gray.200', 'gray.700')
  const bgSidebarColor= useColorModeValue('white', 'gray.900')

  return (
    <Flex
      bg={bgSidebarColor}
      // borderRightColor={borderRightSidebarColor}
      // borderRightWidth="1px"
      w="100px"
      pos="fixed"
      h="full"
      flexDirection="column"
      alignItems="center"

    >
     
      <Flex
        justifyContent="center"
        py="20px"
      >
        <Link href="/" >
          <Image alt="logo" h="30px" src="/logo.svg" />
        </Link>
      </Flex>

      <Box
        my="20px"
      >
        {
          LinkItems.map((link: LinkItemProps , key: number) =>(
            <NavItem  key={key} icon={link.icon} href={link.href} >

            </NavItem>
          ))
        }
      </Box>

      <LogoutItem />
  
    </Flex>

  )
}


interface NavItemProps extends FlexProps {
    icon: IconType;
    children: any;
    href?: string;
}



const NavItem = ({icon , children , href = "#" ,  ...rest} : NavItemProps)=>{
  return (
    
    <LinkBox>
      <Link
        href={href}

      >
        <Flex
          {...rest}
          alignItems="center"
          justifyContent="center"
          p="4"
          cursor="pointer"
        >
          {
            icon && 
            <Icon 
              as={icon}
            />
          }
          {children}
        </Flex>

      </Link>
    </LinkBox>
   
  )
}


const LogoutItem = ()=>{
  return(
      <Flex
        mt="auto"
        justifyContent="center"
        py="20px"
        cursor="pointer"
      >
        <Icon 
          as={AiOutlineLogout}
          justifySelf="end"
          color="red"
          fontSize="xl"
        />
      </Flex>
      
  )
}


export default SideBarContent