import styled from 'styled-components';


export const Container = styled.div`
  margin-bottom: 0rem;

  div {
    padding-top: 0.75rem;
  }

  .carousel .slide img {
      height: 92vh;
      object-fit: cover;
    }

  .carousel .thumb {
    display: none;
  }
  .carousel .thumbs-wrapper {
    display: none;
  }

  .carousel .control-dots .dot {
    width: 15px;
    height: 15px;
  }

  .carouesl.carouesl-slider.control-arrow {
    padding-top: 0px;
  }

  .control-arrow {
    display: none;
  }

  @media(max-width: 1110px) {
    .carousel .slide img {
      height: 92vh;
      object-fit: cover;
    }
  }

  .carousel .control-dots .dot {
    width: 11px;
    height: 11px;
  }

}

  @media (max-width: 400px) {
    .containerCarousel {
      img {
        height: 150px;
      }
    }
  }
`
