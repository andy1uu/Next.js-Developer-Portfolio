import React from "react";

const Layout = ({ children, className = "" }) => {
  return <section className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>{children}</section>;
};

export default Layout;
