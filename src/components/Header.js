import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    car: {
      price: state.price,
      name: state.name,
      image: state.image,
      features: state.features
    }
  }
}

export default connect(mapStateToProps, {})(Header);
