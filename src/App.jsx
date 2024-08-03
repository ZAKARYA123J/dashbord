import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import Blank from "./pages/Blank";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import RegisterIndex from "./pages/auth/Register";
import Service from "./pages/Service";
import ServiceList from "./pages/ServiceListe";
import CreateMembreForm from "./pages/Membreinsert";
// import Inscription from "./pages/Inscription";
import Abone from "./pages/Abone";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/profile" element={<Blank />}></Route>
        <Route path="/service" element={<ServiceList/>}/>
        {/* <Route path="/inscription" element={<Inscription/>}/> */}
        {/* <Route path="/listeservice" element={<ServiceList/>} /> */}
        <Route path="/create" element={<CreateMembreForm/>}/>
        <Route path="/abonner" element={<Abone/>}/>
      </Route>
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegisterIndex />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
