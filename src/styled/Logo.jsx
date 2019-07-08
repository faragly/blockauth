import React from 'react';
import fingerprint from '../images/fingerprint-with-key.svg';

const Logo = ({ className, alt }) => (
    <img src={ fingerprint } className={ className } alt={ alt } />
);

export default Logo;