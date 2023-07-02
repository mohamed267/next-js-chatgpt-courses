"use client"

//importing pase layouts from our custom layouts
import { BaseLayout } from '@/layouts'


import {  Flex, Box, Text } from "@chakra-ui/react"


import { StackedChart }  from "@/app/components"


export const data = [
	{
		name: 'Revenue',
		data: [ 50, 64, 48, 66, 49, 68 , 50 ]
	},
	{
		name: 'Profit',
		data: [ 30, 40, 24, 46, 20, 46, 50 ]
	},
	{
		name: 'Profit',
		data: [ 30, 40, 24, 46, 20, 46, 50 ]
	}
];


const categories:any =  ["Dim", "Lun", "Mar", "Mer", "Jeu" , "Ven", "Sam"] 


export default function Home() {
  return (
      <Flex  >

        <Box   p="20px" bg="white"  width="40%" >
          <Text
            fontSize="3xl"
          >
            Hi <Text as="span" fontWeight="semibold" > 
                Rabah

              </Text> , Good Morning
          </Text>

          <Box py="10px" >

            <Text
              fontWeight="semibold"
            >
              Productivity
            </Text>


            <Box
              h={"50vh"}
              w="100%"
            >
              <StackedChart 
                categories={categories}
                data={data}
                yaxisShow={true}

              />

            </Box>


            

          </Box>

        </Box>



      </Flex>

  )
}
