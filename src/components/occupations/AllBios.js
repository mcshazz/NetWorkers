import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blurb2 from '../Bio'
import Bio from '../Bio'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
export { AlainaBio, EdBio, FlorenceBio, Markbio, Bobbio, Albio }

/*Designers*/

 const AlainaBio = {
          firstName: "Alaina",
          lastName: "Toop",
          rating: "\u2B50 \u2B50",
          phone: "605 784 8001",
          email: "A.toop@alainadesign.com",
          job: "designer",
          cost: "$20 p/hour",
          blurb: "blurb1",
          socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,
          
        };

  const EdBio  = {
            firstName: "Edward",
            lastName: "Smith",
            rating: "\u2B50 \u2B50 \u2B50 \u2B50",
            phone: "086 779 0230",
            email: "eddys@gmail.com",
            job: "designer",
            cost: "$25 p/hour",
            blurb: "blurb2",
            socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,
          
          };

const FlorenceBio = {firstName: "Florence",

            lastName: "Johnson",
            rating: "\u2B50 ",
            phone: "778 768 9982",
            email: "florenceJ@gmail.com",
            job: "designer",
            cost: "$35 p/hour",
            blurb:"blurb3",
            socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,  
        
        }   
  

  /*Builders*/

 const Markbio = {
          firstName: "Mark",
          lastName: "Doe",
          rating: "\u2B50 \u2B50",
          phone: "605 784 8001",
          email: "Mark@gmail.com",
          job: "builder",
          cost: "$20 p/hour",
          blurb: 'blurb3',
          socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
  
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,   
        } 

const Bobbio = {
          firstName: "Bob",
            lastName: "Smith",
            rating: "\u2B50 \u2B50 \u2B50 \u2B50",
            phone: "086 779 0230",
            email: "bob@gmail.com",
            
          job: "builder",
          cost: "$25 p/hour",
          blurb: 'blurb2',
          socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
  
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,   
        } 

const Albio = {firstName: "Alan",
            lastName: "Johnson",
            rating: "\u2B50 ",
            phone: "778 768 9982",
            email: "al@gmail.com",
            job: "builder",
          cost: "$35 p/hour",
          blurb: 'blurb3',
          socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
  
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,  


          }



                  