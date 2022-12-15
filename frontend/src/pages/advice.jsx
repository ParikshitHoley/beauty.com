import { useParams } from "react-router-dom"
import {useEffect,useState} from "react"
import { Text, VStack,Image, Container, SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./Home/Homecomponents/footer";
export const Advice=()=>{
    const {id} = useParams();
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/beauty/${id}`).then((res)=>res.json()).then((e)=>setData(e[0]))
    },[])
    console.log(data)
     
    return  <Box>
        
    <Box mt="30px" mb="10px">
        <SimpleGrid columns={{"sm":1,"md":2,"lg":2,"base":1}}>
     
       
        <Box>
        <Container textAlign={"justify"} borderRadius={"1%"}  mt="20px" maxW={{"sm":"500px","md":"600px","lg":"600px"}} bg='pink.600' color='white'>{data.description1}</Container>
        <Container textAlign={"justify"} borderRadius={"1%"} mt="20px" maxW={{"sm":"500px","md":"600px","lg":"600px"}} bg='pink.600' color='white'>{data.description2}</Container>
      
        </Box>
         <Box>
        <Container mt="20px">
         <Image borderRadius={"5%"} boxSize={{"sm":"200px","md":"300px","lg":"400px"}} src={data.image}></Image>
         </Container>
    </Box>
        
        </SimpleGrid>
        
        
    </Box>
    <Footer></Footer>
    </Box>
}