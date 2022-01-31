import { useState } from 'react';
import NavLink from './NavLink';
import { Container, MainContainer, HeaderContent, Menu } from './styles';

export function Header() {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <MainContainer>
        <HeaderContent>
          <div>
            {/* <img src="/images/____.png" alt="" /> */}
            <h1>Pub Name</h1>
          </div>

          <Menu>
            <div className={classOn ? 'menuSectionOn' : 'menuSection'} onClick={() => setClassOn(!classOn)}>
              <div className='menuToggle'>
                <div className='one' />
                <div className='two' />
                <div className='three' />
              </div>

              <nav className='listItems'>

                <Container>
                  <ul>
                    <NavLink title="Home" path="/" />
                    <NavLink title="Menu" path="/projects" includes />
                    <NavLink title="About Us" path="/aboutus" includes />
                  </ul>
                </Container>
              </nav>
            </div>
          </Menu>
        </HeaderContent>
      </MainContainer>
    </>
  )
}
