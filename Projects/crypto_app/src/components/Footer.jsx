import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/ME_PHOTO.png";

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, gray.700, gray.900)"
      color="gray.100"
      minH="60"
      px={{ base: "8", md: "16" }}
      py={{ base: "12", md: "16" }}
      borderTop="1px"
      borderColor="gray.600"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "8", md: "12" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack
          spacing={{ base: "6", md: "8" }}
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl" }}
            color="teal.400"
          >
            About Us
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.6"
            maxW={{ base: "full", md: "2xl" }}
            color="gray.300"
          >
            We are a leading prototype of a crypto live trading app in India, designed to provide expert guidance and insights at competitive rates. Enhance your trading experience with our innovative and professional services. </Text>
        </VStack>
        <VStack spacing={3} alignItems="center">
          <Avatar
            boxSize="36"
            src={avatarSrc}
            borderWidth="3px"
            borderColor="teal.500"
            shadow="lg"
          />
          <Text
            fontWeight="medium"
            fontSize="lg"
            color="teal.300"
          >
            @soloMaker
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
