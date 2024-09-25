import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`You searched for: ${searchQuery}`);  // Simple search alert, can be customized.
  };

  return (
    <nav className="bg-green-700 text-white p-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">CricketMania</a>

        {/* Search bar */}
        <div className="flex-grow mx-8 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-4 py-1 rounded-full text-black w-full"
          />
          <button onClick={handleSearch} className="bg-white text-green-700 p-2 rounded-full">
            {/* Search Icon - FontAwesome or simple SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.415l4.387 4.387a1 1 0 11-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 hidden md:block">
          <a href="#footer" className="hover:underline">About</a>
          <a href="#register" className="hover:underline">Register</a>
        </div>
      </div>
    </nav>
  );
}
