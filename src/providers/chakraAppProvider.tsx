
"use client"

import { ChakraProvider } from '@chakra-ui/react'

import { PropsWithChildren } from 'react'
//  1 - importing the theme from our custom theme by defaylt is base theme 
import { baseTheme as theme } from '@/lib'

// Pass the `theme` prop to the `ChakraProvider`
function CkakraAppProvider({ children}: PropsWithChildren) {
  return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
  )
}

export default CkakraAppProvider