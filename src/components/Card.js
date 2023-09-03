import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='white'>
      <Image src={imageSrc} borderRadius='lg' />
      <Box p='6'>
        <VStack spacing={6} alignItems='baseline'>
          <Heading fontSize='20' color='black'>
            {title}
          </Heading>
          <Heading fontWeight='600' fontSize='13' color='gray'>
            {description}
          </Heading>
          <Heading fontSize='13' color='black'>
            <HStack>
              <Text  fontWeight='500'>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Heading>
        </VStack>
      </Box>
    </Box>
  )
};

export default Card;
