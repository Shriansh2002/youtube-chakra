import { Box, Button, Icon, Image, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { AboutPanel, ChannelsPanel, CommunityPanel, HomePanel, PlayListPanel, VideoPanel } from '../Components/main/panels';

const Banner = () => (
    <Box>
        <Image
            src='https://en.ephoto360.com/uploads/worigin/2020/08/07/banneryoutubevalorant_62960.jpg'
            alt='Dan Abramov'
            w='100%'
            h='160px'
            objectFit={'cover'}
        />
    </Box>
);

const ChannelLogoAndInfo = () => (
    <Box mt='5' px='10' display={'flex'} justifyContent={'space-between'}>

        <Box display={'flex'} gap={4}>
            <Image
                borderRadius='full'
                boxSize='80px'
                src='https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s176-c-k-c0x00ffffff-no-rj'
                alt='Dan Abramov'
            />
            <Box display={'flex'} flexDir='column' justifyContent={'center'} >
                <Text fontWeight={'medium'} fontSize={'3xl'}>Apple</Text>
                <Text opacity={0.5}>15.9M subscribers</Text>
            </Box>
        </Box>

        <Box display={'flex'} alignItems={'center'}>
            <Button colorScheme='red' borderRadius='2px'>
                Subscribe
            </Button>
        </Box>

    </Box>
);


const listOfTabs = [
    'Home',
    'Videos',
    'Playlists',
    'Community',
    'Channels',
    'About',
];

const listOfPanels = [
    HomePanel,
    VideoPanel,
    PlayListPanel,
    CommunityPanel,
    ChannelsPanel,
    AboutPanel
];


const ChannelPage = () => {
    const { id } = useParams(); //will store the slugName of the channel
    const [showSearchBar, setShowSearchBar] = useState(false);

    console.log(id);

    return (
        <Box>
            <Banner />

            <ChannelLogoAndInfo />

            <Box mt='5' px='10' display={'flex'} justifyContent={'space-between'}>

                <Tabs defaultIndex={0} variant={'unstyled'} w='90%'>
                    <TabList gap={8}>
                        {listOfTabs.map((tab, index) => (
                            <Tab
                                key={index}
                                _selected={{ borderBottom: '1px', opacity: 1 }}
                                fontWeight={'semibold'}
                                opacity={0.5}
                                _hover={{ opacity: 1 }}
                            >
                                {tab}
                            </Tab>
                        ))}

                        <Box display={'flex'} alignItems={'center'} gap={3}>
                            <Button
                                background={'none'}
                                onClick={() => setShowSearchBar(true)}
                                borderRadius='full'
                            >
                                <Icon
                                    as={FiSearch}
                                    boxSize={5}
                                    opacity={.5}
                                />
                            </Button>

                            <Input
                                variant='flushed'
                                placeholder='Basic usage'
                                display={showSearchBar ? 'block' : 'none'}
                            />
                        </Box>
                    </TabList>

                    <TabPanels>
                        {listOfPanels.map((Panel, index) => (
                            <TabPanel key={index}>
                                <Panel />
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>

            </Box>
        </Box>
    );
};

export default ChannelPage;;;