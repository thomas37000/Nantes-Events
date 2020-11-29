import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GithubProfil from './GithubProfil';

const DIV = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    margin: 50px;
    color: #000080;
  }
  @media (min-width: 1224px) {
    .Team {
      display: flex;
      justify-content: space-evenly;
    }

    h1 {
      display: flex;
      justify-content: center;
      margin: 50px;
      color: #000080;
    }
  }
`;

class GitApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
    this.fetchDatas = this.fetchDatas.bind(this);
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    axios
      .get(`https://raw.githubusercontent.com/Francois2344/demo/master/db.json`)
      .then((response) => {
        this.setState({
          profile: response.data,
        });
      });
  }

  render() {
    const { profile } = this.state;
    return (
      <DIV>
        <h1> Event Team ! </h1>
        <div className="Team">
          {profile.map((profil) => (
            <GithubProfil key={profil.id} {...profil} />
          ))}
        </div>
      </DIV>
    );
  }
}

export default GitApi;
