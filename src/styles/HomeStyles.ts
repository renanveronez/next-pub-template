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
