// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { mediaBreakpointUpLg } from 'styled-bootstrap-responsive-breakpoints';
import theme from '../theme.js';

export const Header = styled.div`
    display: flex;
    //position: relative;
    //z-index: 100;
    background-color: #fff;
    border-bottom: 1px solid ${theme.colors.grays[2]};
    box-shadow: 0 0 10px ${rgba(theme.colors.grays[8], 0.06)};
    padding: 15px;

    ${mediaBreakpointUpLg`border-bottom: 1px solid transparent;`}
`;