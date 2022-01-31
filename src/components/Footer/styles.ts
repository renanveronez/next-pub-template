import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;

export const Section = styled.div`

  > div {
    display: flex;
    flex-direction: column;
    height: 14rem;
    background-color: black;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      height: 11rem;
    }

    > p {
      padding-top: 1rem;
      padding-bottom: 1.5rem;
      bottom: 0;
      font-size: 1.5rem;
      color: white;
    }

    > div {
      display: flex;
      gap: 1rem;
    }
  }
`
