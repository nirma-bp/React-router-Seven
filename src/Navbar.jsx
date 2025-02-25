import React, { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">My Website</h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-yellow-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 mt-2 p-4 space-y-2">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Users
            </Link>
          </li>
          <br />
          <br />
          <li>
            <Link
              to="/users"
              className="hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              View All Users
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
