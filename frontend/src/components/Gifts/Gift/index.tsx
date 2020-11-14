import React from "react";
import { createDataTestId } from "../../../lib/create-data-testid";
import { Flex, Stack, Text, Button, Image, VStack, Heading } from "@chakra-ui/core";
import { BigNumber } from "ethers";

/*
  string name;
  address minter;
  address recipient;
  address token;
  uint256 amount;
  string imageURL;
  bool redeemed;
  uint256 createdAt;
  uint256 lockedDuration;
*/
export type GiftModel = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: BigNumber;
  5: string;
  6: boolean;
  7: BigNumber;
  8: BigNumber;
};

const giftName = "#013A6D";
const giftMessageColour = "#809EBD";
const giftAmountColour = giftMessageColour;

export const componentDataTestId = createDataTestId("Gift");

export const dataTestIds = {};

const Gift: React.FunctionComponent<GiftModel & { message?: string }> = (props) => (
  <VStack spacing={0} width="220px" boxShadow="0px 0px 24px rgba(27, 39, 70, 0.1)" cursor="pointer">
    <Image width="220px" height="220px" src={props["5"]} borderRadius="16px"></Image>
    <VStack p={2} width="100%" spacing={1} alignItems="flex-start">
      <Heading as="h4" fontFamily="Roboto" fontSize="18px" fontWeight="700" color={giftName}>
        {props["0"]}
      </Heading>
      {props["4"] && (
        <Text fontFamily="Roboto" fontSize="16px" fontWeight="bold" color={giftAmountColour}>
          {`${props["4"].toString()} ETH`}
        </Text>
      )}
      {props.message && (
        <Text fontFamily="Roboto" fontSize="14px" fontWeight="400" color={giftMessageColour}>
          {props.message}
        </Text>
      )}
    </VStack>
  </VStack>
);

export { Gift };