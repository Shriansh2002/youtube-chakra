import { Box } from '@chakra-ui/react';
import React from 'react';
import MainLeft from '../Components/main/MainLeft';
import MainRight from '../Components/main/MainRight';

const Homepage = () => {
    return (
        <Box px={10} w='100%' display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
            <Box w='70%'>
                <MainLeft />
            </Box>
            <Box>
                <MainRight />
            </Box>
        </Box >);
};

export default Homepage;