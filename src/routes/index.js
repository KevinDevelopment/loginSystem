import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ListOfUsers from "../pages/users/users";
import RegisterNewUser from "../pages/newuser/newUser";
import ChangeUserData from "../pages/changeuserdata/changeuserdata";

export default function Rounting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<ListOfUsers />} />
        <Route path="/register/user" element={<RegisterNewUser />} />
        <Route path="/change/user/:id" element={<ChangeUserData />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
