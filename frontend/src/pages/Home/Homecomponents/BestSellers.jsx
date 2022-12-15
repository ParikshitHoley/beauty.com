
import { Container,Heading ,Box} from "@chakra-ui/react"
import { useEffect } from "react";
import {useState,UseEffect} from "react"
import { useSelector } from "react-redux";
import { CarCard } from "../../CarCard";
export const BestSellers=()=>{
    const {loading} = useSelector(store=>store.allcar)
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products?size=${4}`).then((res)=>res.json()).then((data)=>setData(data))
    },[])

   
    return <Box>
        <Heading as="h4" color="pink.600">Best Sellers</Heading>
        <CarCard data={data} loading={loading}></CarCard>

      

    </Box>
}