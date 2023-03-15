import React from 'react'
import {Button, useDisclosure, UnorderedList, ListItem } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
const Guidlines = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>

            <Button onClick={onOpen}>How to share</Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>This platform if for you only, feel free to express your suffering.
                        Just make sure you follow the basic guidlines </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        
                        <UnorderedList>
                            <ListItem p='5px'>Entering your age is required</ListItem>
                            <ListItem p='5px'>Focus on specific actions or behaviors that have affected you.</ListItem>
                            <ListItem p='5px'>Use clear and concise language to describe the situation.</ListItem>
                            <ListItem p='5px'>Stick to the facts and avoid exaggeration or hyperbole.</ListItem>
                            {/* <ListItem p='5px'>You are free to use hate-speech which w</ListItem> */}
                            <ListItem p='5px'>Use "I" statements to express how you feel and make sure you don't mention the name of any person, use specific pronouns instead.</ListItem>
                        </UnorderedList>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}  onClick={onClose}>Ok</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}
export default Guidlines
