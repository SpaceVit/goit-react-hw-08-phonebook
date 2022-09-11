import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Registration = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-bottom: 3px;
  &.active {
    color: white;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #ebeffa;
  }
`;
