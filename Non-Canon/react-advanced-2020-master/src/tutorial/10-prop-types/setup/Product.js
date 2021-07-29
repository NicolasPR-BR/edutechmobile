import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/w.jpeg'

const Product = ({image,price,name}) => {
  return <article className='product'> <img src={image.url} alt="" width='10rem'/> <h4>{name}</h4> <br/>${price || 0.00}</article>;
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

Product.defaultProps = {
  image: {url:defaultImage},
  name: 'default name',
  price: 0,
}
export default Product;
