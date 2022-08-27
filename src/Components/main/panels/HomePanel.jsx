import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const FeaturedCard = () => {
    return (
        <Box>
            <Text fontWeight={'semibold'} textTransform={'uppercase'}>Featured Video ▶️</Text>

            <Box display={'flex'} gap={5} mt='4'>
                <Box>
                    <Image
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                        width={160 * 4.4}
                        height={90 * 1.5}
                    />
                </Box>

                <Box display={'flex'} flexDir={'column'} gap={2}>
                    <Text fontWeight={'bold'}>
                        WWDC 2022 - June 6 | Apple
                    </Text>
                    <Box display={'flex'} gap={3}>
                        <Text _hover={{ opacity: 1 }} opacity={0.5}>Apple</Text>
                        <Text opacity={0.5}>1.2M Views</Text>
                        <Text opacity={0.5}>5 Days Ago</Text>
                    </Box>
                    <Box>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magnam ratione dolores aliquam labore delectus eum non sequi,
                        incidunt hic eaque animi beatae quod nisi laborum libero veritatis illum.
                        Soluta possimus aliquam maxime numquam!
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};


const HomePanel = ({ data }) => {
    let featured = true; //todo: to get this from the data

    return (
        <Box>
            {featured && <FeaturedCard />}


        </Box>
    );
};

export default HomePanel;;