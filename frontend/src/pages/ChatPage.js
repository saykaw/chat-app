import React from 'react'
import { ChatState } from '../context/ChatProvider'
import { Box } from '@chakra-ui/react'
import SideDrawer from '../miscellaneous/SideDrawer'
import MYChats from '../components/MYChats'
import ChatBox from '../components/ChatBox'

const ChatPage = () => {
  const {user} = ChatState()
  return (
    <div tyle={{width:"100%"}}>
      {user && <SideDrawer/>}
      <Box>
        {user && <MYChats/>}
        {user && <ChatBox/>}
      </Box>

    </div>
  )
}

export default ChatPage