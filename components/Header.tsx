import React from "react";
import { Box, Flex, Text, Stack, Spacer, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer {...props}>
      <NextLink href='/'>
        <Link
          as='h1'
          color='white'
        >🌈 Next-Strapi
        </Link>
      </NextLink>
      <MenuLinks isOpen={isOpen} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    </HeaderContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
        color='white'
        ml={4}
        align="center"
        justify={["center"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        
        <NextLink href="/">
          <Link>
            <>Home</>
          </Link>
        </NextLink>
        <NextLink href="/about">
          <Link>
            <>About</>
          </Link>
        </NextLink>
        <Spacer />
        <Text>Dark Mode <DarkModeSwitch /></Text>
      </Stack>
    </Box>
  );
};

const HeaderContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="start"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="blue.700"
      position='fixed'
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Header;