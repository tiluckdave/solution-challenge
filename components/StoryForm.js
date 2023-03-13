import React from 'react'
import {
    Button,
    FormControl,
    Flex,
    Heading,
    FormLabel,
    HStack,
    Textarea,
    Input,
    Stack,
    Text,
    useNumberInput,

} from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react'
import Guideline from './Guideline';

export default function StoryForm() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 15,
            min: 1,
            max: 99,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <Flex
            w={'full'}
            align={'center'}
            justify={'center'}
            padding="80px"

        >

            <Stack >
                <Guideline />
            </Stack>
            <Stack

                spacing={4}
                w={'full'}
                maxW={'lg'}
                bg='white'
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} textAlign='center' fontSize={{ base: '2xl', md: '3xl' }}>
                    Calm down and Share your Story
                </Heading>
                <Text textAlign='center'
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color='gray.800'>
                    Relax, Its Anonymous 🤫
                </Text>
                <FormControl id="age" my={8}>
                    <FormLabel>Enter your Age</FormLabel>
                    <HStack w='full'>
                        <Button {...dec}>-</Button>
                        <Input {...input} />
                        <Button {...inc}>+</Button>
                    </HStack>
                </FormControl>
                <FormControl id="story" my={8}>
                    <FormLabel>Free your mind, share what you can&apos;t speak to anyone</FormLabel>
                    <Textarea rows={10}
                        placeholder='Type here...' />
                </FormControl>

                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Share
                    </Button>
                </Stack>
            </Stack>


        </Flex>
    );
}