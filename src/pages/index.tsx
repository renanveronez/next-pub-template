import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { SiGooglemaps } from 'react-icons/si';
import { HomeContainer, Location, Since, Place } from '../styles/HomeStyles'
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { CarouselBanner } from '../components/Carousel';
import ParallaxItem from '../components/Parallax/ParallaxItem';
import Toast from '../../public/toast.jpg'

import Faixatop from '../assets/faixatop.svg';
import Faixabottom from '../assets/faixabottom.svg';
import GalleryHome from '../components/Home/Gallery';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <>
      <HomeContainer>
        <Head>
          <title>Home | Pub</title>
          <meta
            name="description"
            content="I'm a front-end developer living in Cork and here I present some projects developed by me!"
          />
          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="I'm a front-end developer living in Cork and here I present some projects developed by me!"
          />
        </Head>


        <Header />;
        <CarouselBanner />

        <Location>

          <div>
            <a href="https://www.google.com.br/maps/place/Cork+International+Choral+Festival/@51.9011818,-8.4764434,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x4844900891beb961:0xa00c7a99731c5d0!2sCork,+Ireland!3b1!8m2!3d51.8985143!4d-8.4756035!3m4!1s0x4844901190bd94ef:0x824ab0aeb95f1d11!8m2!3d51.9011818!4d-8.4742808">
              <SiGooglemaps color="yellow" fontSize="2.5rem" />
            </a>
            <p>Pope’s Quay, Cork, Ireland</p>
          </div>
        </Location>

        <div className='sinceParallax'>
          <div className='since'>
            <Since>
              <div data-aos="fade-right">
                <p>Established In 1990</p>
              </div>
            </Since>
          </div>

          <div className='parallax'>
            <ParallaxItem
              backgroundImage={Toast}
              description='Cheers'
            />
          </div>

        </div>

        <Place>
          <Faixatop />
          <div>
            <p>Gallery</p>
          </div>
          <Faixabottom />
        </Place>

        <GalleryHome />

      </HomeContainer>
      <Footer />
    </>
  )

}
