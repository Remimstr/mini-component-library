import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const PresentationalSelect = styled.div`
  display: inline-block;
  font-weight: normal;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 16px;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  
  ${NativeSelect}:focus + & {
    outline: 1px solid #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>{children}</NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <StyledIcon style={{ '--size': `${24}px` }} id="chevron-down" size={24} strokeWidth={'1px'} />
      </PresentationalSelect>
    </Wrapper>
);
};

export default Select;
