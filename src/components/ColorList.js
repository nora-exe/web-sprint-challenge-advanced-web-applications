// In ColorList.js, complete the saveEdit and deleteColor functions to make API requests for to editing and delete data
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.

import React, { useState } from "react";
// import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import Color from "./Color";
import EditMenu from "./EditMenu";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  // const { push } = useHistory();

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth
      .put(`http//localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        // updateColors(...colors, colors.filter(item => (item.id !== Number(id))))
      })
      .catch(err => {
        console.log(err.response);
      })

  };

  const deleteColor = color => {
    axiosWithAuth
      .delete(`http//localhost:5000/api/colors/${color.id}`)
      .then(res => {
        updateColors(colors.filter(item => (item.id !== Number(color.id))))
        console.log("Color deleted.");
      })
      .catch(err => {
        console.log(err.response);
      })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;