import styled from 'styled-components';

export const Gallery = styled.div`
display: grid;
grid-template-rows: 30% 70%;
grid-template-columns: 40% 20% 20% 20%;

  .zoom {
    overflow: hidden;
    > img {
      transition: 0.5s all ease-in-out;
    }

    > img:hover {
      transform: scale(1.2);
    }
  }

  .columnOne {
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
      display: grid;

      grid-template-columns: 50% 50%;

      > div {
        > img {
          margin-bottom: -5px;
        }
      }
    }
  }
`
