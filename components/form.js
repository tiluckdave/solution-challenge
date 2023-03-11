import React from 'react'
import { Textarea, Text, Stack, Heading, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'


function Form() {

    let [value, setValue] = React.useState('')


    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }

    return (
        <>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'> Speak-Out</Heading>
                </CardHeader>
                <CardBody>

                    <Age />
                    <Stack>
                        <Text mb='8px'>Free your mind, share what you can't speak to anyone: </Text>
                        <Textarea
                            value={value}
                            onChange={handleInputChange}
                            placeholder='Type here...'
                            size='sm' />

                    </Stack>

                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue' className='share' onClick={handleSubmit}>Share</Button>
                </CardFooter>
            </Card>

        </>
    )
}

const Age = () => {
    const [numberValue, setNumberValue] = React.useState(0);

    const handleNumberChange = (valueAsNumber) => {
        setNumberValue(valueAsNumber);
        console.log(valueAsNumber); // Logs the number value to the console
    };
    return (
        <>
            <Stack>
                <Text mb='8px'>Enter your age</Text>
                <Stack shouldWrapChildren direction='row'>
                    <NumberInput size='md' value={numberValue} onChange={handleNumberChange} >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
                {/* <Button colorScheme='blue' className='share' onClick={handleSubmit}>Share</Button> */}
            </Stack>

        </>
    )
}




export default Form