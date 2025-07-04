import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
  
      <nav>
        <ul style={styles.nav}>
          <li><Link to="/">בית</Link></li>
          <li><Link to="/projects">פרויקטים</Link></li>
          <li><Link to="/contact">צור קשר</Link></li>
          <li><Link to="/admin">אדמין</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: '#e0f7fa',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    margin: 0
  },
  nav: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  }
};

export default Header;
