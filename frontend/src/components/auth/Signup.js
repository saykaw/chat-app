import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [show,setShow] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [picture,setPicture] = useState("")
    const[loading,setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()


    const invertPassword = () => setShow(!show)

    const postDetails = (pics) => {
        setLoading(true);
    
        if (pics === undefined) {
          toast({
            title: "Please Select an Image!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
    
        if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
          toast({
            title: "Please Select a JPEG or PNG Image!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
          return;
        }
    
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
    
          const data = new FormData()
          data.append("file", pics)
          data.append("upload_preset", "chat-app")
          data.append("cloud_name", "dyy3jr2gp")
          axios.post("https://api.cloudinary.com/v1_1/dyy3jr2gp/image/upload", data)
            .then((response) => {
              console.log("Cloudinary response:", response);
              setPicture(response.data.url.toString());
              setLoading(false);
              toast({
                title: "Image uploaded successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
            })
            .catch((error) => {
              console.log("Cloudinary error:", error);
              setLoading(false);
            });
        }
    }

    const submitHandler = async() => {
        setLoading(true)
        if(!name || !email || !password || !confirmPassword){
            toast({
                title : "Please fill in all the details.",
                status : "warning",
                duration : 5000,
                isClosable:true,
                position:"bottom"
            })
            setLoading(false)
            return
        }
        if(password !== confirmPassword){
            toast({
                title : "Passwords do not match.",
                status : "warning",
                duration : 5000,
                isClosable:true,
                position:"bottom"
            })
            return
        }

        try {
            const config = {
                headers : {
                    "Content-type" : "application/json",
                }
            }
            const {data} = await axios.post("/api/user",{name,email,password,picture},config)
            toast({
                title : "Registration Successful !!",
                status : "success",
                duration : 5000,
                isClosable:true,
                position:"bottom"
            })
            localStorage.setItem('userInfo',JSON.stringify(data))
            setLoading(false)
            navigate('/')  
        }
        catch(error){
            toast({
                title : "Error Occured.",
                description:error.response.data.message,
                status : "error",
                duration : 5000,
                isClosable:true,
                position:"bottom"
            })
            setLoading(false)
        }
    }

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
        isLoading = {loading}
        > 
        Sign up
        </Button>

    </VStack>
  )
}

export default Signup