/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FIGURE = styled.figure`
  width: 100vw;
  display: flex;
  flex-direction: column;

  .eventName {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    width: 100%;
  }
  .eventName h1 {
    margin: 0.5rem;
    color: #000080;
  }
  .eventName h2 {
    margin: 0.5rem;
    color: #000080;
  }

  p,
  h2,
  h3,
  h4 {
    margin: 0.5rem;
  }

  .Card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    line-height: 1.6;
    width: 100%;
    height: auto;
    background-color: #eaeaea;
    box-shadow: none;
    border-radius: none;
    font-size: 0.75rem;
  }

  .horaire {
    width: 3rem;
  }

  .photo {
    width: 95%;
    height: auto;
    background-position: center;
    background-size: cover;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin: 0rem;
  }

  .information {
    padding: 1rem;
    width: 95vw;
  }

  .description {
    text-align: justify;
  }

  .price span {
    width: auto;
  }

  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95vw;
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
    .photo {
      width: auto;
      height: auto;
      position: relative;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
      margin: 1rem;
    }

    .eventName {
      display: flex;
      justify-content: center;
      height: 20vh;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .eventName h2 {
      font-size: 2rem;
      color: #7bf976;
      text-align: center;
      letter-spacing: 0.3rem;
    }

    .Card {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: left;
      line-height: 1.6;
      width: 100%;
      height: auto;
      background-color: #eaeaea;
      box-shadow: none;
      border-radius: none;
      font-size: 1rem;
    }

    .description {
      width: 50vw;
      text-align: justify;
    }
    .information {
      margin: 2rem;
      width: 50%;
    }
    .location {
      width: 25%;
      margin: 2rem;
      margin-bottom: auto;
    }
    .price {
      width: 100%;
    }
  }
`;

class DetailEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(
        `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&refine.recordid=${id}`
      )
      .then((response) => {
        this.setState({
          eventDetails: response.data.records[0].fields,
        });
      });
  }

  render() {
    const { eventDetails } = this.state;
    return (
      <FIGURE className="DetailCard">
        <section className="eventName">
          <h2>{eventDetails.libelle_festival}</h2>
          <h2>{eventDetails.nom}</h2>
        </section>
        <section className="Card">
          <img
            className="photo"
            src={eventDetails.media_1}
            alt={eventDetails.nom}
          />
          <div className="information">
            <h1 className="date">{eventDetails.date}</h1>
            <h4 className="description">
              Description : {eventDetails.description}
            </h4>
            <h4 className="accessibilité">
              Public :{' '}
              {eventDetails.precisions_public !== undefined
                ? eventDetails.precisions_public
                : 'non précisé'}
            </h4>
            <h4 className="lieu">Lieu : {eventDetails.lieu}</h4>
            <h4>
              Horaire : {eventDetails.heure_debut} - {eventDetails.heure_fin}
            </h4>
            <h4 className="gratuité">Gratuité : {eventDetails.gratuit}</h4>
            <h4 className="price">Tarif : {eventDetails.precisions_tarifs}</h4>
          </div>
          <div className="location">
            <h3>Coordonnées :</h3>
            <p>
              Adresse :{' '}
              {eventDetails.adresse !== undefined
                ? eventDetails.adresse
                : 'non précisé'}
            </p>
            <p>Ville : {eventDetails.ville}</p>
            <p>
              Tél. :{' '}
              {eventDetails.lieu_tel !== undefined
                ? eventDetails.lieu_tel
                : 'non précisé'}
            </p>
            <p>
              Site Web :{' '}
              <Link
                to={{ pathname: eventDetails.lieu_siteweb }}
                target="_blank"
              >
                {eventDetails.lieu_siteweb !== undefined
                  ? eventDetails.lieu_siteweb
                  : 'non précisé'}
              </Link>
            </p>
          </div>
        </section>
      </FIGURE>
    );
  }
}

DetailEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailEvent;
