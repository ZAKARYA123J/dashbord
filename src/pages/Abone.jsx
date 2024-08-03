import React from 'react'
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar/Index";
function Abone() {
    const [sidebarToggle] = useOutletContext();
  return (
    <div>
        <Navbar toggle={sidebarToggle} />
        <table style={{border:"1px solid black"}}>
            <thead>
                <th>ID</th>
                <th>Membre</th>
                <th>Type abonner</th>
                <th>date abonner</th>
            </thead>
            <tbody>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tbody>
        </table>
    </div>
  )
}

export default Abone