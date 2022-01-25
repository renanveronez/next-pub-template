import { useState } from 'react';
import { ActiveLink } from './ActiveLink';
import { Container, HeaderContent, Menu } from './styles';

export function Header() {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <Container>
        {/* Primeira div */}
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

                <ul>
                  <li>
                    <ActiveLink activeClassName='active' href="/">
                      <a className='active'>Home</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName='active' href="/projects">
                      <a>Projetos</a>
                    </ActiveLink>
                  </li>
                </ul>
              </nav>
            </div>
          </Menu>
        </HeaderContent>
      </Container>
    </>
  )
}
