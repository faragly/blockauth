// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointUpLg } from 'styled-bootstrap-responsive-breakpoints';
import theme from '../theme';

const Iconbar = styled.div`
    width: 64px;
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${theme.colors.grays[1]};
    z-index: 500;

    ${mediaBreakpointUpLg`
        display: flex;
    `}
`;

export default Iconbar