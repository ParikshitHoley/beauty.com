import {Box, Heading, HStack, VStack,Text, Input, Button} from "@chakra-ui/react"

export const Footer=()=>{
    return <Box  bg="pink.600" w={"100%"} h={"300px"} display="flex" alignItems={"space-between"}>
          <HStack spacing={"100px"} display="flex"  >
            <VStack color={"gray.300"} width="300px" textAlign={"justify"}  >
                <Heading fontSize={"20px"}>Support</Heading>
                <Text>About us</Text>
                <Text>FAQs</Text>
                <Text>Term & Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Shipping & Returns</Text>
            </VStack>
            <VStack color={"gray.300"}>
                <Heading fontSize={"20px"}>Contact</Heading>
                <Text>+91 7775043120</Text>
                <Text>parikshitholey20@gmail.com</Text>
                <Text>Contact us</Text>
                <Heading fontSize={"15px"}>FOR CORPORATE ORDERS</Heading>
                <Text>business@beauty.in</Text>
            </VStack>
            <VStack color={"gray.300"}>
                <Heading fontSize={"20px"}>Sign-up to get closer</Heading>
                <Text>Subscribe to get special offers, free giveaways and nce in a lifetime deals</Text>
                <Input placeholder="Enter Your email adress"></Input>
               <Button color={"pink.600"}>Subscribe</Button>
            </VStack>
            
          </HStack>
    </Box>
}