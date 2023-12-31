import React,{useContext} from 'react'
import { AlertContext } from '../context/NoteContext'
function Alert() {
    const context = useContext(AlertContext);
    const { alert} = context;
    return (
        <div className="container"style={{height: '60px'}}>
        {alert && <div id="alert" className={`alert alert-${alert.type} alert-dismissible fade show fixed-top `} role="alert">
        {alert.msg} 
        </div>}
        </div>
    )
}

export default Alert