import './Header.css';

export default function Header() {
  return (
    <header className="header" id="home">
      <p>Julianija<br/>Sierykh</p>
      <ul className="navigation">
        <li><a href="#home">Home</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
    </header>
  );
}