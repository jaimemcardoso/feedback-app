import PropTypes from 'prop-types';

function Card({children, reverse}) {

  return (
    // <div className={`card ${reverse && 'reverse'}`}> // conditional class
    <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)': 'white',
        color: reverse ? 'white': 'black',
    }}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card