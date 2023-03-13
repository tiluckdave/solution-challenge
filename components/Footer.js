import {
    Box,
    Container,
    Stack,
    Text,
} from '@chakra-ui/react';

export default function SmallWithNavigation() {
    return (
        <Box borderTop={1}
            borderStyle={'solid'}
            borderColor='gray.200'
            bg='white'
            color='gray.700'>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction='row'
                spacing={4}
                justify='center'
                align='center'>

                <Text>© 2023 SpeckOut. Privacy ensured!</Text>
            </Container>
        </Box>
    );
}