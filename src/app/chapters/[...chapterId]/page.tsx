import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/navigation'
import ChapterContent from '@/app/components/chapters/ChapterContent'


async  function getChapter(chapterId: string){
  
  const res =  await  fetch(`${process.env.BASE_URL}chapters/${chapterId}` )


  return res.json()

}

const ChapterDetails = async ({params}: any) => {
  const chapter =  await  getChapter(params?.chapterId)

  return (
    <>
      <ChapterContent chapter={chapter} />
    </>
  )
}


export default ChapterDetails