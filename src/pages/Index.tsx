import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import EpisodesIndex from "./EpisodesIndex";
import CharacterShow from "./CharacterShow";
import EpisodesShow from "./EpisodeShow";
import LayoutContainer from "../components/layout/LayoutContainer";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que comparten Navbar */}
        <Route element={<LayoutContainer />}>
          <Route index element={<HomePage />} />
          <Route path="/cardshow/:id" element={<CharacterShow />} />
          <Route path="/episodes" element={<EpisodesIndex />} />
          <Route path="/episodes/:id" element={<EpisodesShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
