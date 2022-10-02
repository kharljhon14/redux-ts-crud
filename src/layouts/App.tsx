import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../components/Form";
import Table from "../components/Table";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
   return (
      <div className="app">
         <BrowserRouter>
            <Header />
            <Main>
               <Routes>
                  <Route path="/" element={<Table />} />
                  <Route path="/form" element={<Form />} />
               </Routes>
            </Main>
         </BrowserRouter>
      </div>
   );
};

export default App;
