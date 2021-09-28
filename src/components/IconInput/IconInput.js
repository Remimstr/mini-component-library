import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderWidth: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderWidth: 2,
    height: 36,
  }
}

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: inherit;
`;

const StyledInput = styled.input`
  height: var(--height);
  border: none;
  border-bottom: var(--border-width) solid #000;
  padding-left: var(--height);
  font-size: var(--font-size);
  outline-offset: 2px;
  
  font-weight: 700;
  color: inherit;
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.label`
  position: relative;
  width: var(--width);
  
  color: ${COLORS.gray700};
  
  :hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const { fontSize, iconSize, borderWidth, height } = STYLES[size];
  return <Wrapper style={{ '--width': `${width}px` }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <StyledIcon id={icon} size={iconSize}  />
    <StyledInput placeholder={placeholder}
                 style={{ '--font-size': `${fontSize}px`,
                   '--border-width': `${borderWidth}px`,
                   '--height': `${height}px`
                 }}
    />
  </Wrapper>
};

export default IconInput;
