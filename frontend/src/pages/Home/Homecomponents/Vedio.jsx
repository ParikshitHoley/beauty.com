import { Box ,AspectRatio } from "@chakra-ui/react"

export const Vedio=()=>{
     return <Box m={["20px"]}>
      <AspectRatio maxW={{"sm":"100%","md":"100%","lg":"100%"}} maxH={"70vh"} backgroundColor="pink.600" ratio={2} >
  <iframe
  width={"100%"}
  height={"100%"}
    title='naruto'
    src='https://cdn.shopify.com/s/files/1/0034/7901/1441/files/kajal_desk_new.mp4?v=1642758111'
    allowFullScreen
    
  />
 </AspectRatio>
    </Box> 
}