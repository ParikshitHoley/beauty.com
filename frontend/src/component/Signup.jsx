
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,Input,DrawerFooter
    ,FormControl,FormLabel,FormHelperText,
    InputGroup,InputRightElement, CircularProgress, Container,Stack,Alert
  } from '@chakra-ui/react';
  import { AlertIcon } from '@chakra-ui/react';

  import {SIGNUP,LOGIN,ERRORINSIGNUP,loginsignup,SIGNUPLOADING,Signup,Login,LOGINTRUE,REMOVEERROR,LOGOUT} from "../redux/login/action";
   import { useDispatch,useSelector } from 'react-redux';


   


import {useState} from "react";



function DrawerExample(props) {
 

  const dispatch=useDispatch();
  const signupdata = useSelector((store)=>store.auth);
  
    const [form,setForm] = useState({
      
    });
    console.log(signupdata)
    const Formdata=(e)=>{
      dispatch(loginsignup(REMOVEERROR,null))
        const {value,id}=e.target;
        setForm({...form,
            [id]:value
        })
    }
   
    const {onSClose,onSOpen,isSOpen,btnRef} = props;
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
      <>{ signupdata.loginsuccess?   <Drawer
        isOpen={isSOpen}
        placement='right'
        onClose={onSClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hey {signupdata.name} . . .</DrawerHeader>

          <DrawerBody>
          <Button colorScheme='pink' onClick={()=>{
            dispatch(loginsignup(LOGOUT,null))
          }}>LOGOUT</Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onSClose}>
              Cancel
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer> :
       
        <Drawer
          isOpen={isSOpen}
          placement='right'
          onClose={onSClose}
          finalFocusRef={btnRef}
          size={["sm"]}
        > 
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{signupdata.signupsuccess ? "Login" : "Create Your Account"}</DrawerHeader>

{ signupdata.signupsuccess ?   
  
  <DrawerBody size={["sm","md","lg"]}>
  <FormControl>
  
<FormLabel>Email address</FormLabel>
<Input id="email" onChange={Formdata} type='email' />
<FormLabel>Password</FormLabel>
</FormControl>
<InputGroup size='md'>
<Input
id="password" onChange={Formdata}
pr='4.5rem'
type={show ? 'text' : 'password'}
placeholder='Enter password'
/>
<InputRightElement width='4.5rem'>
<Button h='1.75rem' size='sm' onClick={handleClick}>
{show ? 'Hide' : 'Show'}
</Button>
</InputRightElement>
</InputGroup>
{ signupdata.singuploading ? <CircularProgress ml="20px" mt="15px" isIndeterminate color='blue.400' /> :
<Button mt="15px" colorScheme='pink' onClick={()=>{

dispatch(loginsignup(SIGNUPLOADING,true));
dispatch(Login(form))

}}>Sign In</Button>}

<Container mt="30px">
<Button onClick={()=>{
      dispatch(loginsignup(LOGINTRUE,false))
    }} ml="90px">Create an Account ?</Button>
{signupdata.error ? <Stack mt="10px" spacing={3}>
<Alert status='error'>
<AlertIcon />
{signupdata.message}
</Alert>
</Stack> : null}
{
signupdata.loginsuccess ? <Stack mt="10px" spacing={3}>
<Alert status='success'>
<AlertIcon/>
Welcome 
</Alert>
</Stack> : null
}
</Container>
  </DrawerBody> :

           
  
            <DrawerBody size={["sm","md","lg"]}>
            <FormControl>
            <FormLabel>Your Name</FormLabel>
  <Input id="name" onChange={Formdata}  />
  <FormLabel>Email address</FormLabel>
  <Input id="email" onChange={Formdata} type='email' />
  <FormLabel>Password</FormLabel>
  {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
</FormControl>
<InputGroup size='md'>
      <Input
       id="password" onChange={Formdata}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    { signupdata.singuploading ? <CircularProgress ml="20px" mt="15px" isIndeterminate color='blue.400' /> :
   <Button mt="15px" colorScheme='pink' onClick={()=>{

    dispatch(loginsignup(SIGNUPLOADING,true));
    dispatch(Signup(form))
      
   }}>Sign Up</Button>}

   <Container mt="30px">
    <Button onClick={()=>{
      dispatch(loginsignup(LOGINTRUE,true))
    }} ml="70px">Already have an Account ?</Button>
    {signupdata.error ? <Stack mt="10px" spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    {signupdata.message}
  </Alert>
</Stack> : null}
{
  signupdata.signupsuccess ? <Stack mt="10px" spacing={3}>
  <Alert status='success'>
    <AlertIcon />
    {signupdata.message}
  </Alert>
</Stack> : null
}
   </Container>
            </DrawerBody> }
      
  
            <DrawerFooter>
              <Button  variant='outline' mr={3} onClick={onSClose}>
                Cancel
              </Button>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>}
      </>
    )
  }

  export default DrawerExample