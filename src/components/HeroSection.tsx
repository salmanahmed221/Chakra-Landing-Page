"use client"
import {
    Box, Heading, Flex, Button, Text, Image
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

function HeroSection() {
    return <Box >
        {/* Left Side */}
        <Flex mt={{ base: "50px", md: "100px" }} display={{ md: "flex", lg: "flex" }}>
            <Box px={{ base: "30px", md: "0px" }} flexBasis="50%" ml={{ md: "110px" }} textAlign={{ base: "center", md: "left" }} mt={{ base: "0px", md: "40px" }}>
                <Heading color="green" pr={{ md: "50px" }}>Build this rad landing page from scratch</Heading>
                <Text color="green" pr={{ md: "250px", base: "0px" }} mt="20px" >This is Subheader section where you describe the basic benefits of your product</Text>
                <Button mt="20px" title="click to visit" backgroundColor="green" color="white" rightIcon={<ChevronRightIcon />}>Create your account now</Button>
            </Box>
            {/* Right side */}
            <Box flexBasis="50%" mt={{ base: "50px", md: "0px" }} mx={{ base: "10px", md: "0px" }}>
                <Image src="/plant.jpg" alt="plant" width={500} height={350} borderRadius="30px" />
            </Box>
        </Flex>
    </Box >;
}

export default HeroSection;
