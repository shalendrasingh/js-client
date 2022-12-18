import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AddVendorForm } from "./pages/AddVendorForm";
import { EditVendorForm } from "./pages/EditVendorForm";
import { Home } from "./pages/Home";
import Snackbar from "./components/Snackbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Snackbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createvendor" element={<AddVendorForm />} />
        <Route path="/editvendor/:id" element={<EditVendorForm />} />
      </Routes>
    </div>
  );
}

export default App;
