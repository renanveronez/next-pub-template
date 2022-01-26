import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const MainContainer = styled.section`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.background};
`

export const HeaderContent = styled.section`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {

    > img {
      padding-top: 5px;
      width: 40px;
    }

    > h1 {
      padding-left: 0px;
      font-size: 2.7rem;
      color: white;
    }
  }
`

export const Menu = styled.section`
  /*Fullscreen*/
  .menuSectionOn {
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    opacity: 0.95;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .menuToggle{
      position: absolute;
      right: 25px;
      top: 25px;

      .one{
        transform: rotate(45deg) translate(7px, 7px);
        background-color: #fff;
      }

      .two{
        opacity: 0;
      }

      .three{
        transform: rotate(-45deg) translate(8px, -9px);
        background-color: #fff;
      }
    }
  }


  @media (min-width:200px) and (max-width:1120px){
    .listItems {
      padding-left: 60px;
      padding-bottom: 50px;
    }

    .menuSection {
      .listItems {
      display: none;
      }
    }

    .one,
    .two,
    .three {
      background-color:#ffffff;
      height: 5px;
      width: 100%;
      margin: 6px auto;
      transition-duration: 0.3s;
    }

    .menuToggle{
      width: 40px;
      height: 30px;
      margin-right: 0px;
    }

    ul {
      display: absolute;
      flex-direction: column;
      align-items: center;
    }

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 2rem;
      line-height: 6.5rem;
      color: white;
      font-size: 1.5rem;
      transition: color 0.2s;

      &:hover {
        color: var(--white);
      }

      &.active {
        color: ${({ theme }) => theme.menuSelected};
        font-weight: bold;
      }

      &.active::after {
        background: ${({ theme }) => theme.menuSelected};
        margin-bottom: 1px;
      }
    }
  }
`

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    font-size: 1.5rem;
    color: ${props =>
    props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
    props.isActive
      ? lighten(0.2, props.theme.primary)
      : lighten(0.2, props.theme.textHighlight)};
    }

    &.active::after {
        content: '';
        height: 5px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: red;
      }
  }
`;
