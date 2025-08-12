import Card from '../components/ui/Card';
import PrincipalLogo from '../components/ui/PrincipalLogo';

export default function HomePage() {
  return(
    <>
    <div className="m-0 mx-auto h-screen">
      <div className="text-center ">
        <PrincipalLogo
          title="Bienvenido a Springfield"
          description="Solo lo mejor de los Simpsons"
        />
      </div>
      <Card />
    </div>
    </>
  )
}