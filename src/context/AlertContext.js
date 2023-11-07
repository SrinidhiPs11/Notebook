import { useState } from "react";
import { AlertContext } from "./NoteContext";

const AlertProvider = ({ children })=>{
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    }) 
    setTimeout(() => {
        setAlert(null);
    }, 3000);
}
return (
    <AlertContext.Provider value={{ alert, setAlert , showAlert }}>
        {children}
    </AlertContext.Provider>
)
}
export default AlertProvider