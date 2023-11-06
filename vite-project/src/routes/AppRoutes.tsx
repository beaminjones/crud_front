import { Routes, Route } from "react-router-dom";
import { Form } from "../components/Form";
import { Clients } from "../components/Clients";
import { Home } from '../components/Home';
import { Edit } from "../components/Edit";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
}
