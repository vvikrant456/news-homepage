import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 1rem 1rem;
  border-bottom: ${(props) =>
    props.size === props.ind ? 'none' : 'solid 1px rgba(197, 198, 206, 0.4)'};
`;

const Card = (props) => {
  return (
    <>
      <StyledCard size={props.size} ind={props.ind}>
        <button className="text-white font-medium hover:text-[#e9ab53]">
          {props.head}
        </button>
        <p className="text-[#c5c6ce] m text-sm sm:mt-2">{props.details}</p>
      </StyledCard>
    </>
  );
};

export default Card;
