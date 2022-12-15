import { Button,Box,Flex,Text } from "@chakra-ui/react"
import {useDispatch,useSelector} from "react-redux"
import {ADDPAGE,SUBPAGE,GetCar,GetAllCar,LOADING,GetFliterCar} from "../redux/allcar/action"

export const Page = ()=>{

    const {page} = useSelector((store)=>store.allcar)
    const dispatch = useDispatch();

    return <Box alignContent={"end"} mb="10px">
        <Flex gap={"10px"} mt="10px">
            <Button disabled={page==1} onClick={()=>{
                dispatch({type:ADDPAGE})
            }}>Pre</Button>
            <Button>{page}</Button>
            <Button disabled={page==3} onClick={()=>{
                dispatch({type:SUBPAGE})
            }}>Next</Button>
        </Flex>
    </Box>
}