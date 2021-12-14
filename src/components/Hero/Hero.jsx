import './Hero.css';
import photo from '../../image/photo_1.jpg';

export default function Hero() {
  return (
    <div className='hero'>
      <div className="description">
        <p>[WHO I AM]</p>
        <h1>A human - first,<br />Junior Front end<br />Developer.</h1>
        <p className="aboutMe">Kyiv, Ukraine<br/>21 years old</p>
      </div>

      <div className="img_container">
        <div className='img'>
          <img src={photo} alt="avatar" style={{width: 350}}/>
        </div>
      </div>
    </div>
  );
}