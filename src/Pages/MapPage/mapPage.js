import React from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar/navbar";
import BasicMap from "../../Components/BasicMap/basicMap";

const MapPage = () => {
  return (
    <div className="row">
      <Navbar />
      <BasicMap />
    </div>
  );
};

export default MapPage;
