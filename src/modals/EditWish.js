import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditWishPopup = ({modal, toggle, updateWish, wishObj}) => {
    const [wishName, setWishName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "wishName"){
            setWishName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setWishName(wishObj.Name)
        setDescription(wishObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = wishName
        tempObj['Description'] = description
        updateWish(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Wish</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Wish Name</label>
                        <input type="text" className = "form-control" value = {wishName} onChange = {handleChange} name = "wishName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditWishPopup;