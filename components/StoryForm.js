import React from 'react'
import { useState } from 'react'
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
    Checkbox, useDisclosure

} from '@chakra-ui/react';
import Guidlines from "@/components/Guidlines";


export default function StoryForm() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 15,
            min: 1,
            max: 99,
        })
    const [isChecked, setIsChecked] = useState(false);

    const { isOpen, onToggle } = useDisclosure()
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
    return (
        <>
            <Flex
                w={'full'}
                align={'center'}
                justify={'center'}
            
            >

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
                        Share your Story
                    </Heading>
                    <Text textAlign='center'
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color='gray.800'>
                        Shhh! Its Anonymous 🤫
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


                    <Guidlines />
                    <Checkbox
                        isChecked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    >
                      &quot;I have read all the guidlines before sharing&quot;
                    </Checkbox>
                    <Button isDisabled={!isChecked}  colorScheme='whatsapp'>Share</Button>
                </Stack>

            </Flex>

        </>
    );
}