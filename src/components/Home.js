import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountry } from '../actions/countryActions';

const Home = (props) => {
  const { dispatch, countries } = props;
  useEffect(() => {
    console.log("countries", countries)
  }, [countries]);
  return (
    <div>
      Home
      <button onClick={() => dispatch(fetchCountry())}>Load Countries!</button>
      {countries && countries.map((item, i) => {
        return <span key={i}>{item.name}&nbsp;//</span>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { countryReducer } = state;
  return {
    countries: countryReducer && countryReducer.countries ? countryReducer.countries : []
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(Home);