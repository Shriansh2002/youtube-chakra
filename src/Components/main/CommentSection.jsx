import { Box, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { format } from 'timeago.js';

const commentList = [
    {
        user: {
            name: 'Alex',
            image: 'https://yt3.ggpht.com/ytc/AMLnZu9ZqjCAhmPjRAZXrnmYSzvO_XvJUJIVkfoTHnKyH5eR6t1knL3lGvYLmc0ohwdV=s88-c-k-c0x00ffffff-no-rj'
        },
        commentDate: '2016-08-08',
        commentText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolorum ducimus praesentium sequi natus earum placeat, eius autem aliquid pariatur tenetur nihil, quas porro ullam unde, sed exercitationem dolores repellat quaerat incidunt possimus.',
        commentLikes: 10
    }, {
        user: {
            name: 'John',
            image: 'https://yt3.ggpht.com/ytc/AMLnZu9mXr-EqYzK-2xjAtK1EjwiHyM34vIA_ojDtg=s88-c-k-c0x00ffffff-no-rj'
        },
        commentDate: '2012-08-08',
        commentText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolorum ducimus praesentium sequi natus earum placeat, eius autem aliquid pariatur tenetur nihil, quas porro ullam unde, sed exercitationem dolores repellat quaerat incidunt possimus.',
        commentLikes: 1
    }
];


const SingleComment = ({ comment }) => (
    <Box display={'flex'} flexDir={'row'} top={0} gap={4} my='2'>
        <Image boxSize='40px' src={comment.user.image} alt={comment.user.name} borderRadius={10} />
        <Box>
            <Box display={'flex'} gap={3} alignItems='center' flexWrap={'nowrap'}>
                <Text fontWeight={'bold'}>{comment.user.name}</Text>
                <Text fontWeight={'bold'} fontSize={'sm'} opacity={0.7}> {format(comment.commentDate, 'en_US')} </Text>
            </Box>

            <Text width={'96%'}>{comment.commentText}</Text>

            <Box display={'flex'} gap={1} pt='2' alignItems='center'>
                <Icon as={FiHeart} boxSize={5} color={'red'} />
                <Text color={'red'}>{comment.commentLikes}</Text>
                <Text opacity={0.5} cursor='pointer' fontSize={'xs'} fontWeight={'bold'} pl='2'>REPLY</Text>
            </Box>

        </Box>
    </Box>
);

const CommentSection = () => {
    return (
        <Box mt='5'>
            <Text opacity={0.5} cursor='pointer' fontSize={'xs'} fontWeight={'bold'} textTransform={'uppercase'}>
                {commentList.length} Comments
            </Text>

            <Box mt='6'>
                {commentList.map((comment, index) => (
                    <SingleComment key={index} comment={comment} />
                ))}
            </Box>
        </Box>
    );
};

export default CommentSection;