import React, { useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import { Box } from '@chakra-ui/react'
import SideDrawer from '../miscellaneous/SideDrawer'
import MYChats from '../components/MYChats'
import ChatBox from '../components/ChatBox'

const ChatPage = () => {
  const {user} = ChatState()
  const[fetchAgain,setFetchAgain] = useState(false)
  return (
    <div tyle={{width:"100%"}}>
      {user && <SideDrawer/>}
      <Box display="flex" justifyContent="space-between" width="100%" h="91.5vh" p="10px">
        {user && (<MYChats fetchAgain={fetchAgain}/>)}
        {user && (<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>)}
      </Box>

    </div>
  )
}

export default ChatPage