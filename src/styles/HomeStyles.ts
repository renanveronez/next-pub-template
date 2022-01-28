import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  .sinceParallax {
    display: flex;
    width: 100%;

    .since {
      width: 50%;
    }
    .parallax {
      width: 50%;
      object-fit: cover;
    }
  }

  @media (max-width: 1200px) {
    .sinceParallax {
    display: flex;
    flex-direction: column;

    .since {
      width: 100%;
    }
    .parallax {
      width: 100%;

    }
  }
  }
`;

export const Location = styled.div`

  > div {
    display: flex;
    flex-direction: column;
    height: 12rem;
    background-color: black;
    margin-top: -0.8rem;
    padding-bottom: 2rem;
    justify-content: flex-end;
    align-items: center;


    > p {
      padding-top: 1rem;
      color: yellow;
      bottom: 0;
      font-size: 1.2rem;
    }
  }
`
export const Since = styled.div`
  background-image: url('https://static.spotapps.co/web/1970twinsirishpub--com/custom/about_us_left.jpg');
  width: 100%;
  height: 30rem;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 3rem;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.7);
    margin-bottom: 3rem;

    p {
      color: white;
      padding-right: calc(20% - 50px);
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 10px;
    }
  }
`

export const Place = styled.div`

  margin-top: -3rem;
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
    margin-top: -1rem;

    > div {
    margin: -0.5rem 0;
    height: 10rem;

      > p {
        color: yellow;
        font-size: 1rem;
      }
    }
  }
`
