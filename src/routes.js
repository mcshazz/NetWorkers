import React from "react";
import { Route } from 'react-router-dom'
import  Builders  from './components/builders/Builders.js'
import CGallery  from './components/CGallery'
import About  from './components/Otherpgs/About.js'
import Contact from  './components/Otherpgs/Contact.js'



export default [

<Route key="home" exact path="/" component={CGallery} />,
          
            <Route key="about" path="/about" component={About} />,
            <Route key="contact" path="/contact" component={Contact} />,
            
            <Route key="builders" path="/builders" component={Builders} />

            ]