import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-indigo-300" : "text-pink-200";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-purple-300 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-400 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;