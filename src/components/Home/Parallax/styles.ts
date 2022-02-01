import styled from 'styled-components';

export const Container = styled.section`

.image {
  min-height: 100vh;
  position: relative;
}

.image .content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content span.img-txt {
  background-color: #333;
  text-transform: uppercase;
  color: #fff;
  padding: 1rem;
  font-size: 1.5rem;
  letter-spacing: 10px;
}



h3 {
  letter-spacing: 6px;
  text-transform: uppercase;
  font: 1.3rem;
  text-align: center;
}

.text-box {
  text-align: center;
  padding: 3rem 1rem;
  text-align: justify;
  color: white;
}


`

export const ParallaxContainer = styled.div`
.image {
  min-height: 30rem;
  width: 100%;
  position: relative;
}

.image .content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content span.img-txt {
  background-color: #333;
  text-transform: uppercase;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  letter-spacing: 10px;
}

`
