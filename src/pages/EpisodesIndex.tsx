import PrincipalLogo from "../components/layout/PrincipalLogo";
import { useEpisodes } from "../hooks/useEpisode";

export default function EpisodesIndex(){
  const {episodes} = useEpisodes(); 
  return(
    <>
      <div className="m-0 mx-auto h-screen">
        <div className="text-center ">
          <PrincipalLogo
            title="Bienvenido a Springfield"
            description="Solo lo mejor de los Simpsons"
            button={false}
            buttonText=""
          />
          <p></p>
        </div>
      </div>
    </>
    
  )
}