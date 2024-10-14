import React, { useState, useContext, useEffect } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import Search from "../searchbox/Search";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false); // State for mobile nav toggle
  const context = useContext(myContext); // Dark/Light mode context
  const { mode, toggleMode } = context;

  // Search handler function
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Add your search logic here
  };

  // Function to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false); // Close the mobile menu when switching to desktop view
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Nav list for all links
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <Link to={"/"} className="flex items-center">
          หน้าหลัก
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <Link to={"/allblogs"} className="flex items-center">
          บอร์ดสนทนา
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        
      </Typography>
    </ul>
  );

  return (
    <>
      {/* Main Navbar */}
      <Navbar
        className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
        style={{ background: mode === "dark" ? "#08437D" : "white" }}
      >
        {/* Desktop view (normal navbar) */}
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* Logo link */}
          <Link to={"/"}>
            <Typography
              as="a"
              className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
                alt="logo"
              />
              <span>Sontana</span>
            </Typography>
          </Link>

          {/* Right-side menu (nav links, search, profile) */}
          <div className="flex items-center gap-4">
            {/* Nav list hidden on mobile */}
            <div className="hidden lg:block">{navList}</div>


            {/* Create Post
            <div className="hidden lg:block justify-center">
              <button
                className={`flex p-2 border rounded-full 
        ${
          mode === "dark"
            ? "border-gray-500 bg-white hover:text-black"
            : "border-gray-500 bg-white hover:text-gray-500"
        }`}
                style={{ background: mode === "dark" ? "#08437D" : "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p>สร้างโพสต์</p>
              </button>
            </div> */}

            

            {/* Search component for desktop */}
            <div className="hidden lg:block ">
              <Search onSearch={handleSearch} />
            </div>

            {/* Admin profile avatar */}
            <Link to={"/dashboard"}>
              <Avatar
                src={"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
                alt="avatar"
                withBorder={true}
                className="p-0.5 text-red-500 w-10 h-10"
                style={{
                  border:
                    mode === "dark"
                      ? "2px solid rgb(226, 232, 240)"
                      : "2px solid rgb(30, 41, 59)",
                }}
              />
            </Link>

            {/* Dark/Light mode toggle button */}
            <IconButton
              onClick={toggleMode}
              className="lg:inline-block rounded-full"
              style={{ background: mode === "light" ? "#ced6e0" : "#57606f" }}
            >
              {mode === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </IconButton>

            {/* Mobile toggle button */}
            <IconButton
              className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              style={{ background: mode === "light" ? "#ced6e0" : "#57606f" }}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile view: Collapsible menu */}
        <Collapse open={openNav}>
          <div className="flex flex-col gap-4">
            {navList}
            {/* Search box for mobile view */}
            <div className="lg:hidden px-4">
              <Search onSearch={handleSearch} />
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
