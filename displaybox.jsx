/* eslint-disable react/prop-types */
import styles from './displaybox.module.css'

function Display({display}){
    return(
        <div className={styles.center}>
    <input className={styles.box} value ={display} readOnly></input>
    </div>
    )
    
}
export default Display;