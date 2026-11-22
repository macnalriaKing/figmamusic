import "./App.css";
import FreeView from "./components/Freeview/Index";
import Header from "./components/Header/Index";
import Home from "./components/Home/Index";
import SideBar from "./components/Sidebar/Index";
import StorageBox from "./components/StorageBox/StorageBox";

function App() {
  return (
    <div className="uiSplit">
      <div className="onlySidebar">
        <SideBar />
      </div>
      <div className="changeUI">
        <Header />
        <Home />
        <FreeView />
        <StorageBox />
      </div>
    </div>
  );
}

export default App;
