// When BubblePages mounts, make a GET request to fetch the color data for your bubbles.
// When the component mounts, make an axios call to retrieve all color data and push to state.

import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth 
      .get(`http//localhost:5000/api/colors`)
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {

      })
  }, []) 

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;