import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="App font-base">
      <Navbar setSideBarOpen={setSideBarOpen} />
      {sideBarOpen && <Sidebar setSideBarOpen={setSideBarOpen} />}
    </div>
  );
}

export default App;
