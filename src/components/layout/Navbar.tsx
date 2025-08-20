import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Clapperboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 p-4 shadow-md relative">
      <div className="flex justify-between items-center">
        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links en escritorio */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="hover:text-black/70 transition-colors"
            title="Home"
          >
            <Home size={30} />
          </Link>
          <Link
            to="/episodes"
            className="hover:text-black/70 transition-colors"
            title="Episodes"
          >
            <Clapperboard size={30} />
          </Link>
        </div>
      </div>

      {/* Dropdown en móvil con animación */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-1/2 h-screen bg-yellow-300 shadow-lg p-3 flex flex-col gap-6 md:hidden z-50"
            >
              <button
                className="self-end"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              <Link
                to="/"
                className="flex bg-white p-2 w-[45vw] rounded-md items-center gap-2 text-lg font-semibold hover:text-black/70 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home size={22} /> Home
              </Link>
              <Link
                to="/episodes"
                className="flex bg-white p-2  w-[45vw] rounded-md items-center gap-2 text-lg font-semibold hover:text-black/70 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Clapperboard size={22} /> Episodes
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
