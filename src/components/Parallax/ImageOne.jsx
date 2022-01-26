import { Parallax } from 'react-parallax';
import Nasa from './nasa.jpg';
import { Container } from './styles';


const ImageOne = () => (
  <Container>
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content'>
        <span className="img-txt">a trip to Space</span>
      </div>
    </Parallax>
  </Container>
);

export default ImageOne
