import "./App.css";
import FreeView from "./components/Freeview/Index";
import Header from "./components/Header/Index";
import Home from "./components/Home/Index";
import { SideBar } from "./components/Sidebar/Index";
import StorageBox from "./components/StorageBox/Index";
import { useState } from "react";
import PlayerBar from "./components/PlayerBar/Index";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="layOut">
      <div className="uiSplit">
        <div className="onlySidebar">
          <SideBar activeTab={activeTab} onSelectTab={setActiveTab} />
        </div>
        <div className="changeUI">
          <Header activeTab={activeTab} onSelectTab={setActiveTab} />

          {activeTab === "home" && <Home />}
          {activeTab === "freeView" && <FreeView />}
          {activeTab === "storageBox" && <StorageBox />}
        </div>
      </div>
      <PlayerBar />
    </div>
  );
}

export default App;
