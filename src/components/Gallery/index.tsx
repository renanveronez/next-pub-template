import { Gallery, Place } from './styles'
import Faixatop from '../../assets/faixatop.svg';
import Faixabottom from '../../assets/faixabottom.svg';
import PicUm from '../../../public/FotoUm.jpg';
import PicDois from '../../../public/FotoDois.jpg';
import PicTres from '../../../public/FotoTres.jpg';
import PicQuatro from '../../../public/FotoQuatro.jpg';
import PicCinco from '../../../public/FotoCinco.jpg';
import PicSeis from '../../../public/FotoSeis.jpg';
import PicSete from '../../../public/FotoSete.jpg';

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
            <img src={PicUm} alt="Bar" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={PicDois} alt="Pic 1" />
          </div>
          <div className='zoom'>
            <img src={PicTres} alt="Pic 2" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={PicQuatro} alt="Pic 3" />
          </div>
          <div className='zoom'>
            <img src={PicCinco} alt="Pic 4" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={PicSeis} alt="Pic 5" />
          </div>
          <div className='zoom'>
            <img src={PicSete} alt="Pic 6" />
          </div>
        </div>
      </Gallery>
    </>
  );
}

export default GalleryHome;
