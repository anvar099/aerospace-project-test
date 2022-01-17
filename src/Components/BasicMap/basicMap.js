import React from "react";
import "./styles.css";
import { FiEdit } from "react-icons/fi";
import { BiSearch, BiPolygon } from "react-icons/bi";
import { BsJournalArrowUp } from "react-icons/bs";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";

const BasicMap = () => {
  const center = [42.032974, -93.581543];
  return (
    <div className="mapContainer">
      <div className="toolBarContainer">
        <div className="toolBarTop">
          <div>
            <FiEdit className="toolIcon" />
          </div>
          <div className="toolBarTitle">Мои поля</div>
          <div>
            <BiSearch className="toolIcon" />
          </div>
        </div>
        <div className="selectContent">
          <select class="formSelect" aria-label="Default select example">
            <option className="selectOption" selected>
              Все категории
            </option>
            <option className="selectOption" value="1">
              One
            </option>
            <option className="selectOption" value="2">
              Two
            </option>
            <option className="selectOption" value="3">
              Three
            </option>
          </select>
          <BsJournalArrowUp className="toolIcon" />
        </div>
        <div className="polygonContent">
          <div className="polygonData">
            <div className="polygonSelected">
              <BiPolygon />
            </div>
            <div className="polygonInfo">
              <div className="itemNum">Поле #123</div>
              <div className="itemName">Нет культуры</div>
              <div className="itemActivity">Выброс</div>
            </div>
            <div className="polygonNum">0.03</div>
          </div>
          <div className="polygonData">
            <div className="polygonSelected">
              <BiPolygon />
            </div>
            <div className="polygonInfo">
              <div className="itemNum">Поле #123</div>
              <div className="itemName">Пшеница твердая</div>
              <div className="itemActivity">Выброс</div>
            </div>
            <div className="polygonNum">0.03</div>
          </div>
          <div className="polygonData">
            <div className="polygonSelected">
              <BiPolygon />
            </div>
            <div className="polygonInfo">
              <div className="itemNum">Поле #123</div>
              <div className="itemName">Пшеница твердая</div>
              <div className="itemActivity">Выброс</div>
            </div>
            <div className="polygonNum">0.03</div>
          </div>
        </div>
        <div className="toolBarBtnBox">
          <button className="toolBarBtn">+ Добавить поле</button>
        </div>
      </div>
      <div>
        <MapContainer center={center} zoom={6} className="map">
          <TileLayer
            url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=BjewBud1wuvZMMJOjzyy"
            attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {statesData.features.map((state) => {
            const coordinators = state.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);
            return (
              <Polygon
                pathOptions={{
                  fillColor: "#fd8d3c",
                  fillColor: 0.7,
                  weight: 2,
                  opacity: 1,
                  // dashArray: 3,
                  color: "green",
                }}
                positions={coordinators}
                eventHandlers={{
                  click: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 1,
                      dashArray: "1",
                      color: "green",
                      fillColor: "rgb(14, 100, 64)",
                    });
                  },
                }}
              />
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default BasicMap;
