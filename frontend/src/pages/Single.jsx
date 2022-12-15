import { useParams } from "react-router-dom"
import {useState,useEffect} from "react";
import {Box,Image,AspectRatio,Slide,Heading,Text,Button,CardFooter,Divider,ButtonGroup, Container, HStack, VStack, SimpleGrid, Flex,CircularProgress} from "@chakra-ui/react";
import axios from "axios";
import { PhoneIcon,StarIcon,BellIcon} from '@chakra-ui/icons';
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {SINGLE,GetSingleData,SINGLELOADING,Singleaction} from "../redux/Single/action"
import {AddToCart,ADDTOCART,addproduct} from "../redux/addcar/action";
import { Footer } from "./Home/Homecomponents/footer";
export const Single=()=>{
  const {loginsuccess,userid,token} = useSelector((store)=>store.auth);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {addloading} = useSelector((store)=>store.cart)
    const {data,loading} = useSelector((store)=>store.single)
    const actualprice = Math.round(data.price-((data.price/100)*data.discount))
    useEffect(()=>{
      dispatch(Singleaction(SINGLELOADING))
        dispatch(GetSingleData(id))
    },[id])
  
   const [qutval,setQutval] = useState(1);
   const rate = data.rating;
    const arr = new Array(rate).fill(0)
    const CreateRating=({col})=>{
      return <StarIcon color={col}/>
    }
    // "yellow.300"
    const rem = (5-data.rating) || 0;
    const remarr = new Array(rem).fill(0);
const navigate=useNavigate();
    return  <Box>
    <Box ml="150px" mt="60px" mr="150px" mb="10px">
      <SimpleGrid rows={{sm:3,base:3,lg:2}}>
      <HStack spacing="50" >
        <Box >
        
          <Image  
   border="1px" borderColor='gray.300' borderRadius="10%"  boxSize='300px'  objectFit='cover' src={data.image}></Image>
       
        </Box>
        <VStack alignItems="start">
          <Text as='b' color="gray.500" fontSize='2xl'>{data.name}</Text>
          <Text as='sm' color="gray.500" fontSize='xl'>Category : {data.category}</Text>
          <Text as="s" color="gray.500">Price : {data.price} Rs/-</Text>
          <Text color="gray.500">Get At: {actualprice}Rs /- Only </Text>
          <HStack>
          {arr.map((ele)=><CreateRating col="yellow.300"/>)}{remarr.map((ele)=><CreateRating col="gray.300"/>)}
          </HStack>
          <Text as='sm' color="gray.500" fontSize='md'>Manufactured By : {data.manufacturer}</Text>
          <Text as='sm' color="gray.500" fontSize='sm'>Address : {data.address}</Text>
          <Flex>
            <Button onClick={()=>{
              setQutval(qutval+1)
            }} mr="7px" colorScheme="pink">+</Button>
            <Text fontSize={25} color="pink.600">{qutval}</Text>
            <Button  disabled={qutval===1} onClick={()=>{
              setQutval(qutval-1)
            }} ml="7px" colorScheme="pink">-</Button>
          </Flex>
          <Flex>
            <Text color="pink.600">Total : {qutval*actualprice} Rs.</Text>
          </Flex>


        </VStack>
        <Box >
          <HStack>
          <BellIcon  w={8} h={8} color="yellow.300" />
          <Heading  color="gray.400" as="b">{data.discount} % OFF</Heading>
          </HStack>
        </Box>
      </HStack>
      <HStack mt="30px" bgColor="red.100">
        {/* <SlideEx></SlideEx> */}
        <Container color="gray.500" maxW='container.sm'>
          <Box>{data.description}</Box>
          </Container>
      </HStack>{addloading ? <CircularProgress ml="20px" mt="15px" isIndeterminate color='blue.400' /> : 
      <Button disabled={!loginsuccess} onClick={()=>{
        const form ={
          product : data._id,
          user : userid,
          quantity:qutval,
          total : qutval*actualprice
        }
        dispatch(AddToCart(form,token))
      }} variant='solid' mt="20px" w="120px" colorScheme='pink'>
        Add To Cart
      </Button>}
      <Box mt="20px" display="flex" justifyContent="space-between">
          {/* <Link to="/car"> */}
          <Button onClick={()=>{
            navigate(-1)
          }} variant='solid' colorScheme='pink'>
        Back
      </Button>
          {/* </Link> */}
          </Box>
      </SimpleGrid>
      
    </Box>
    <Footer></Footer>
    </Box>
}