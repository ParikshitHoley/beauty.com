import { Heading,Box, Container,HStack ,Image} from "@chakra-ui/react"


export const About=()=>{
    return <Box m="30px">
        <Heading color="pink.600">About Us</Heading>
        <Box m="30px" ml="150px">
            <HStack >
                <Box boxSize='500px' >
                    <Image 
    objectFit='cover' src="https://www.chennaiinsider.com/wp-content/uploads/2020/08/IMG_0261-scaled.jpg"/>
                </Box>
                <Container textAlign={"justify"} boxSize={"500px"} color="pink.600"  >
                   
                    Arthi Raguram, the founder of Deyga, is a new-age entrepreneur whose passion for creating nature-inspired, self care products has been a driving force of the brand. Her skincare journey began very early as she was an athletic student who was always out the sun.
Natural ingredients helped her skin stay protected and healthy. Growing up with sensitive skin, Arthi decided to steer clear away from products loaded with harsh chemicals.
She maintains this resolve with every Deyga creation as well.
She maintains this resolve with every Deyga creation as well.
Arthi made sure every ingredient was handpicked and every product was responsibly crafted.
Deyga has now made waves and broke barriers as a community of Eco-conscious customers.
                   
                </Container>
            </HStack>
        </Box>
    </Box>
}