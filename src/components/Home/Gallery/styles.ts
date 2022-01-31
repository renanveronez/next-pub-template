import styled from 'styled-components';

export const Place = styled.div`
  margin-top: 3rem;
  z-index: 1;
  > div {
    margin-top: -1rem;
    display: flex;
    height: 15rem;
    background-color: black;
    align-items: center;
    justify-content: center;

    > p {
      color: yellow;
      font-size: 2rem;
    }
  }

  @media (max-width: 1200px) {
    margin-top: 1rem;
    margin-bottom: -1rem;

    > div {
    margin: -0.5rem 0;
    height: 6rem;

      > p {
        color: yellow;
        font-size: 1.5rem;
      }
    }
  }
`

export const Gallery = styled.div`
  display: flex;
  margin-top: -2rem;


  .zoom {
    overflow: hidden;
    > img {
      transition: 0.5s all ease-in-out;
    }

    > img:hover {
      transform: scale(1.15);
    }
  }

  .left {
    width: 50%;

    > div {
      > img {
        margin-bottom: -5px;
        object-fit: fill;
      }
    }
  }

  .columnOne {
    width: 34.1%;
    > div {
      > img {
        margin-bottom: -5px;
        object-fit: fill;
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    .left {
      width: 100%;
      > div {
        > img {
          margin-bottom: -5px;
        }
      }
    }

    .columnOne {
      width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;

      > div {
        > img {
          height: 100%;
          margin-bottom: -5px;
        }
      }
    }
  }
`
