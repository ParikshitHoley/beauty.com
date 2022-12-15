import { Route,Routes} from "react-router-dom";
import {Home} from "../pages/Home/home"
import {Single} from "../pages/Single"
import {Car} from "../pages/car";
import {Cart} from "../pages/cart"
import {Beauty} from "../pages/beauty" 
import {Advice} from "../pages/advice"
import { Order } from "../pages/Order";
export const Allroutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/car" element={<Car/>}></Route>
        <Route path="/about" element={<Beauty/>}></Route>
        <Route path="/advice/:id" element={<Advice/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/single/:id" element={<Single></Single>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
    </Routes>

    
}