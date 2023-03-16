import React from 'react'
import { useState, useRef, useCallback } from "react";
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
import { useToast } from '@chakra-ui/react'
import Guidlines from "@/components/Guidlines";
import { addStory } from '@/lib/firestore';

export default function StoryForm() {
    const age = useRef();
    const story = useRef();

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
    const [ isChecked, setIsChecked ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const toast = useToast()

    const formHandler = useCallback(
        () => async (event) => {
            setLoading(true);
            event.preventDefault();
            const data = {
                age: age.current?.value,
                story: story.current?.value,
                location: localStorage.getItem("address"),
            };

            let { result, error } = await addStory(data);
            if (error) {
                console.log(error);
            } else {
                toast({
                    title: 'Success!',
                    description: "Thank You for sharing your story. Your this step will help someone to get out of such situations easily in future.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
            setIsChecked(false);
            story.current.value = '';
            setLoading(false);
        },
        []
    );

    return (
        <>
            <Flex
                w={'full'}
                align={'center'}
                justify={'center'}

            >
                <Stack
                    as={'form'}
                    onSubmit={formHandler()}
                    spacing={4}
                    w={'full'}
                    maxW={'lg'}
                    bg='white'
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} textAlign='center' fontSize={{ base: '2xl', md: '3xl' }}>
                        You are a free bird here!! <br></br>Share your Story
                    </Heading>
                    <Text textAlign='center'
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color='gray.800'>
                        Calm down, Its anonymous
                    </Text>
                    <FormControl id="age" my={8}>
                        <FormLabel>Enter your Age</FormLabel>
                        <HStack w='full'>
                            <Button {...dec}>-</Button>
                            <Input {...input} ref={age} />
                            <Button {...inc}>+</Button>
                        </HStack>
                    </FormControl>
                    <FormControl id="story" my={8}>
                        <FormLabel>Free your mind, share what you can&apos;t speak to anyone</FormLabel>
                        <Textarea rows={10} ref={story}
                            placeholder='Type here...' />
                    </FormControl>

                    <Guidlines isChecked={isChecked} setIsChecked={setIsChecked} />
                    <Button isDisabled={!isChecked} colorScheme='whatsapp' type='submit' isLoading={loading}>Share</Button>
                </Stack>
            </Flex>
        </>
    );
}