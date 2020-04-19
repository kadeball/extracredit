import React from 'react';
import Button from "@material-ui/core/Button";
import Buttons from "../components/Buttons";
import "../styles.css"


function CoolPerson(props){

    let styling = {
        fontSize: props.number,
        margin: "25px"
    };

        if(true === props.coolness){
            styling = {
                fontSize: props.number,
                fontFamily: "times new roman",
                color:"pink",
                margin: "25px",
            };
        }



    function returnText(name){
        if(name.length > 5){
            return "I am a long name";
        }
    }

    const deleteObj = (e) => {
        props.deleteObj(props.id);
    };




    return (
        <div className="coolPerson" style={styling}>
            <p>{props.name}</p>
            <p>{returnText(props.name)}</p>
            <Button onClick={deleteObj}> Delete </Button>
            <Buttons />
        </div>
    );

}

export default CoolPerson;