import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CardShow from "./CardShow" 

export default function Index(){
  return(
    <BrowserRouter> 
      <Routes> 
        <Route index element={<HomePage />}/>
        <Route path="cardshow" element={<CardShow />} />
      </Routes>
    </BrowserRouter>
  )
  
}

