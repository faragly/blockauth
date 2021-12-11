// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointUpLg } from 'styled-bootstrap-responsive-breakpoints';

export const Header = styled.div`
    display: flex;
    //position: relative;
    //z-index: 100;
    background-color: #fff;
    padding: 15px;

    ${mediaBreakpointUpLg`border-bottom: 1px solid transparent;`}
`;