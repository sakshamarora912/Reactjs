import { Button, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Adjust font size based on screen size
  const fontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <HStack
      as="nav"
      p={4}
      shadow="md"
      bgColor="blackAlpha.900"
      spacing={6}
      justify="center"
      align="center"
    >
      <Button
        variant="link"
        color="white"
        fontSize={fontSize}
        _hover={{ textDecoration: "underline", color: "gray.300" }}
        _active={{ color: "gray.400" }}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant="link"
        color="white"
        fontSize={fontSize}
        _hover={{ textDecoration: "underline", color: "gray.300" }}
        _active={{ color: "gray.400" }}
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant="link"
        color="white"
        fontSize={fontSize}
        _hover={{ textDecoration: "underline", color: "gray.300" }}
        _active={{ color: "gray.400" }}
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
