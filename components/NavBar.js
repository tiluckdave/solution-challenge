import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link, Tag, TagLabel, TagLeftIcon
} from '@chakra-ui/react';
import { MdMyLocation } from "react-icons/md";

export default function Navbar({ address }) {
  return (
    <Box borderBottom={1}
      borderStyle={'solid'}
      borderColor='gray.200'
      width='full' px={4}>
      <Flex
        bg='white'
        minH='60px'
        px={{ base: '0', md: '16' }}
        mx={'auto'}
        align={'center'}>
        <Link href='/'>
          <Heading
            size='lg'
            color='black'>
            SpeakOut
          </Heading>
        </Link>
        <Tag size='lg' colorScheme='gray' borderRadius='full' ml={6}>
          <TagLeftIcon as={MdMyLocation} />
          <TagLabel>{address}</TagLabel>
        </Tag>
        <Spacer />
        <Link href='/about'>About</Link>
      </Flex>
    </Box>
  );
}
