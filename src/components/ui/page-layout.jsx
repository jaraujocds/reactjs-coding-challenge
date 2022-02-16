import React from "react";
import Header from "./header";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-100">
      <Header />

      {/* header height is 6rem */}
      <div className="flex-1 p-5 h-screen min-h-[calc(100vh-6rem)]">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
