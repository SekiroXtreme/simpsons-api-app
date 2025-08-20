import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutContainer() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
