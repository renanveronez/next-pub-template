import { Gallery } from './styles'
import Pic1 from '../../../../public/a1.png';
import Pic2 from '../../../../public/a2.png';
import Pic3 from '../../../../public/a3.png';
import Pic4 from '../../../../public/a4.png';
import Pic5 from '../../../../public/a5.png';
import Pic6 from '../../../../public/a6.png';
import Pic7 from '../../../../public/a7.png';

function GalleryHome() {
  return (
    <Gallery>
      <div className='left'>
        <div className='zoom'>
          <img src={Pic6} alt="Bar" />
        </div>
      </div>
      <div className='columnOne'>
        <div className='zoom'>
          <img src={Pic7} alt="Minha foto" />
        </div>
        <div className='zoom'>
          <img src={Pic1} alt="Minha foto" />
        </div>
      </div>
      <div className='columnOne'>
        <div className='zoom'>
          <img src={Pic2} alt="Minha foto" />
        </div>
        <div className='zoom'>
          <img src={Pic3} alt="Minha foto" />
        </div>
      </div>
      <div className='columnOne'>
        <div className='zoom'>
          <img src={Pic5} alt="Minha foto" />
        </div>
        <div className='zoom'>
          <img src={Pic4} alt="Minha foto" />
        </div>
      </div>
    </Gallery>
  );
}

export default GalleryHome;
