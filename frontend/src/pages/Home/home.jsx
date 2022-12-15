import { Container,Box } from "@chakra-ui/react"
import { useState,useEffect } from "react"
import { BestSellers } from "./Homecomponents/BestSellers"
import { Vedio } from "./Homecomponents/Vedio"
import {About} from "./Homecomponents/About"
import { Footer } from "./Homecomponents/footer"
export const Home=()=>{
   return <Box>
    <Vedio/>
    <BestSellers></BestSellers>
    <About></About>
    <Footer></Footer>
   </Box>
    
}