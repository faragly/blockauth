import React from 'react';
import fingerprint from '../images/logo.svg';

export const Logo = ({ className, alt }) => (
    <img src={ fingerprint } className={ className } alt={ alt } />
);