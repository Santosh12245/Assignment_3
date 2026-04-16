const Header = () => {
  const headerStyle = {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-on-primary)',
    padding: '1rem 2rem',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  return <header style={headerStyle}><h1>My Brand App</h1></header>;
};

export default Header;