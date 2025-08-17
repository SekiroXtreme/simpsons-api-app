import { Link } from "react-router-dom";
import  Button  from "../ui/Button";


export default function PrincipalLogo({ title, description, button, buttonText, buttonPrev }: { title: string; description: string; button:boolean; buttonText:string; buttonPrev: boolean }) {
return (
    <div className="bg-[url('/BackgroundImage.jpg')] bg-black/45 bg-blend-overlay bg-cover bg-center">
      {buttonPrev ?
        <div className="flex flex-start p-5 ">
          <Link to="/">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:click transition">
              Back
            </button>
          </Link>
        </div> : null
        }
      <div className="flex flex-col gap-5 items-center justify-center p-20">
        <img 
          src="/Logo HomePage.png" 
          alt="The Simpsons Logo" 
          className="w-64 mb-8" 
        />
        <h1 className="text-4xl text-white drop-shadow-md  font-bold mb-4">{title}</h1>
        <p className="text-lg mb-5 text-white italic">{description}</p>
        {button ? 
        <Link to='/episodes'>
          <Button text={buttonText} /> 
        </Link>
        : null}
      </div>
    </div>
    
);
}