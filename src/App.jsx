import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="relative bg-white w-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
