import React, { useState } from "react";
import { Box, Button, Divider, Flex, Heading, Image, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { FaCcVisa, FaPaypal, FaApple, FaUniversity } from "react-icons/fa";

const paymentMethods = [
  { name: "Card Payment", icon: FaCcVisa },
  { name: "PayPal", icon: FaPaypal },
  { name: "Apple Pay", icon: FaApple },
  { name: "Bank Account", icon: FaUniversity },
];

const Index = () => {
  const [selectedPayment, setSelectedPayment] = useState("Card Payment");
  const [exchangeRate] = useState(10); // Assuming 1 EUR = 10 NOK for example purposes
  const [priceEUR] = useState(50); // Price in EUR
  const priceNOK = priceEUR * exchangeRate;

  return (
    <Flex direction="column" align="center" p={8} bg="gray.800" color="white">
      <Heading mb={4}>Choose Payment Method</Heading>
      <Text fontSize="xl" mb={2}>
        Price: {priceEUR} EUR / {priceNOK} NOK
      </Text>
      <Divider my={4} />
      <RadioGroup onChange={setSelectedPayment} value={selectedPayment}>
        <Stack>
          {paymentMethods.map((method) => (
            <Radio key={method.name} value={method.name}>
              <Flex align="center" p={2}>
                <Box as={method.icon} size="24px" mr={2} />
                <Text>{method.name}</Text>
              </Flex>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button colorScheme="green" mt={6} w="full">
        Pay with {selectedPayment}
      </Button>
    </Flex>
  );
};

export default Index;
