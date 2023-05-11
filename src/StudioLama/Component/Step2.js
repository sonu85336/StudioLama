import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../Css/Step2.module.css";
import "../Css/step2active.css";
const childSymptomsList = [
  {
    id: "childSymptomsList01",
    icon: "symptoms01",
    activeIcon: "symptoms07",
    name: "Speech and Communication",
    info: "Difficulty in speaking, stutters, stammers...",
  },
  {
    id: "childSymptomsList02",
    icon: "symptoms02",
    activeIcon: "symptoms08",
    name: "Food and Nutrition",
    info: "Underweight child, food allergies, picky eater...",
  },
  {
    id: "childSymptomsList03",
    icon: "symptoms03",
    activeIcon: " symptoms09",
    name: "Developmental Issues",
    info: "Premature birth, ADHD, Autism...",
  },
  {
    id: "childSymptomsList04",
    icon: "symptoms04",
    activeIcon: " symptoms10",
    name: "Skin, Allergies, Sleep etc.",
    info: "Rashes, acne, distrubed sleep, dry skin...",
  },
  {
    id: "childSymptomsList05",
    icon: " symptoms05",
    activeIcon: " symptoms11",
    name: "Gross Motor and Movement",
    info: "Crawling, walking, jumping, catching...",
  },
  {
    id: "childSymptomsList06",
    icon: "symptoms06",
    activeIcon: "symptoms12",
    name: "Behavior and Social",
    info: "Cries a lot, tantrums, pinches, bites...",
  },
];

function Step2(props) {
   
 
  const [selectedindex, setSelectedIndex] = useState([]);
  
  const dataadd = (item, index) => {
     

    
if(selectedindex.some((select)=>select.id===item.id)){
  setSelectedIndex(selectedindex.filter((selectitem)=>selectitem.id !== item.id))
}

else{
  setSelectedIndex([...selectedindex,item])
}

  };
  
    console.log(selectedindex, "from  selective index");
  return (
    <div className="container">
      <h5>Alice needs help with...</h5>
      <div>
        {childSymptomsList.map((item, index) => (
          <li
            key={item.id}
            style={{ listStyle: "none" }}
            

            className={`${classes.card}  ${
              selectedindex.some((selectitem)=>selectitem.id=== item.id) ? classes.item : ""
            }`}
            onClick={() => dataadd(item, index)}
          >
            <div>
              <h6>{item.name}</h6>
              <small>{item.info}</small>
            </div>
          </li>
        ))}
      </div>

      <button
        type="submit"
        style={{ width: "290px" }}
        className="btn btn-primary btn-sm btn-block"
        onClick={props.nextpageHandler}
        disabled={ selectedindex.length == 0}
      >
        Next
      </button>
    </div>
  );
}

export default Step2;
