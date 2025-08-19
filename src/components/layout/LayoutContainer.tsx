import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutContainer() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
