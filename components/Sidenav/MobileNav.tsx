/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useContext, useState } from "react";
import { CgLogOut } from "react-icons/cg";
import {
  MdOutlineSpaceDashboard,
  MdOutlineInventory2,
  MdBookmarkAdd,
} from "react-icons/md";
import { BsDisplayFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SideNavItem from "./SideNavItem";
import Router from "next/router";
import { BiSearchAlt } from "react-icons/bi";
import { DataValueContext } from "../../context/authContext";

type mobileProps = {
  onOpen?: any;
  isOpen?: any;
  onClose?: any;
};
function MobileNav(props: mobileProps) {
  const close = () => {
    props.onClose();
  };
  const { state, dispatch } = useContext(DataValueContext);
  const logOut = () => {
    dispatch({ type: "LOGOUT", payload: "" });
    Router.push("/login");
  };
  const boxShadow = "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px";
  const boxShadow1 = " rgba(0, 0, 0, 0.18) 0px 2px 4px";

  return (
    <>
      <Drawer isOpen={props.isOpen} placement="right" onClose={close}>
        <DrawerOverlay display={{ base: "block", sm: "none" }} />
        <DrawerContent display={{ base: "block", sm: "none" }}>
          <DrawerCloseButton />

          <DrawerBody pt='80px' >
            
          <Container maxW='md' p={0} m={0} fontFamily="Open Sans, sans-serif">
            <Flex my='100px' flexDir="column" w="100%" alignItems="flex-start" as="nav">
              <Menu placement="right">
                <SideNavItem
                  title="Dashboard"
                  icon={MdOutlineSpaceDashboard}
                  sideNavSize="large"
                  href="/"
                  exact
                />
                <SideNavItem
                  title="Products"
                  icon={MdOutlineInventory2}
                  sideNavSize="large"
                  href="/products"
                />
               
               
                <Divider my="60px" />
                <Button
                  margin="0 auto"
                  backgroundColor="white.100"
                  boxShadow={boxShadow}
                  onClick={() => {
                    //  logOut()
                    Router.push("/products/new");
                  }}
                >
                  <Flex alignItems="center">
                    <MdBookmarkAdd size="20px" />
                    Add Product
                  </Flex>
                </Button>
              </Menu>
            </Flex>
            <Flex
          
              p="5%"
              flexDir="column"
              w="100%"
              alignItems="flex-start"
              position="absolute"
              bottom="40px"
              left="0"
              mb={4}
            >
              <Divider />
              <Flex mt={4} width="100%">
                <Button
                  margin="0 auto"
                  backgroundColor="white.100"
                  boxShadow={boxShadow}
                  onClick={logOut}
                >
                  <Flex alignItems="center">
                    <CgLogOut size="30px" /> LogOut
                  </Flex>
                </Button>
              </Flex>
            </Flex>
          </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;
