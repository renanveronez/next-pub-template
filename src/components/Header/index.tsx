import { useState } from 'react';
import { ActiveLink } from './ActiveLink';
import styles from './styles.module.scss';



export function Header() {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logoHeader}>
            {/* <img className={styles.logo} src="/images/____.png" alt="" /> */}
            <h1>Pub Name</h1>
          </div>

          <div className={styles.logoWithLinks}>
            <div className={classOn ? styles.menuSectionOn : styles.menuSection} onClick={() => setClassOn(!classOn)}>
              <div className={styles.menuToggle}>
                <div className={styles.one} />
                <div className={styles.two} />
                <div className={styles.three} />
              </div>

              <nav className={styles.listItems}>

                <ul>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/">
                      <a className={styles.active}>Home</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/historias">
                      <a>Histórias</a>
                    </ActiveLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}
