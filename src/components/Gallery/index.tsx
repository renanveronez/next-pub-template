import { Gallery, Place } from './styles'
import Faixatop from '../../assets/faixatop.svg';
import Faixabottom from '../../assets/faixabottom.svg';
import Toast from '../../public/toast.jpg'

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
            <img src={Toast} alt="Bar" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={Toast} alt="Toast1" />
          </div>
          <div className='zoom'>
            <img src={Toast} alt="Toast2" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={Toast} alt="Toast3" />
          </div>
          <div className='zoom'>
            <img src={Toast} alt="Toast4" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src={Toast} alt="Toast5" />
          </div>
          <div className='zoom'>
            <img src={Toast} alt="Toast6" />
          </div>
        </div>
      </Gallery>
    </>
  );
}

export default GalleryHome;
