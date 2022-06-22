import React, {useState} from 'react';
import EditWish from '../modals/EditWish'

const Card = ({wishObj, index, deleteWish, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [checked, setChecked] = useState(false);

    //array of colors
    const colors = [
        {
            primaryColor : "#5D93E1", //darder color for edit and trash
            secondaryColor : "#ECF3FC" //lighter shade of above color for card heading 
        }      
       
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateWish = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteWish(index)
    }

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div class = "card-wrapper">

            <div class = "wish-holder">

                <span 
                  class = "card-header" 
                  style={{
                    "background-color": colors.secondaryColor, 
                    "border-radius": "10px"}}>

                  {wishObj.Name}

                </span>

                <p className = "mt-3">{wishObj.Description}</p>

                <div 
                  style={{
                    "position": "absolute", 
                    "right" : "10px", 
                    "bottom" : "10px"}}>

                    <i class = "fa fa-check-square-o mr-3"
                      style={{
                        "color" : colors.primaryColor,
                        "cursor" : "pointer"
                      }}
                      onClick = {() =>
                        setModal(true)
                    }
                     >
                    </i>
                    <i class = "far fa-edit fa-lg " 
                    style={{
                        "color" : colors.primaryColor, 
                        "cursor" : "pointer"}} 
                        onClick = {() => 
                            setModal(true)}>
                    </i>

                    <i class="fas fa-trash fa-lg" 
                    style = {{
                        "color" : colors.primaryColor, 
                        "cursor" : "pointer"}} 
                        onClick = {handleDelete}>
                    </i>
                    
                </div>
        </div>
        <EditWish modal = {modal} toggle = {toggle} updateWish = {updateWish} wishObj = {wishObj}/>
        </div>
    );
};

export default Card;