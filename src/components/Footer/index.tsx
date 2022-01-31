import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { Section, } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  // function handleScrollTop() {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }

  return (
    <>
      <Section>
        <div>
          <p>FIND US ON...</p>
          <div>
            <div>
              <AiFillFacebook
                onClick={() => handleRedirect('https://www.linkedin.com/in/renan-veronez-drechsler-54a4801a3/')}
                color="white"
                size={40}
              />
            </div>
            <div>
              <AiOutlineInstagram
                onClick={() => handleRedirect('https://www.linkedin.com/in/renan-veronez-drechsler-54a4801a3/')}
                color="white"
                size={40}
              />
            </div>
            <div>
              <AiFillLinkedin
                onClick={() => handleRedirect('https://www.linkedin.com/in/renan-veronez-drechsler-54a4801a3/')}
                color="white"
                size={40}
              />
            </div>
            <div>
              <AiFillTwitterSquare
                onClick={() => handleRedirect('https://www.linkedin.com/in/renan-veronez-drechsler-54a4801a3/')}
                color="white"
                size={40}
              />
            </div>
          </div>
        </div>
      </Section>
      {/*
      <Container>
        <div className="container">
          <button type="button" onClick={handleScrollTop}>
            Back to top
          </button>
          <section />
        </div>
      </Container> */}
    </>
  );
}

export default Footer;
