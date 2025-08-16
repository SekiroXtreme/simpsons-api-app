import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CardShow from "./CardShow" 
import EpisodesIndex from "./EpisodesIndex"

export default function Index(){
  return(
    <BrowserRouter> 
      <Routes> 
        <Route index element={<HomePage />}/>
        <Route path="/cardshow/:id" element={<CardShow />} />
        <Route path="/episodes" element={<EpisodesIndex />} />
      </Routes>
    </BrowserRouter>
  )
  
}

