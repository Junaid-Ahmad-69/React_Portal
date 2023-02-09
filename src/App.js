import React, {useState} from "react";
import Modal from "./Modal"


const Button_Wrapper = {
    position: "relative",
    zIndex: 1,
    cursor: "pointer"
}
const Heading = {
    textAlign: "center"
}

const Content = {
    position: "relative",
    zIndex: 2,
    backgroundColor: '#690fad',
    padding: "10px",
}


const App = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div onClick={()=>console.log("clicked")}>
            <div style={Heading}><h1>Portals Modals</h1></div>
            <button onClick={() => setOpen(true)} style={Button_Wrapper}>Open Modal</button>

            <Modal open={isOpen} onClose={() => setOpen(false)}>Modal Open</Modal>

            <div style={Content}>Open Content</div>

        </div>
    )
}
export default App