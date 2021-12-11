import React from 'react';
import logo from '../logo.svg';

export const Logo = ({ className, alt }) => (
    <img src={ logo } className={ className } alt={ alt } />
);