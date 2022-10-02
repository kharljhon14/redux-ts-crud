import React from "react";

interface props {
   children: React.ReactNode;
}

const Main = ({ children }: props) => {
   return <div className="main">{children}</div>;
};

export default Main;
