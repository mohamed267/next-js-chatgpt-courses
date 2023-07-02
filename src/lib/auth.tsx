
// import { Flex, Spinner } from "@chakra-ui/react";
// import { AuthUser, AuthResponse, verifyPhoneNumber, verifyNumberDTO, fetchUser } from "features/auth";
// import { handleUserResponse } from "features/auth/api/singIn";
// import { initReactQueryAuth  } from "react-query-auth";
// import storage from "utils/storage";






// const loadUser =  async ()=>{
//     if(storage.getToken()){
//         const data = await fetchUser();
//         return data
//     }
//     return null
// }
// const loginFn  = async(data : verifyNumberDTO )=>{
//     let response;
//     response = await verifyPhoneNumber(data)
   
//     const user =  await handleUserResponse(response)

//     return user
// }


// const registerFn =  async (data : verifyNumberDTO )=>{
//     const response =  await verifyPhoneNumber(data)

//     const user =  await handleUserResponse(response)

//     return user
// }

// const logoutFn = async  ()=>{
//     storage.clearToken()
// }



// const authConfig = {
//     loadUser ,
//     loginFn , 
//     registerFn,
//     logoutFn  ,
//     LoaderComponent(){
//         return(
//             <Flex
//                 w="100vh"
//                 h="100vh"
//             >
//                 <Spinner />

//             </Flex>
//         )
//     }
// }




// export const {AuthProvider , useAuth } = initReactQueryAuth 
// <
//     AuthUser | null , 
//     unknown ,
//     verifyNumberDTO,
//     verifyNumberDTO

// >(authConfig)

