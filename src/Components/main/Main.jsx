import { Box } from '@chakra-ui/react';
import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';


const Main = () => {
    return (
        <Box px={10} w='100%' display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
            <Box w='70%'>
                <MainLeft />
            </Box>
            <Box w='30%'>
                <MainRight />
            </Box>
        </Box >
    );
};

export default Main;;;