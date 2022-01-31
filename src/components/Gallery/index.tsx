import { Gallery, Place } from './styles'
import Faixatop from '../../assets/faixatop.svg';
import Faixabottom from '../../assets/faixabottom.svg';
import Pic1 from '../../../public/a1.jpg';
import Pic2 from '../../../public/a2.jpg';
import Pic3 from '../../../public/a3.jpg';
import Pic4 from '../../../public/a4.jpg';
import Pic5 from '../../../public/a5.jpg';
import Pic6 from '../../../public/a6.jpg';
import Pic7 from '../../../public/a7.jpg';

function GalleryHome() {
  return (
    <>
      <Place>
        <Faixatop />
        <div>
          <p>Gallery</p>
        </div>
        <Faixabottom />
      </Place>

      <Gallery>
        <div className='left' data-aos="fade-up">
          <div className='zoom'>
            <img src={Pic6} alt="Bar" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={Pic7} alt="Pic 1" />
          </div>
          <div className='zoom'>
            <img src={Pic1} alt="Pic 2" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={Pic2} alt="Pic 3" />
          </div>
          <div className='zoom'>
            <img src={Pic3} alt="Pic 4" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={Pic5} alt="Pic 5" />
          </div>
          <div className='zoom'>
            <img src={Pic4} alt="Pic 6" />
          </div>
        </div>
      </Gallery>
    </>
  );
}

export default GalleryHome;
