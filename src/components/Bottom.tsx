"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Bottom() {
  return (
    <Center>
      <Box my="100px" mx={{ lg: "150px", base: "15px" }}>
        {/* Left part */}

        <Flex gap="20px" display={{ base: "grid", lg: "flex" }}>
          <Box flexBasis="50%">
            <Heading color="green" textAlign="left">
              Build this rad landing page <br /> from scratch
            </Heading>
            <Text color="green" textAlign="left" mt="20px" pr="140px">
              This is Subheader section where you describe the basic benefits of
              your product
            </Text>
            <Button
              mt="20px"
              bg="green"
              color="white"
              rightIcon={<ChevronRightIcon />}
            >
              Create your account now
            </Button>
          </Box>

          {/* Right part */}
          <Box flexBasis="50%">
            <Image
              borderRadius="15px"
              src="/plant.jpg"
              alt="pic"
              width={480}
              height={300}
              boxShadow="dark-lg"
            />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
