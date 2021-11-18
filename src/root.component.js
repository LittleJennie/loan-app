
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoanAppPage from "./loan-application-page/loan-application.component.js";

export default function Root(props) {
  return (
    // <section>{props.name} is mounted!</section>
    <BrowserRouter>
      <Routes>
        <Route path="/loan-application" element={LoanAppPage} />
      </Routes>
    </BrowserRouter>
  );
}
