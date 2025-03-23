import Time from '../Time';
import vite from '/vite.svg';
import './Header.css';
import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6em 2.4em;
  background-color: #fafafa;
  border-bottom: 1px solid #ccc;
`;

function Header() {
  return (
    <HeaderContainer className="header">
      <img src={vite} alt="vite logo" />
      <h3>Welcome!</h3>

      <span>
        Час зараз: <Time />
      </span>
    </HeaderContainer>
  );
}

export default Header;
