/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BIBLIOITEM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 1rem;
  padding: 0.5rem;
  width: auto;
  height: auto;
  font-family: Roboto, sans-serif;
  background-color: #c4c4c4;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;

  .SyntheticTimetable {
    width: 7.5rem;
    font-size: 1rem;
    text-align: center;
  }

  .SyntheticTimetable h3 {
    font-size: 14px;
    margin: 0.5rem;
  }

  .SyntheticCategory h4,
  .SyntheticLocation h4,
  .SyntheticAddress h4 {
    font-size: 12px;
    margin: 0.25rem;
  }

  .SyntheticName h4 {
    color: red;
    font-size: 14px;
    margin: 0.25rem;
  }

  span.free {
    margin: 0.5 0 rem;
    color: red;
  }

  .horaire {
    font-size: 14px;
  }

  .SyntheticPrice h4 {
    font-size: 12px;
    margin: 0.25rem;
  }

  .SyntheticPhoto {
    margin: auto;
    max-width: 15rem;
    height: auto;
    margin: 1rem;
  }

  .SyntheticPrice {
    width: auto;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 1rem;
    max-width: 50rem;
    height: auto;
    background-color: #c4c4c4;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 0.75em;

    .SyntheticTimetable {
      font-size: 1rem;
      width: 7rem;
    }
    .SyntheticPhoto {
      width: 9rem;
      height: auto;
    }
    .SyntheticInformation {
      width: 18rem;
      height: auto;
      margin: 1rem;
    }

    .SyntheticPrice {
      width: 7rem;
      margin: 1rem;
      text-align: center;
    }
  }
`;

class BiblioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  render() {
    const {
      categorie_1: category,
      nom: name,
      media_1: media,
      date: eventdate,
      heure_debut: beginning,
      heure_fin: end,
      lieu: location,
      adresse: address,
      ville: city,
      gratuit: free,
      precisions_tarifs: price,
    } = this.props;
    return (
      <div>
        <BIBLIOITEM>
          <div className="SyntheticTimetable">
            <h3>{eventdate}</h3>
            <span className="horaire">
              {beginning} - {end}
            </span>
          </div>
          <img className="SyntheticPhoto" src={media} alt={name} />
          <div className="SyntheticInformation">
            <div className="SyntheticCategory">
              <h4>Catégorie : {category}</h4>
            </div>
            <div className="SyntheticName">
              <h4>{name}</h4>
            </div>
            <div className="SyntheticLocation">
              <h4>Lieu : {location}</h4>
            </div>
            <div className="SyntheticAddress">
              <h4>Adresse : {address}</h4>
              <h4>Ville : {city}</h4>
            </div>
          </div>
          <div className="SyntheticPrice">
            <h4>Tarif : {price}</h4>
            <span className="free">
              {free === 1 ? <strong>Gratuit</strong> : ''}
            </span>
          </div>
        </BIBLIOITEM>
      </div>
    );
  }
}

BiblioItem.propTypes = {
  active: PropTypes.bool.isRequired,
  id_manif: PropTypes.string.isRequired,
  categorie_1: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  heure_fin: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  adresse: PropTypes.string.isRequired,
  precisions_tarifs: PropTypes.string.isRequired,
  gratuit: PropTypes.string.isRequired,
};

export default BiblioItem;
