import {
    useDisclosure,
    Modal,
    Button,Text,
    Stack,Skeleton,
    Input,
    ModalOverlay,
    ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter
  } from '@chakra-ui/react';

  import { useDispatch,useSelector } from 'react-redux';
  import {SEARCH,searchaction,search,LOADINGSEARCH} from "../redux/searchcar/action"
  import {useState,useEffect} from "react";
  import {debounce} from "lodash"
  import {SearchData} from "./SearchData"
 function BasicUsage(props) {
  const dispatch=useDispatch();
    const { isOpen,onOpen, onClose } = props ;
    const [text,setText] = useState("");
    const setData=debounce((e)=>{
        const value = e.target.value;
        setText(value)
    },500)
    
   const {searchdata,error,loading} = useSelector(store=>store.search)
console.log(searchdata,error,loading)
    useEffect(()=>{

        dispatch(searchaction(LOADINGSEARCH,true))
        dispatch(search(text));
        dispatch(searchaction(LOADINGSEARCH,false))

    },[text])
    return (
      <>
        
  
        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}  size="xl">
          <ModalOverlay />
          <ModalContent>
          <Input placeholder='Basic usage' size="md" m="8px" width="lg"  focusBorderColor = "pink.500" onChange={setData} />
            <ModalCloseButton />
            <ModalBody>
              {loading? <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>:null}
              {!error? <SearchData onClose={onClose} data={searchdata} />: null  }
              
             
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicUsage
