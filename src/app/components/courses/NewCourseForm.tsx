"use client"
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Editable, EditableInput, EditablePreview, HStack, Input, Stack, Text } from '@chakra-ui/react'

import { z } from 'zod';
import InputField from '../form/InputField';
import Form from '../form/Form';
import { useCreateCourse } from '@/app/api/course/createCourse';


 
const schemaEvent = z.object({
    title: z.any()
});

type IEventForm  = {
    title: string,
}

const NewCourseForm = ({ createCourse }: any) => {
    const handleCreateCourse  = (courseData: any) =>{
        createCourse(courseData)
       
    }


    return (
        <>
            <Form<
                IEventForm ,
                typeof schemaEvent 
            >
                schema={schemaEvent}
                onSubmit={handleCreateCourse}
            >
                {
                    ({register , formState, setValue, watch})=>(
                        <Stack
                            spacing="16px"
                            px="20px"
                            pb="30px"
                        >
                            <InputField 
                                registration={register('title')}
                                error={formState.errors['title']}     
                                label={""}
                                placeholder="courseTitle"
                                variant="primary"
                                // style={{

                                // }}
                            />

                            <Button variant="primaryFill"  type="submit" >
                                Confirm

                            </Button>
                            


                            
                            



                        </Stack>
                    )
                }



            </Form>

            
            
                
        </>
    )
}


export default NewCourseForm