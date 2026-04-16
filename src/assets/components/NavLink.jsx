import styled from 'styled-components';

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ef4444;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export default NavLink;