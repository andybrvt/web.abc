import React, { useState, useEffect } from "react";
import { Input, Form, List, Avatar, Typography } from "antd";
import { useColorModeValue, Stack, Button } from "@chakra-ui/react";
import * as dateFns from "date-fns";
import Lottie from "react-lottie";
import animationData from "../bankingAnimation.json";
import "./NewLanding.css";
export const NewLanding = (props) => {
  return (
    <div>
      <div style={{ fontFamily: "Sofia" }}>test test test test</div>;
      <div class="">
        <div class="splitScreenContainer2 ">
          <div class="splitLeft2">
            <div class="splitLeft3">
              <div className="SofiaTitle">
                The start of your blockchain journey
              </div>
              <div className="SofiaDescription">
                The start of your blockchain journey The start of your
                blockchain journey The start of your blockchain journey
              </div>
            </div>
          </div>

          <div class="splitRight2">
            <div class="splitRight3">
              <Lottie
                style={{ width: 600, height: 600 }}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
