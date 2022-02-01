import styled from 'styled-components';


export const Container = styled.div`

  .carousel .slide img {
      height: 98vh;
    }

  .control-arrow {
  display: none;
  }

  .carousel .thumb {
    display: none;
    position: none;
  }

  .carousel .thumbs-wrapper {
    display: none;
  }

  .carousel .control-dots .dot {
    width: 15px;
    height: 15px;
  }

  @media(max-width: 1110px) {
    .carousel .slide img {
      height: 40vh;
      object-fit: cover;
    }
  }

  .carousel .control-dots .dot {
    width: 11px;
    height: 11px;
  }
}
`
