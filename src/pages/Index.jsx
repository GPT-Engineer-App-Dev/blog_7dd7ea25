import { Box, Container, Heading, Text, VStack, HStack, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaBook, FaUserAlt, FaArchive } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md">
      {/* Title */}
      <Heading as="h1" fontFamily="serif" mt={8} mb={4} textAlign="center">
        My Personal Blog
      </Heading>

      {/* Navigation */}
      <Flex as="nav" justifyContent="center" mb={8}>
        <HStack as="ul" listStyleType="none" spacing={8}>
          <Box as="li">
            <Link href="#" display="flex" alignItems="center">
              <FaBook />
              <Text ml={2}>Articles</Text>
            </Link>
          </Box>
          <Box as="li">
            <Link href="#" display="flex" alignItems="center">
              <FaUserAlt />
              <Text ml={2}>About</Text>
            </Link>
          </Box>
          <Box as="li">
            <Link href="#" display="flex" alignItems="center">
              <FaArchive />
              <Text ml={2}>Archive</Text>
            </Link>
          </Box>
        </HStack>
      </Flex>

      {/* Post Preview */}
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="md" fontFamily="serif">
            The Joys of Nature Photography
          </Heading>
          <Text mt={2} fontFamily="serif" noOfLines={[1, 2, 3]}>
            Discover the beauty and challenges involved in capturing the perfect moment in the wild. This article explores the essentials of nature photography, from the right gear to the patience required.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
