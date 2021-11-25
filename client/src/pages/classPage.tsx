import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router';
import LeftMenu from '../components/leftmenu/leftmenu';
import menus from '../data/leftmenuData';
import YouTube from '../components/youtube';
import Chat from '../components/chat';
import FloatConnectionStatus from '../components/floatConnectionStatus';
import useMe from '../hooks/useMe';
import { MemberType } from '../types';

const ClassPage = () => {
  const { uuid, memberType } = useParams();
  const { status, userName } = useMe();

  console.log(uuid, memberType);

  const classData = {
    name: 'CS330'
  };

  const user = {
    name: 'Kim',
    studentNumber: -1, // -1
    room: 10
  };

  return (
    <>
      <FloatConnectionStatus />
      <Flex>
        <LeftMenu className={classData.name} menus={menus} />
        <Box w="100%" h="100vh">
          <YouTube
            userName={userName}
            memberType={memberType as MemberType}
            room={user.room}
            videoId="j1_5ttGRzFs"
            width="100%"
            height="100%"
          />
        </Box>
        <Chat header="Chat" hasHeader />
      </Flex>
    </>
  );
};

export default ClassPage;
