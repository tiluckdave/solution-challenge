import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import {
    Text,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

const Guideline = () => {
    return (
        <Container maxW='2xl' padding='50px' centerContent  >

            
            <Box padding='10' bg='blue.100' color='black'  height='500px' width='400px' >
                <Text>This portal is for you so be comfortable to share anything you want. Just make sure you follow this guidelines.</Text>
                <UnorderedList padding='5'>
                    <ListItem>Try to cover your story up to the point.</ListItem>
                    <ListItem> As this task is totally anonymous, please do not share your name, phone number, email or social profiles</ListItem>
                    <ListItem>While writing the story try not to mention the name of any person, you are free to share his/her relation with you</ListItem>
                    <ListItem>Try to not exaggerate any topic, share it in original form. You are allowed for hate speech, which will help us to understand the intensity of situation</ListItem>
                </UnorderedList>
            </Box>
        </Container>
    )
}
export default Guideline

/*
This portal is for you so do not hesitate to share anything you want. Just make sure you follow this guidelines.
1. Try to cover your story up to the point.
2. As this task is totally anonymous, please do not share your name, phone number, email or social profiles
3. While writing the story try not to mention the name of any person, you are free to share his/her relation with you
4.Try to not exaggerate any topic, share it in original form. You are allowed for hate speech, which will help us to understand the intensity of situation
*/