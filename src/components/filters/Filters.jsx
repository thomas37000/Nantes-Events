import React from 'react';
import Slider from './Slider';
import When from './When';
import HomeCalendar from './HomeCalendar';
import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem auto;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .react-calendar {
    width: 80%;
    margin: auto;
    border-radius: 0px;
    border: solid #006edc 2px;
  }
  .react-calendar__navigation {
    background: #006edc;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .react-calendar {
      width: 40vw;
    }
  }
`;
class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.changeDate = this.changeDate.bind(this);
    this.changePrice = this.changePrice.bind(this);
  }

  changeDate(date) {
    const { dateUpdate } = this.props;
    dateUpdate(date);
  }

  changePrice(price) {
    const { priceUpdate } = this.props;
    priceUpdate(price);
  }

  render() {
    return (
      <Section>
        <div className="price">
          <Slider changePrice={this.changePrice} />
        </div>
        <div className="calendar">
          <HomeCalendar changeDate={this.changeDate} />
        </div>
      </Section>
    );
  }
}

export default Filters;
