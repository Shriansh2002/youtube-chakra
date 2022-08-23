import { Box, Switch, Text } from '@chakra-ui/react';
import React from 'react';

const AutoPlayButton = () => {
    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            flexDir={'row'}
            gap={4}
            borderRadius="10"
            px='5' py='3'
            backgroundColor='gray.200'
        >
            <Text fontWeight={'bold'} fontSize='lg'>Autoplay</Text>
            <Box display={'flex'} alignItems={'center'}>
                <Switch colorScheme='red' size={'lg'} />
            </Box>
        </Box>
    );
};

export default AutoPlayButton;