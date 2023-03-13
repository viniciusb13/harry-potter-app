import React from "react";
import './styles.css'
import hogwartsCrest from '../../assets/hogwartsCrest.png'

const Loading = () => {
  return (
    <div className="loadingPage">
      <img className="logo" src={hogwartsCrest} style={{ height: '350px', }} />
    </div>
  );
};

export default Loading;
