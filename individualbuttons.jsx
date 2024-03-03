/* eslint-disable react/prop-types */
let Buttons = ({onbuttonclick}) =>{
    let buttonnames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    return(
        <>
    {buttonnames.map((item)=>(
        <button key = {item} onClick = {onbuttonclick}>{item}</button>
      ))}
      </>
    )
}
export default Buttons;

