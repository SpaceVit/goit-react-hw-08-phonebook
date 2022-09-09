import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0 3px;

  &.active {
    color: white;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #ebeffa;
  }
`;

export const Container = styled.div`
  margin-top: ${props => props.theme.space[3]}px;
`;

export const Line = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: ${props => props.theme.space[2]}px;
`;
