import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { db } from '../../firebase'; // Import the initialized Firebase
// import { collection, query, where, getDocs } from 'firebase/firestore';
import myContext from "../../context/data/myContext";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(myContext);
  const { mode } = context;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        // Query Firestore for the search term
        const q = query(
          collection(db, "yourCollectionName"),
          where("yourFieldName", "==", searchQuery)
        );
        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        console.log("Search results:", results);
        // You can use results as needed, for example:
        onSearch(results);
        setSearchQuery("");
        setIsOpen(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  return (
    <div>
      {/* Mobile view */}
      <div className="lg:hidden flex items-center justify-center">
        <form
          onSubmit={handleSearch}
          className="flex items-center space-x-4 bg-white rounded-lg shadow-lg w-full max-w-"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="กำลังค้นหาเรื่องอะไร..."
            className={`border rounded-lg p-2 w-full ${
              mode === "dark" ? "bg-white text-white" : "bg-gray-100 text-black"
            }`}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            ค้นหา
          </button>
        </form>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md  hover:bg-gray-200 focus:outline-none transition-colors duration-300 ease-in-out transform hover:scale-105"
          aria-label="Search"
        >
          <AiOutlineSearch
            size={24}
            style={{ color: mode === "dark" ? "white" : "black" }}
          />
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-30">
            <form
              onSubmit={handleSearch}
              className={`flex items-center space-x-4 rounded-lg p-4 shadow-lg w-full max-w-lg ${
                mode === "dark"
                  ? "bg-transparent text-white"
                  : "bg-white text-black"
              }`}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="กำลังค้นหาเรื่องอะไร..."
                className={`border rounded-lg p-2 w-full ${
                  mode === "dark"
                    ? "bg-white text-black"
                    : "bg-gray-100 text-black"
                }`}
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg"
              >
                <AiOutlineSearch size={20} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 flex items-center justify-center text-red-600 hover:text-red-800 p-2 transition-all duration-300 ease-in-out"
                aria-label="Close"
              >
                <span className="text-xl font-bold">✖</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
