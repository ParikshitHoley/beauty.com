import axios from "axios"
import {useEffect,useState} from 'react';
import {useSelector} from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { TableContainer,Table,Image,Thead,Tr,Th,Tbody,Td,Tfoot,TableCaption, Box, Button } from "@chakra-ui/react";
import { Footer } from "./Home/Homecomponents/footer";
import { Link } from "react-router-dom";
export const Cart =()=>{
     const [data,setData] = useState([]);
    const {token,email,userid,loginsuccess} = useSelector((store)=>store.auth);
    const [state,setState] = useState([]);
    const GetData=()=>{
       axios.get(`https://beautyindia.onrender.com/cart/${userid}`,{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then(({data})=>setData(data))
    }
    useEffect(()=>{
        if(loginsuccess)
        {
           GetData();
        }

    },[loginsuccess])
    const TotalBill = data.reduce((acc,ele)=>acc+ele.total,0);
   const deleteData=(id)=>{
    console.log(id)
    console.log(token)
    axios.delete(`https://beautyindia.onrender.com/cart/${id}`,{
      headers :{
        "content-type": "application/json",
        authorization : `Bearer ${token}`
      }
    }).then((res)=>GetData())
   }
    console.log(data)
    return <Box>
    <TableContainer ml="20px" maxWidth={"80%"} mb="20px">
  <Table variant='striped' colorScheme='pink'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Sr No.</Th>
        <Th>Product</Th>
        <Th>Name</Th>
        <Th>Quantity</Th>
        <Th isNumeric>Total</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data.map((ele,ind)=>
        <Tr>
        <Td>{ind+1}</Td>
        <Td><Image boxSize={"20%"} src={ele.product.image}></Image></Td>
        <Td>{ele.product.name}</Td>
        <Td>{ele.quantity}</Td>
        <Td >{ele.total}</Td>
        <Td ><DeleteIcon onClick={()=>{
          deleteData(ele._id)
        }} /></Td>
      </Tr>
    )}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th isNumeric>Total Bill : {TotalBill} Rs /-</Th>
      </Tr>
    </Tfoot>
  </Table>
  <Box width="100%" display="flex" justifyContent="end">
  <Link to="/order">
  <Button  colorScheme={"pink"}>Place Order</Button>

  </Link>

  </Box>
</TableContainer>
<Footer></Footer>
</Box>
}



