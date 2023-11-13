import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'


const Login = () => {
    const [show,setShow] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const invertPassword = () => setShow(!show)

    const submitHandler = () => {}

    const guestHandler = () => {}


  return (
    
    <VStack spacing="5px" color="black"> 

        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            mb="1.5em"/>
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                type={show? "text" : "password"}
                placeholder="Enter your Password"
                onChange={(e)=>setPassword(e.target.value)}
                mb="1.5em"/>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={invertPassword}>
                            {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <Button 
        colorScheme="green" 
        width="50%"
        onClick = {submitHandler}
        mb="0.5em"
        > 
        Login
        </Button>

        <Button 
        colorScheme="red" 
        width="50%"
        onClick = {()=>{
                setEmail("guest@example.com")
                setPassword("123456789")
            }}
        > 
        Get Guest User Credentials
        </Button>

    </VStack>


    
  )
}

export default Login