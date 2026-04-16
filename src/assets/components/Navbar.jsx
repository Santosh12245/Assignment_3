import NavLink from "./NavLink";

 const Navbar = () => {
  return (
    <nav style={{ padding: '20px', display: 'flex', gap: '20px', borderBottom: '1px solid #eee' , justifyContent:'center'}}>
      <div style={{ fontWeight: 'bold' }}>LOGO</div>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      
      <span className="block sm:hidden"> (Mobile View: Links Hidden) </span>
    </nav>
  );
};
export default Navbar