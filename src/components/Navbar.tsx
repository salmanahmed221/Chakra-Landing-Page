"use client";
import {
  Box,
  Text,
  HStack,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Link from "next/link";

export default function Navbar() {
  return (
    <Box>
      {/* Logo Section */}

      <Flex justify="space-around">
        <Box mt="30px">
          <Text color="green" fontWeight="bold">
            Logo
          </Text>
        </Box>

        {/* Links or Button Section */}

        <Box mt="30px" display={{ base: "none", lg: "flex" }}>
          <HStack spacing="25px" color="green">
            <Link href={""}>Home</Link>
            <Link href={""}>How It works</Link>
            <Link href={""}>Features</Link>
            <Link href={""}>Pricing</Link>
            <Button color="white" bg="green" px="40px">
              Create Account
            </Button>
          </HStack>
        </Box>

        {/* Hamburger Icon */}
        <Box
          mt="25px"
          ml={{ lg: "0", base: "300px" }}
          display={{ lg: "none", base: "flex" }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link href={""}>Home</Link>
              </MenuItem>
              <MenuItem>
                <Link href={""}>How It works</Link>
              </MenuItem>
              <MenuItem>
                <Link href={""}>Features</Link>
              </MenuItem>
              <MenuItem>
                <Link href={""}>Pricing</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}
