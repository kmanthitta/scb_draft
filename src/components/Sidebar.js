import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiAppstore } from "react-icons/si";
import SvgIcon from "@mui/material/SvgIcon";
import { Link, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

const items = [
  { name: "Products", icon: <MdProductionQuantityLimits />, link: "products" },
  { name: "Custom Apps", icon: <SiAppstore />, link: "customApps" },
  { name: "Productss", icon: <MdProductionQuantityLimits />, link: "" },
  { name: "Custom Apps", icon: <SiAppstore />, link: "" },
];

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  const [section, setSection] = useState(
    window.location.pathname.split("/")[1]
      ? window.location.pathname.split("/")[1]
      : "products"
  );

  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  const changeSection = (value) => {
    setSection(value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ width: isOpen ? "30vw" : "5vw", opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden sm:flex h-screen bg-slate-800 text-white flex-col"
      >
        <div className="flex justify-evenly p-4 text-white h-15 items-center">
          {isOpen && (
            <Typography>
              <h5>MOSAIC</h5>
            </Typography>
          )}
          {isOpen ? (
            <HiChevronDoubleLeft
              onClick={() => toggleSidebar()}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <HiChevronDoubleRight
              onClick={() => toggleSidebar()}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          {items.map((x) => (
            <Link to={`/${x.link}`}>
              <div
                className={`flex p-2 items-center ${
                  x.link === section
                    ? "border-r-4 border-r-white border-solid bg-gray-600"
                    : "border-r-4 border-r-transparent border-solid"
                } ${!isOpen ? "justify-center" : ""}`}
                onClick={() => changeSection(x.link)}
              >
                <SvgIcon fontSize="small">{x.icon}</SvgIcon>
                {isOpen && (
                  <Typography>
                    <p className="ml-2 text-xs lg:text-md 2xl:text-xl">
                      {x.name}
                    </p>
                  </Typography>
                )}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
      <Outlet />
    </>
  );
};

export default Sidebar;
