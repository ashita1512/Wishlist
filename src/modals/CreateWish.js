import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateWish = ({modal, toggle, save}) => {
    //destructured popup names

    const [wishName, setwishName] = useState('');
    const [description, setDescription] = useState('');

    //handleChange function to type whats inside those input boxes
    const handleChange = (e) => {
        
        const {name, value} = e.target

        /*written in one line shortcut 
          const name = e.target.name
          const value = e.target.value*/

        if(name === "wishName"){
            setwishName(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let wishObj = {}  //object
        //properties
        wishObj["Name"] = wishName
        wishObj["Description"] = description
        save(wishObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Wish</ModalHeader>
            <ModalBody>
              <form>
                    <div className = "form-group">
                        <input 
                          type="text" 
                          className = "form-control" 
                          value = {wishName} 
                          onChange = {handleChange} //to type whats inside those input boxes
                          name = "wishName" 
                          placeholder='Wish'/>
                    </div>
                    <br></br>
                    <div className = "form-group">
                        <textarea 
                          rows = "3" 
                          className = "form-control" 
                          value = {description} 
                          onChange = {handleChange} 
                          name = "description" 
                          placeholder='Source'>
                        </textarea>
                    </div>
              </form>
            </ModalBody>
            <ModalFooter>
            <Button 
              color="primary" 
              onClick={handleSave}>
                Add
            </Button>
              {' '}
            <Button 
              color="secondary" 
              onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateWish;