/* eslint-disable */
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Topbar({sidebar, setSidebar}) {

  return (
    <div className="flex justify-between items-center w-full h-full px-4">
      <div
        className={`bg-gray-700 hover:bg-gray-900 rounded-full p-0.5 cursor-pointer ${sidebar === "close" && "transform scale-x-[-1]"} transition-all ease-in-out duration-300`}
        onClick={()=> sidebar === "open" ? setSidebar("close") : setSidebar("open")}
      >
        <ArrowCircleLeftIcon style={{ fontSize: "30px", color: "#fff" }} />
      </div>
      <div className="bg-gray-700 hover:bg-gray-900 rounded-full p-0.5 cursor-pointer transition-all ease-in-out duration-300">
        <AccountCircleIcon style={{ fontSize: "30px", color: "#fff" }} />
      </div>
    </div>
  );
}

export default Topbar;
