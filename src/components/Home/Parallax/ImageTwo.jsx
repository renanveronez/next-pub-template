import { Parallax } from 'react-parallax';
import Satellite from './satellite.jpeg'
import { Container } from './styles';


const ImageTwo = () => (
  <Container>
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content'>
        <span className="img-txt">a trip to Space</span>
      </div>
    </Parallax>
  </Container>
);

export default ImageTwo
