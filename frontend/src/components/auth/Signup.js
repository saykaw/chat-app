import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [show,setShow] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [picture,setPicture] = useState("")

    const invertPassword = () => setShow(!show)

    const postDetails = (pics) => {}

    const submitHandler = () => {}

  return (
    <VStack spacing="5px" color="black"> 

        <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
            mb="1.5em"/>
        </FormControl>

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

        <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input
                type={show? "text" : "password"}
                placeholder="Confirm your Password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                mb="1.5em"/>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={invertPassword}>
                            {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <FormControl id="picture" isRequired>
            <FormLabel>Set a Profile Picture</FormLabel>
            <Input
            type="file"
            p={1}
            accept="image/*"
            onChange={(e)=>postDetails(e.target.files[0])}
            mb="1.5em"/>
        </FormControl>

        <Button 
        colorScheme="green" 
        width="50%"
        onClick = {submitHandler}
        > 
        Get Started!
        </Button>

    </VStack>
  )
}

export default Signup