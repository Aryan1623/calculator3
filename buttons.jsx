/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import styles from './buttons.module.css';
import Display from '../components/displaybox';
import Buttons from './individualbuttons';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { useState } from 'react';
function Button(){
 
    let [calval,setState] = useState("");
    const onbuttonclick = (e) =>{
    if(e.target.innerText === "C"){
     setState("");
    }
    else if(e.target.innerText === "="){
     const result = eval(calval);
     setState(result);
    }
    else{
      const newval = calval+e.target.innerText;
      setState(newval);
    }
    }

    
    
   
  return(
      
        <>
        <div className= {styles.center}>
      <div className = {styles.buttons}>
        <Display display = {calval}></Display>
      
        <div className = {`${styles["threebuttons"]} list-group-item`}>
          <Buttons onbuttonclick ={(e)=>{onbuttonclick(e)}}></Buttons>
            
          
        </div>
        
        

      </div>
      </div>

</>
)
}
export default Button;