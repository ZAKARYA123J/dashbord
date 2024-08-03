import { faPage4, faWindows,faServicestack } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef
  
} from "@fortawesome/free-solid-svg-icons";
import { GrServices } from "react-icons/gr";
const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },

  // {
  //   label: "Blank",
  //   path: "/blank",
  //   icon: faPage4,
  // },
  // {
  //   label: "404",
  //   path: "/404",
  //   icon: faNotdef,
  // },
  {
    label:"Service",
    path:"/service",
    icon:faServicestack
  },

  // {
  //   label: "Insert",
  //   path: "/form",
  //   icon: faWindows,
  // },
  {
    label: "Membres",
    path: "/table",
    icon: faTable,
  },
  {
    label:"Abooner",
    path:"/abonner"
  }


  // {
  //   label: "Login",
  //   path: "/auth/login",
  //   icon: faLock,
  // },
  // {
  //   label: "Register",
  //   path: "/auth/register",
  //   icon: faNoteSticky,
  // },
];

export default initMenu