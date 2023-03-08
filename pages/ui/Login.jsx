import { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    ChakraProvider,
  } from '@chakra-ui/react';
  import Link from 'next/link';
  
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://bit.ly/prosper-baba',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://bit.ly/code-beast',
    },
  ];
  
  export default function Login() {
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const payload = {
            phone,
            password
        }
        try {
            const {data} = await axios({
                url:'http://localhost:3000/api/signin',
                method:'POST',
                data: payload
            })
            console.log("responce", data)
        } catch (error) {
            console.log("Error", error)
            
        }
    }
    return (
      <ChakraProvider>
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              Smart Insurance Mkononi{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                &
              </Text>{' '}
              Changing How Insurance works 
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                  //   size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
              //   minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              //   minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Sign in to your account
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                {/* We’re are an Insuretech platform that offers seamless, automated and simple processes for all Motor Insurance solutions accessible to Insurance agents In partnership with Insurance Companies in Kenya. This product is developed by JendiePlus Technologies.  */}
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                
                <Input
                  placeholder="07XXXXXXXX"
                  value={phone}
                  onChange={({target})=>setPhone(target?.value)}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Password"
                  value={password}
                  onChange={({target})=>setPassword(target?.value)}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                  
              </Stack>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link color={'blue.400'}  href={"/ui/Home"}>Forgot password?</Link>
              </Stack>
            <Button
                onClick={handleSubmit}
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
                }}>
                Submit
            </Button>
             <br/><br/>
              <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl' }}>
                
              Have an account? 
  
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"> 
                           
                <Link href={"/ui/Signup"}>
                  Signup
                </Link>  
              </Text>{' '}        
              </Heading>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
      </ChakraProvider>
    );
  }
  
  export const Blur = (props) => {
    return (
      <ChakraProvider>
          <Icon
          width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
          zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
          height="560px"
          viewBox="0 0 528 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <circle cx="71" cy="61" r="111" fill="#F56565" />
          <circle cx="244" cy="106" r="139" fill="#ED64A6" />
          <circle cy="291" r="139" fill="#ED64A6" />
          <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
          <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
          <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
          <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
          </Icon>
      </ChakraProvider>
    );
  };
  