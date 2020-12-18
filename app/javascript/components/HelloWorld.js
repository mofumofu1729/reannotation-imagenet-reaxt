import React from "react"
import PropTypes from "prop-types"
const HelloWorld = function(props) {
  return (
    <React.Fragment>
      Greeting: {props.greeting}
    </React.Fragment>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
