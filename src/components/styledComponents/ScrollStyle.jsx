import styled from 'styled-components';
import Header from '../img/machines.jpg';

const DIV = styled.div`
  padding: 2em;
  background-image: none;

  @media screen and (min-width: 765px) {
    padding: 10em;
    background-image: url(${Header});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      text-align: center;
      font-weight: 400;
      font-style: normal;
      color: tomato;
      background: #fff;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

export default DIV;
