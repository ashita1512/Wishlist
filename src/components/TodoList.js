import React, {useEffect, useState} from 'react';
import CreateWish from '../modals/CreateWish'
import Card from './Card';
import backgroundImage from '../components/gift.png';

const TodoList = () => {

   

    const [modal, setModal] = useState(false);
    const [wishList, setWishList] = useState([])
    
    useEffect(() => {
        //callback function
        let arr = localStorage.getItem("wishList")
       //now i have created this in string so i need to convert it back to array
        if(arr){
            let obj = JSON.parse(arr)
            setWishList(obj)
        }
    }, []) // passing this empty array because without this useEffect   will run every time 


   

    const deleteWish = (index) => {
        let tempList = wishList
        tempList.splice(index, 1)
        localStorage.setItem("wishList", JSON.stringify(tempList))
        setWishList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = wishList
        tempList[index] = obj
        localStorage.setItem("wishList", JSON.stringify(tempList))
        setWishList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveWish = (wishObj) => {
        let tempList = wishList
        tempList.push(wishObj)

        /*now whenever we create or add a wish we need these to be stored on the pages because on each refresh click it'll get vanished. so for this every web application is being stored in some storage available (we can have its access from inspect and then application right where console is located). Here i have used local storage. in short localStorage object allows you to save value pairs in the browser. */

        localStorage.setItem("wishList", JSON.stringify(tempList))
        setWishList(wishList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center" style={{background: `url(${backgroundImage})`}}>
                
                <h3 className='heading display-3 fw-normal'>💫 My Wishlist 💫</h3>
                <button 
                className = "btn btn-primary mt-2 shadow-1-strong rounded hover-overplay" 
                onClick = {() => setModal(true)} >
                    Add Wish
                </button>
                
            </div>

            <div className = "wish-container">
            
            {wishList && wishList
                .map((obj , index) => 
                  <Card  
                    wishObj = {obj} 
                    index = {index} 
                    deleteWish = {deleteWish} 
                    updateListArray = {updateListArray}
                   /> 
                )
            }
            </div>
            <CreateWish 
              toggle = {toggle} 
              modal = {modal} 
              save = {saveWish}/>
        </>
    );
};

export default TodoList;