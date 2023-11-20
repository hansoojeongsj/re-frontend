import PropTypes from 'prop-types';

import styled from 'styled-components';
const TooltipWrapper = styled.div`
  position: fixed; // fixed로 수정
  background-color: #FFAC33;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Tooltip = ({ text, visible, position, children }) => {
  const tooltipStyle = {
    top: position.top,
    left: position.left,
    opacity: visible ? 1 : 0,
  };

  return (
    <TooltipWrapper style={tooltipStyle}>
      {text}
      {children}
      
    </TooltipWrapper>


  );
};


Tooltip.propTypes = {
  text: PropTypes.string.isRequired, // text 속성은 문자열이어야 하며 필수입니다.
  visible: PropTypes.bool.isRequired, // visible 속성은 불리언(boolean)이어야 하며 필수입니다.
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired, // position 속성은 객체이며 top 및 left 속성이 필수입니다.
  children: PropTypes.node.isRequired, // children 속성은 어떤 종류의 React 노드든 허용됩니다.
};


export default Tooltip;