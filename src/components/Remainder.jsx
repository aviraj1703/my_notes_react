import React, { useState } from "react";
import Header from './Header';
import Create_note from './Create_note';
import Note from './Note';
// import Footer from './Footer';

const Apps = () => {
    const [AddItems, setItems] = useState([]);
    const AddNote = (note) => {
        // alert("Note will be added :)");
        if(note.title === "" && note.content === "") {
            alert("Note is empty :(");
            return;
        }
        setItems((pre_val) => {
            return [...pre_val, note];
        })
    }
    const onDelete = (id) => {
        setItems((pv) => 
            pv.filter((cd, index) => {
                return index !== id;
            })
        )
    }
    return(
            <>
                <Header/>
                <Create_note pass_note = {AddNote}/>
                <div className="container">
                    {AddItems.map((val, index) => {
                        return (
                            <Note
                                key = {index}
                                id = {index}
                                title = {val.title}
                                content = {val.content}
                                deleteItem = {onDelete}
                            />
                        );
                    })}
                </div>
                {/* <Footer/> */}
            </>
    );
}

export default Apps;