import React,{useContext} from 'react'
import { AlertContext } from '../context/CreateContext'
function Alert() {
    const context = useContext(AlertContext);
    const { alert} = context;
    return (
        <div>
        {alert && <div id="alert" className={` alert alert-${alert.type} alert-dismissible fade show fixed-top text-center `} role="alert">
        {alert.msg} 
        </div>}
        </div>
    )
}

export default Alert