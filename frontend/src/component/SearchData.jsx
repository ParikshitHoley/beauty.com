import { Text ,Card,CardHeader,Heading,Box,Image,HStack,CardBody, Container} from "@chakra-ui/react";
import {Link} from "react-router-dom"
export const SearchData=(props)=>{
    const {data,onClose} = props;
    if(data.length===0) return <Text fontSize='sm' color='pink.600'>
    data not available for this search....
  </Text>

    return data.map((ele)=>
    <Link onClick={onClose} to= {`/single/${ele._id}`}>
    <HStack spacing='8' mt="5px" border="0.9">
        <Box size="80px">
            <Image boxSize="60px"  src={ele.image}></Image>
        </Box>
        <Box>
            <HStack>
            <Heading color="gray.600" as="h4" size="sm" >{ele.name}</Heading>
            
            </HStack>

        </Box>

</HStack>
    </Link>
    
    )
}