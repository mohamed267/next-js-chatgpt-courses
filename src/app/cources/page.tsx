import React from 'react'

import CourseListWrapper from "../components/courses/CourseListWrapper"

import dynamic from 'next/dynamic'

const ScrollArea = dynamic(
  () => import('react-scrollbar'),
  { ssr: false }
)

async function getData() {
  const res =  await  fetch(`${process.env.BASE_URL}courses` , { cache: "no-store" })
  // const res = await fetch(')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  return res.json()
}



const Page = async () => {
  const courses = await getData()

  // console.log("data => ", data)


  // const tabSelectedColor = useColorModeValue("gray.900", "gray.800")

  return (
   <>
    <CourseListWrapper 
      courses={courses}
    />
   </>
  )
}

Page.propTypes = {}

export default Page