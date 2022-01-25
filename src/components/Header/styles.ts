import styled from 'styled-components';

export const Container = styled.section`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundLight};
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

  ul {
      flex-direction: row;

      li {
        list-style: none;
        padding-right: 2.5rem;
      }

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5.5rem;
        color: #d0e5ec;
        font-size: 1.5rem;
        transition: color 0.2s;

        & + a {
          margin-left: 2rem;
        }

        &:hover {
          color: #88cae2;
        }

        &.active {
          color: #88cae2;
          font-weight: bold;
        }

        &.active::after {
          content: '';
          height: 5px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background: #88cae2;
        }
      }
    }

    ul {
      display: flex;
      list-style: none;
    }


  @media (min-width:200px) and (max-width:1120px){
    ul {
        display: absolute;
        flex-direction: column;
        align-items: center;
    }

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 6.5rem;
      color: white;
      font-size: 1.5rem;
      transition: color 0.2s;

      &:hover {
        color: var(--white);
      }

      &.active {
        color: #88cae2;
        font-weight: bold;
      }

      &.active::after {
        background: #88cae2;
      }
    }
  }
  }


  @media (max-width: 1120px){

  .menuSection {
  .listItems {
  display: none;
  }
  }

  .one,
  .two,
  .three{
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

  /*Fullscreen*/
  .menuSectionOn {
  position: absolute;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #11172B;
  opacity: 0.9;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .menuSectionOn nav{
  display: block;
  }


  .menuSectionOn .menuToggle{
  position: absolute;
  right: 25px;
  top: 25px;
  }


  .menuSectionOn .menuToggle .one{
  transform: rotate(45deg) translate(7px, 7px);
  background-color: #fff;
  }

  .menuSectionOn .menuToggle .two{
  opacity: 0;
  }

  .menuSectionOn .menuToggle .three{
  transform: rotate(-45deg) translate(8px, -9px);
  background-color: #fff;
  }

`
