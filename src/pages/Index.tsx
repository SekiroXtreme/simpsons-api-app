import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import EpisodesIndex from "./EpisodesIndex"
import CharacterShow from "./CharacterShow"
import EpisodesShow from "./EpisodeShow"

export default function Index(){
  return(
    <BrowserRouter> 
      <Routes> 
        <Route index element={<HomePage />}/>
        <Route path="/cardshow/:id" element={<CharacterShow />} />
        <Route path="/episodes" element={<EpisodesIndex />} />
        <Route path="/episodes/:id" element={<EpisodesShow />} />
      </Routes>
    </BrowserRouter>
  )
  
}

