import React, { useState } from 'react'
import classes from  './Css/Card.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Step1 from './Component/Step1';
import Step2 from './Component/Step2';
import Step3 from './Component/Step3';
import Step4 from './Component/Step4';
function Card() {
    const [page,setPage] = useState(0)
     
    const FormStep = ['step1','step2','step3' , 'step4']
 const nextpageHandler = ()=>{
        setPage((currpage)=>currpage + 1)
 } 
    const pageDisplay = () =>{
        if(page===0){
            return <Step1 nextpageHandler ={nextpageHandler }/>
        }else if(page===1){
          return <Step2 nextpageHandler ={nextpageHandler }/>
        }else if(page===2){
return <Step3/>
        }else if(page===3){
return <Step4/>
        }
    }
  return (
    <div  >
     <div className={classes.Card}>
          <div className={classes.back}><button disabled={page==0} onClick={()=>{setPage((currpage)=>currpage - 1)}}><ArrowBackIcon/> Back</button></div>

<div className={classes.progressbar}>
    <div  style={{width: page===0?"25%  ":page==1?"50%":page==2?'75%':"100%"}}></div>
</div>

<div>
  {pageDisplay()}  
</div>

    
       {/* <button type="submit" style={{width:'290px'}}   className="btn btn-primary btn-sm btn-block m-2 p-2" disabled={page===FormStep.length-1}  onClick={()=>{setPage((currpage)=>currpage + 1)}}  >Next</button>     */}
    </div>      
     </div>
  ) 
}

export default Card
