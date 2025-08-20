import Card from '../components/layout/Card';
import PrincipalLogo from '../components/layout/PrincipalLogo';
import CharacterIndex from './CharactersIndex';

export default function HomePage() {
  return(
    <>
    <div className="m-0 mx-auto h-screen">
      <div className="text-center ">
        <PrincipalLogo
          title="Welcome to Springfield"
          description="Just the best of the Simpsons Characters"
          button={false}
          buttonText=""
          buttonPrev={false}
        />
      </div>
      <Card>
        <CharacterIndex />
      </Card>
    </div>
    </>
  )
}