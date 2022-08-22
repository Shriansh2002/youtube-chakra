import { Box } from '@chakra-ui/react';
import React from 'react';
import MainLeft from './MainLeft';


const Main = () => {
    return (
        <Box px={10} w='100%' display={'flex'} flexDir={'row'} justifyContent={'space-between'}>

            <MainLeft />


            <Box>asd</Box>
        </Box >
    );
};

export default Main;;;