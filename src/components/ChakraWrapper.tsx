"use client"

import { ChakraProvider } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}


function ChakraWrapper({ children }: Props) {
    return <div><ChakraProvider>{children}</ChakraProvider></div>;
}

export default ChakraWrapper;