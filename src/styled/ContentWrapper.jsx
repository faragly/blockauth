// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { mediaBreakpointUpLg } from 'styled-bootstrap-responsive-breakpoints';
import theme from '../theme.js';

export const ContentWrapper = styled.div`
    flex-grow: 1;
    border-left-color: $gray-400;
    box-shadow: 0 0 7px ${rgba(theme.colors.grays[8], .08)};
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${theme.colors.grays[0]};

    ${mediaBreakpointUpLg`
        border-left: 1px solid ${theme.colors.grays[3]};
        margin-left: 64px;
    `}
`;