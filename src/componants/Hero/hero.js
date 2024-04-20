import './hero.css'
function Hero() {
  return (
    <div 
    className="contanier-fluid hero" 
    >
      <div className='d-flex flex-column hero-info'>
        <h2>Hi I'am Mahmoud Sadek</h2>
        <p>welocme to my site, I am a Software Developer</p>
        <a className='mail-me' href='mailto:mahmoudsadek.1905@gmail.com'>Mail me</a>
      </div>
    </div>
  );
}

export default Hero;
