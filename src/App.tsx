import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="text-white p-8">
      <h1 className="text-3xl">Projeto Github</h1>
      <Outlet />
    </div>
  );
};

export default App;
