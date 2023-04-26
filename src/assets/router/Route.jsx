import { BrowserRouter, Route, Routes} from "react-router-dom"
import Details from "../../pages/details/Details"
import Home from "../../pages/home/Home"



export function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        </BrowserRouter>
    )
}