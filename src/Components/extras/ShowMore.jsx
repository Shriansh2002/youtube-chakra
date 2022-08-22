import { Box, Icon, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const ShowMore = () => {
    return (
        <Box display={'flex'} alignItems={'center'} py={2}>
            <Icon as={BsChevronDown} opacity='0.5' />
            <Text py='2' pl='8' textTransform={'uppercase'} color='gray.400' fontSize={'sm'}>
                Show More
            </Text>
        </Box>
    );
};

export default ShowMore;