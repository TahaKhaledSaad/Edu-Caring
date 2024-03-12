import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import TopBar from "../topBar/TopBar";

export default function Home() {
  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="outlet p-2">
        <Outlet />
      </div>
    </div>
  );
}
