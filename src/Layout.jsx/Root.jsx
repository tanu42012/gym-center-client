import { Outlet } from "react-router-dom";
import Header from "../Component/Header";


const Root = () => {
  return (
    <div className="gap-4">
      <Header></Header>
      <div className="gap-4 space-x-12">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;