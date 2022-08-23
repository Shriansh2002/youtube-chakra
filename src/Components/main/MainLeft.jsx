import { Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import CommentSection from './CommentSection';
import Player from './Player';
import VideoDetails from './VideoDetails';

const videoData = {
    name: 'One Direction - Night Changes - RTL LATE NIGHT',
    views: '604 M',
    embedLink: 'https://www.youtube.com/embed/oXwXzB9xmYg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae, ad error nostrum incidunt, doloremque obcaecati sunt vel molestiae laboriosam ipsum unde! Consectetur libero quis nostrum explicabo exercitationem, laboriosam ea! Distinctio molestiae libero doloribus omnis, perferendis dolore rem aspernatur facere magni dolorem sit ad sunt, placeat ut dolores similique rerum minima dignissimos consequuntur a quod nobis. Quis soluta voluptate, aliquam molestias nesciunt voluptatibus ipsa dolore sed quae deleniti? Vel reprehenderit quae beatae nam. Nostrum sapiente blanditiis sit fugit optio deleniti amet est eum magnam, eligendi nam aut? Maiores, accusamus eius! Impedit ducimus reiciendis molestias repellendus libero, quos sequi praesentium aliquam.',
    liked: true,
    channel: {
        channelName: 'One Direction',
        channelSubscribers: '37.5M',
        channelLink: 'https://www.youtube.com/channel/UCb2HGwORFBo94DmRx4oLzow',
        channelLogo: 'https://yt3.ggpht.com/ytc/AMLnZu8lV9YA7m7BtmIyJwAT1Pgn5CEhZsUuLlGmrcVY6oY=s176-c-k-c0x00ffffff-no-rj',
        subscribed: true
    }
};

const MainLeft = () => {
    const [vid, setVideoData] = useState(videoData);

    const handleLikedState = () => {
        setVideoData({ ...vid, liked: !vid.liked });
    };

    const handleSubscribedState = () => {
        setVideoData({ ...vid, channel: { ...vid.channel, subscribed: !vid.channel.subscribed } });
    };

    return (
        <Box mt='10' display={'flex'} flexDir={'column'}>

            <Player videoData={vid} handleLikedState={handleLikedState} />
            <Divider mt='2' />
            <VideoDetails videoData={vid} handleSubscribedState={handleSubscribedState} />
            <Divider mt='2' />
            <CommentSection />
        </Box>
    );
};

export default MainLeft;