/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: 270px;
  padding: ${({size}) => size === 'large' ? '4px' : 'none'};
  height: ${({size}) => {
    if (size === 'large') return '24px';
    if (size === 'medium') return '12px';
    return '8px';
  }};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Element = styled.div`
  width: ${({width}) => `${width}%`};
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: var(--border-radius) 0 0 var(--border-radius);
`;

const ProgressBar = ({ value, size }) => {
  const roundingFactor = size === 'small' ? 8 : 4;
  const style = {'--border-radius': `${roundingFactor}px`};

  return <Wrapper style={style} size={size}>
    <Element style={style} role="progressbar" width={value} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"/>
  </Wrapper>
};

export default ProgressBar;
