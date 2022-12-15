import { Footer } from "./Home/Homecomponents/footer"
import {Box,HStack, VStack,Heading,Text,Input,Select,Flex, Button} from "@chakra-ui/react"

export const Order=()=>{
    return <Box>
        <Box display={"flex"} justifyContent="center" width="100%">
            <Box width="70%" >
                <HStack width="100%">
                    <Box>
                    <VStack>
                    <Box><Heading mt="5px" color="pink.600" fontSize={"20px"}>BEAUTY.COM</Heading>
                        </Box>

                        <Box letterSpacing={"1px"} >
                           <Text m="5px">Contact Information</Text>
                           <Input m="5px" placeholder = "email"></Input>
                           <Text m="5px">Shipping Address</Text>
                           <Select m="5px">
                            <option>India</option>
                            <option>USA</option>
                            <option>Shri-Lanka</option>
                           </Select>
                           <Flex><Box m="5px">
                            <Input placeholder="First Name"></Input>
                           </Box>
                           <Box m="5px">
                           <Input placeholder="Last Name"></Input>
                           </Box>
                           <Box></Box></Flex>
                           <Input m="5px" placeholder="Address"></Input>
                           <Input m="5px" placeholder="Apartment"></Input>
                           <Flex><Box>
                            <Input m="5px" placeholder="City"></Input>
                           </Box>
                           <Box>
                           <Input  m="5px" placeholder="State"></Input>
                           </Box>
                           <Box>
                           <Input m="5px" placeholder="Pin"></Input>
                           </Box>
                           <Box></Box></Flex>
                           <Input m="5px" placeholder="Phone"></Input>
                           <Box display={"flex"} alignItems="start">
                           <Button onClick={()=>{
                            alert("Order placed Sucessfully")
                           }} m ="5px" colorScheme={"pink"}>Conform Order</Button>

                           </Box>
                        </Box>
                    </VStack>
                        
                    </Box>
                <Box>
                  
                </Box>
                </HStack>
            </Box>
        </Box>
        <Box>
            <Footer></Footer>
        </Box>
    </Box>
}