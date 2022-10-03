import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface props {
   children: React.ReactNode;
}

const Main = ({ children }: props) => {
   return (
      <div className="main">
         {children}
         <ToastContainer bodyClassName="toastBody" />
      </div>
   );
};

export default Main;
