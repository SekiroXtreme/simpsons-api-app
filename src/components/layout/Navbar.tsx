import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4 flex gap-4 shadow-md">
      <Link to="/" className="font-bold hover:underline">
        Home
      </Link>
      <Link to="/episodes" className="hover:underline">
        Episodes
      </Link>
    </nav>
  );
}
