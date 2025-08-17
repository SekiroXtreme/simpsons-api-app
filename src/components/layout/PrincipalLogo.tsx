import  Button  from "../ui/Button";


export default function PrincipalLogo({ title, description, button, buttonText }: { title: string; description: string; button:boolean; buttonText:string }) {
return (
    <div className="flex flex-col gap-5 bg-[url('/BackgroundImage.jpg')] bg-black/45 bg-blend-overlay bg-cover bg-center   items-center  justify-center p-20">
      <img 
        src="/Logo HomePage.png" 
        alt="The Simpsons Logo" 
        className="w-64 mb-8" 
      />
      <h1 className="text-4xl text-white drop-shadow-md  font-bold mb-4">{title}</h1>
      <p className="text-lg mb-5 text-white italic">{description}</p>
      {button ? <Button text={buttonText} /> : null}
    </div>
);
}