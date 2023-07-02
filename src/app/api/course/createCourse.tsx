"use client"

import { axios } from "@/lib/axios"
import { useMutation } from "react-query"
import { useNotification } from "@/stores/notification"


type AuthResponse = any



export type LoginCredentialdsDTO = {
    phoneNumber: string , 
    password: string
}





export const useCreateCourse= ()=>{
    const {addNotification} = useNotification()


    
    return useMutation({
        onMutate: async () => {
            
            // const reparationReq = new FormRequestBuilder(newReparation).getFormData()

            // // const reparation = await createReparation(reparationReq);

            // const reparation = await queryClient.setQueryData()


            // return reparation

            


        
        },
        // onError: (_, __, context: any) => {
        // if (context?.previousComments) {
        //     queryClient.setQueryData(
        //     ["comments", discussionId],
        //     context.previousComments
        //     );
        // }
        // },
        onSuccess: () => {

        } , 
        mutationFn : createCourse
    });
}




export const createCourse  =async (data :any ):Promise<any>  =>{
    let course ={} ;
    try{
        course = await   axios.post(
            `/courses`, 
            data
        )

        return course


        
    }catch(e:any){
        console.log("erroe is ", e)

    }

    return course
    
}




