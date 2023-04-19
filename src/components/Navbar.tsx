"use client"
import {
    Box, Heading, Flex, Button, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from "next/link";
function Navbar() {
    return <Box py="10px">
        <Flex justify={{ base: "space-between", md: "space-around" }} px={{ base: "25px", md: "0px" }}>
            {/* Logo */}
            <Box>
                <Heading color="green">Logo</Heading>
            </Box>
            {/* Links */}
            <Flex align="center" gap="40px" color="green" display={{ base: "none", md: "flex", lg: "flex" }}>
                <Link href="" title="click to visit">Home</Link>
                <Link href="" title="click to visit">How It works</Link>
                <Link href="" title="click to visit">Features</Link>
                <Link href="" title="click to visit">Pricing</Link>
            </Flex>
            {/* Button */}
            <Flex align="center">
                <Box display={{ base: "none", md: "flex" }}>
                    <Button backgroundColor="green" color="white" title="click to visit">Create Account</Button>
                </Box>
            </Flex>
            {/* Hamburger Menu */}
            <Box display={{ base: "flex", md: "none", lg: "none" }}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem >
                            <Link href="">Home</Link>
                        </MenuItem>
                        <MenuItem >
                            <Link href="">How It works</Link>
                        </MenuItem>
                        <MenuItem >
                            <Link href="">Features</Link>
                        </MenuItem>
                        <MenuItem >
                            <Link href="">Pricing</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    </Box >;
}

export default Navbar;
