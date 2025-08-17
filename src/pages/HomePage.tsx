import Card from '../components/layout/Card';
import PrincipalLogo from '../components/layout/PrincipalLogo';
import CharacterIndex from './CharactersIndex';

export default function HomePage() {
  return(
    <>
    <div className="m-0 mx-auto h-screen">
      <div className="text-center ">
        <PrincipalLogo
          title="Bienvenido a Springfield"
          description="Solo lo mejor de los Simpsons"
          button={true}
          buttonText="Saber más"
        />
      </div>
      <Card>
        <CharacterIndex />
      </Card>
    </div>
    </>
  )
}