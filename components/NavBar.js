import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link
} from '@chakra-ui/react';

export default function Navbar({ children }) {
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
        {children}
        <Spacer />
        <Link href='/about'>About</Link>
      </Flex>
    </Box>
  );
}
