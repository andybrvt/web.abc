import React, { useState, useEffect } from "react";
import { Input, Form, List, Avatar, Typography } from "antd";
import { useColorModeValue, Stack, Button } from "@chakra-ui/react";
import * as dateFns from "date-fns";
import { Header } from "../Header";

export const SmartContractDash = (props) => {
  const navContract = () => {
    props.history.push("/contract");
  };
  const navHome = () => {
    props.history.push("/home");
  };
  return (
    <div>
      <div class="collectionList">
        <div class="collectionTopContainer">
          <div class="collectionTitle">My Contracts</div>
        </div>
        <div style={{ marginTop: 50, display: "flex", flexDirection: "row" }}>
          <Stack
            onClick={navContract}
            boxShadow={"lg"}
            p={5}
            rounded={"xl"}
            style={{ width: 300, height: 300 }}
            bg={useColorModeValue("white", "gray.900")}
          >
            <div>NFT Smart contract </div>
            <div>Woodies NFT</div>
            <div>0x2DaA35962A6D43EB54C48367b33d0B3...</div>
            <div>Rinkeby Network</div>
          </Stack>

          <Stack
            onClick={navContract}
            boxShadow={"lg"}
            p={5}
            rounded={"xl"}
            style={{ width: 300, height: 300 }}
            bg={useColorModeValue("white", "gray.900")}
          >
            <div>NFT Smart contract </div>
            <div>Woodies NFT</div>
            <div>0x2DaA35962A6D43EB54C48367b33d0B3...</div>
            <div>Rinkeby Network</div>
          </Stack>

          <Stack
            onClick={navContract}
            boxShadow={"lg"}
            p={5}
            rounded={"xl"}
            style={{ width: 300, height: 300 }}
            bg={useColorModeValue("white", "gray.900")}
          >
            <div>NFT Smart contract </div>
            <div>Woodies NFT</div>
            <div>0x2DaA35962A6D43EB54C48367b33d0B3...</div>
            <div>Rinkeby Network</div>
          </Stack>
        </div>
      </div>
      <Header />
      <Button onClick={navHome}>Back to Home</Button>
    </div>
  );
};
