import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="text-white p-8 max-w-lg m-auto">
      <h1 className="text-3xl text-center mb-4">Projeto Github</h1>
      <Outlet />
    </div>
  );
};

export default App;
