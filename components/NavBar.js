import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box borderBottom={1}
      borderStyle={'solid'}
      borderColor='gray.200'>
      <Flex
        bg='white'
        minH='60px'
        mx={'auto'}
        width='5xl'
        align={'center'}>
        <Link href='/'>
          <Heading
            size='lg'
            color='black'>
            SpeakOut
          </Heading>
        </Link>
        <Spacer />
        <Link href='/about'>About</Link>
      </Flex>
    </Box>
  );
}
