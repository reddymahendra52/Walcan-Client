import { Popup } from "semantic-ui-react";
import React from "react";



function MyPopup({content, childern}){
    return <Popup inverted content={content} trigger={childern}/>
}


export default MyPopup;