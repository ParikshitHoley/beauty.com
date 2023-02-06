import {Box,Heading,Text,Image, VStack, SimpleGrid} from '@chakra-ui/react'
import axios from 'axios';
import {Link} from "react-router-dom"

import {useEffect,useState} from "react";
import { Footer } from './Home/Homecomponents/footer';


export const Beauty=()=>{
    const [data,setData] = useState([]);
    const getdata=async()=>{
        let data1 = await fetch("https://beautyindia.onrender.com/beauty").then((res)=>res.json());
        setData(data1)
     }
    useEffect(()=>{
      getdata()
    },[])
    console.log(data)
    return <Box >
        <Heading as="h1" mt="10px" color="pink.500">Beauty Advice By Our Experts</Heading>
        <SimpleGrid columns={{"sm" : 1, "md" : 2, "lg":2, "base":1}} mb="10px">
        {data.map((ele)=>{
            return <Box  mt="20px">
                <Link to={`/advice/${ele._id}`}>
                <VStack>
                <Image borderRadius={"5%"} boxSize={{"sm":"200px","md":"300px","lg":"400px"}} src={ele.image}></Image>
                <Text color={"pink.400"}><span color="green">By</span> {ele.advisor}</Text>
                </VStack></Link>
            </Box>
        })}
        </SimpleGrid>
       <Footer></Footer>

    </Box>
}