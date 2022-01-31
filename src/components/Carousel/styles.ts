import styled from 'styled-components';


export const Container = styled.div`

  .carousel .slide img {
      height: 92vh;
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

  .carouesl.carouesl-slider.control-arrow {
    padding-top: 0px;
  }

  .control-arrow {
    height: 100%;
  }

  @media(max-width: 1110px) {
    .carousel .slide img {
      height: 60vh;
      object-fit: cover;
    }
  }

  .carousel .control-dots .dot {
    width: 11px;
    height: 11px;
  }
}
`
