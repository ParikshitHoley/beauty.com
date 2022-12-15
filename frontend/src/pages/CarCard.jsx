import { Stack,Skeleton, Container,Card,CardBody,Image,Heading,Text,Divider,CardFooter,ButtonGroup,Button, SimpleGrid, HStack ,Box,CircularProgress,CircularProgressLabel} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import {AddToCart,ADDTOCART,addproduct} from "../redux/addcar/action";
import { useDispatch,useSelector } from "react-redux"
export const CarCard=({data,loading})=>{
    const dispatch=useDispatch()
   const {loginsuccess,userid,token} = useSelector((store)=>store.auth)
   const {addloading} = useSelector((store)=>store.cart)
    if(loading) return (
        <Stack>
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
</Stack>
    )
    return <SimpleGrid ml="30px" columns={{sm:2, base: 1, md: 3, lg: 4 }} spacingX='10px' spacingY='10px'>
        {data.map((ele)=>{
const actualprice = Math.round(ele.price-((ele.price/100)*ele.discount))

          return (
            

        <Card maxW='sm'>
  <CardBody>
  <Box justifyContent="start" display ="flex">
      {/* <CircularProgress size="60px" value={100} color='yellow.300'> */}
  <CircularProgressLabel transform={["translate(-80%,-1000%)"]}   fontSize={15} color="green.500" as="b">{ele.discount}% OFF</CircularProgressLabel>
{/* </CircularProgress> */}

      </Box>
    <Image
    
      src={ele.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      pl="9"
      boxSize="220px"
      objectFit='cover' 

    >

    </Image>
    <Stack mt='6' spacing='3'>
    <Text as="b" color='pink.500'>
        {ele.company}
      </Text>
      <Heading size='md'>{ele.car_name}</Heading>
      <Text color='pink.500'>
        {ele.name}
      </Text>
      <Text as="s" color='pink.600' fontSize='md'>
        Rs {ele.price} /-
      </Text>
      <Text color='pink.500' fontSize='md'>
        Get Only At {actualprice} Rs /-
      </Text>
    
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'> 
      <Button onClick={()=>{
        const form ={
          product : ele._id,
          user : userid,
          quantity:1,
          total: actualprice
        }
        dispatch(AddToCart(form,token))
      }} disabled={!loginsuccess} variant='solid' colorScheme='pink'>
        Add To Cart
      </Button>
      <Link to={`/single/${ele._id}`}>
      <Button variant='ghost' colorScheme='blue'>
        View
      </Button>
      </Link>
      
    </ButtonGroup>
  </CardFooter>
</Card>)}
        )}
    </SimpleGrid>
}