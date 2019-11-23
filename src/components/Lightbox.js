import React from "react";
import  Markphotos  from "../pics/Markphotos";
import { Bobphotos } from "../pics/Bobphotos";
import  Alphotos from "../pics/Alphotos";
import Galrender from './Galrender'

function Lightbox(props) {
  const iswho = props.iswho;
  
  

  if (iswho === "Mark") {
    return (
      <Galrender iswhom={Markphotos}/>
    );
  } else if (iswho === "Bob") {
    return (
      <Galrender iswhom={Bobphotos}/>
    );
  } else if (iswho === "Alan") {
    return (
      <Galrender iswhom={Alphotos}/>
    );
  }
}
export default Lightbox;


// originally I had copied/pasted the Lightbox code in here, then rather than copy/paste it over and over 
// and changing (if iswho ==="Mark" or "Bob") etc every time, i just made it a component <Galrender /> and am using props so it knows which
// photos to render for each person
// 