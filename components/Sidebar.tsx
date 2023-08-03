import Card from "./Card";
import Image from "next/image";
// import logo from "@/assets/images/logo.png";
import SidebarLink from "./SidebarLink";

export interface Tlink{
    label:string,
    icon:"Settings"| "User"| "Grid"| "Calendar",
    urlLink:string
}
const links:Tlink[] = [
  { label: "Home", icon: "Grid", urlLink: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    urlLink: "/calendar",
  },
  { label: "Profile", icon: "User", urlLink: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    urlLink: "/settings",
  },
];



const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        {/* <Image src={logo} alt="Able logo" priority className="w-14" /> */}
      </div>
      {links.map((link) => (
        <SidebarLink link={link}/>
      ))}
    </Card>
  );
};

export default Sidebar;
