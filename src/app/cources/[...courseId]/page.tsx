import React from 'react'

import CourseListWrapper from "../../components/courses/CourseListWrapper"

import dynamic from 'next/dynamic'

const ScrollArea = dynamic(
  () => import('react-scrollbar'),
  { ssr: false }
)

async function getCourses() {
  const res =  await  fetch(`${process.env.BASE_URL}courses` , { cache: "no-store" })
  return res.json()
}





const Page = async () => {
  const courses = await getCourses()


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