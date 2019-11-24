/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Box } from "./primitive";
import logo from "../assets/Images/Expedia-logo.svg";
import { MdSearch, MdAccountCircle, MdFavorite } from "react-icons/md";
import theme from "../theme";

const GlobalNavigation = () => {
  return (
    <Stack
      horizontal
      split
      mid
      width="calc(100vw - 32px)"
      height="48px"
      bg="white"
      boxShadow="1"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      px="4"
    >
      <img src={logo} width="100px" height="auto" alt="expedia.com" />
      <Stack horizontal right mid maxHeight="32px">
        <Box ml="4">
          <MdSearch color={theme.colors.neutral__700} size="24px" />
        </Box>
        <Box ml="4">
          <MdFavorite color={theme.colors.neutral__700} size="24px" />
        </Box>
        <Box ml="4">
          <MdAccountCircle color={theme.colors.neutral__700} size="24px" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default GlobalNavigation;
