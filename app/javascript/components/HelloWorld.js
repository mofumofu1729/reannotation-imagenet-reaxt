import React from "react"
import PropTypes from "prop-types"
const HelloWorld = function(prop) {
  return (
    <React.Fragment>
      Greeting: {this.props.greeting}
    </React.Fragment>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
