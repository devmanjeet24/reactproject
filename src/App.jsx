import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Post from './Component/Post';
import Rightbar from './Component/Rightbar';
import { data, data2 } from './Component/Data';
const App = () => {

  const [bgColor, SetbgColor] = useState('#232d3f');
  const [color, setColor] = useState('white');

  const [toggle, SetToggle] = useState(true);

  const ToggleButton = () => {
    SetToggle(!toggle);
    if(toggle){
      SetbgColor("rgb(255, 255, 255)");
      setColor("black");
      document.querySelector('body').style.backgroundColor = "#cbc5c5";
    }else{
      SetbgColor("#232d3f");
      setColor("white");
      document.querySelector('body').style.backgroundColor = "black";
    }
  }

  return (
    <>
      <Navbar bgColor = {bgColor} color = {color} ToggleButton = {ToggleButton} toggle = {toggle}/>
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor = {bgColor} color = {color} />
        </div>
        <div className="Post_section">

          {
            data.map((d) => (
              <Post key={d.id} Datasd={d} bgColor = {bgColor} color = {color}/>
            ))
          }



        </div>
        <div className="right_bar">

          {
            data2.map((dta) => (
              <Rightbar key = {dta.id} datasec = {dta} bgColor = {bgColor} color = {color}/>
            ))
          }


        </div>
      </div>
    </>
  )
}

export default App;