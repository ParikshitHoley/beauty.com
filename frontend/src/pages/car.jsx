import { GetCar ,GetAllCar,LOADING,GetFliterCar} from "../redux/allcar/action"
import { useDispatch,useSelector } from "react-redux"
import {useEffect} from "react";
import {CarCard} from "./CarCard";
import { Box ,Select,Text,Slider,SliderFilledTrack,SliderTrack,SliderThumb} from "@chakra-ui/react";
import { Page } from "./Page";
import { Footer } from "./Home/Homecomponents/footer";

export const Car=()=>{
    const {data,loading,page} = useSelector(store=>store.allcar)
    console.log(page)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(GetAllCar(LOADING,true))
       dispatch(GetCar(page))
      
    },[page])

    const GetSelect=(e)=>{
      const val = e.target.value
      console.log(val)
      dispatch(GetAllCar(LOADING,true))
      dispatch(GetFliterCar(val))
    }

    const GetFilter=(e)=>{
        dispatch(GetAllCar(LOADING,true))
        dispatch(GetFliterCar(e))
    }

    return <Box >
        <Box mt="20px" display="flex" justifyContent="left">
        <Box ml="20px" w="10vw" h="10vh">
            <Text as="b" color="pink.400">FILTER BY PRICE</Text>
            <Slider defaultValue={2000} min={0} max={4000} step={200} onChange={GetFilter}>
  <SliderTrack bg='red.100'>
    <Box position='relative' right={10} />
    <SliderFilledTrack bg='pink.500' />
  </SliderTrack>
  <SliderThumb boxSize={2} />
</Slider>

        </Box>
        <Box ml="20px">
        <Select
  bg='pink.400'
  borderColor='pink.500'
  color='gray.400'
  
  onChange={GetSelect} > 
  <option value='category'>Category</option>
   <option value='Body-Lotion'>BODY-LOTION</option>
  <option value='LIPISTICK'>LIPISTICK</option>
  <option value='EYELINER'>EYELINER</option>

  </Select>
        </Box>
        </Box>
        <CarCard data={data} loading={loading} />
        <Page></Page>
        <Footer></Footer>
        </Box>
}