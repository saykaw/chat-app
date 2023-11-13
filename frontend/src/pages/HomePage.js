import React from 'react'
import { Container,Box,Text, Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'


const HomePage = () => {
  return (
    <Container maxW = 'xl' centerContent>
      <Box 
      display="flex"
      justifyContent="center"
      p = {1}
      bg = {"white"}
      w="100%"
      m= "40px 0 18px 0"
      borderRadius="lg"
      borderWidth="1px" >
        <Text fontSize="4xl" fontFamily="Inter" color="black">
          Easy Connect
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
        <Tabs variant="soft-rounded" >
          <TabList mb="1em">
            <Tab width="50%">
              Login
            </Tab>
            <Tab width="50%">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>   
      </Box>
    </Container>
  )
}

export default HomePage