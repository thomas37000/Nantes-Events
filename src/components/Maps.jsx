/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DivMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .map {
    height: 650px;
    width: 750px;
  }
`;

const myIcon = L.icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, 41],
});

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaflet: [],
      lat: 47.213792,
      lng: -1.555784,
      zoom: 10,
    };
    this.getMap = this.getMap.bind(this);
  }

  componentDidMount() {
    this.getMap();
  }

  getMap() {
    const { id } = this.props.match.params;
    axios
      .get(
        `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&refine.recordid=${id}`
      )
      .then((response) => {
        this.setState({
          leaflet: response.data.records[0].fields,
        });
      });
  }

  render() {
    const { leaflet, lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <DivMap>
        <MapContainer className="map" center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://
osm.org/copyright">OpenStreetMap</a> 
contributors'
            url="https://{s}.tile.openstreetmap.org/
{z}/{x}/{y}.png"
          />
          <Marker position={leaflet.location} icon={myIcon}>
            <Popup>{leaflet.emmeteur}</Popup>
          </Marker>
        </MapContainer>
      </DivMap>
    );
  }
}

export default Maps;