import { Gallery, Place } from './styles'
import Faixatop from '../../assets/faixatop.svg';
import Faixabottom from '../../assets/faixabottom.svg';

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
            <img src="https://i.imgur.com/A7QsoVz.jpg" alt="Bar" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src="https://i.imgur.com/BDZgE6i.jpg" alt="Pic 1" />
          </div>
          <div className='zoom'>
            <img src="https://i.imgur.com/Mc2BiSn.jpg" alt="Pic 2" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src="https://i.imgur.com/BDZgE6i.jpg" alt="Pic 3" />
          </div>
          <div className='zoom'>
            <img src="https://i.imgur.com/Mc2BiSn.jpg" alt="Pic 4" />
          </div>
        </div>
        <div className='columnOne' data-aos="fade-up">
          <div className='zoom'>
            <img src="https://i.imgur.com/BDZgE6i.jpg" alt="Pic 5" />
          </div>
          <div className='zoom'>
            <img src="https://i.imgur.com/Mc2BiSn.jpg" alt="Pic 6" />
          </div>
        </div>
      </Gallery>
    </>
  );
}

export default GalleryHome;
