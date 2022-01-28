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
      transform: scale(1.5);
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
`
