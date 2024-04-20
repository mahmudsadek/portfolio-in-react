import './Bio.css'

function Bio() {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-4'>
          <h2 className='fs-1 fw-bold'>ABOUT ME</h2>
        </div>
        <div className='col-8 about-me d-flex '>
          <p className='mb-3'>I'm a seasoned software developer with a passion for crafting efficient and scalable solutions to complex problems. With over a decade of experience in the industry, I specialize in full-stack development, leveraging my expertise in languages like Python, JavaScript, and Java. I thrive in collaborative environments, where my strong communication skills allow me to effectively translate client needs into elegant technical solutions. Continuously staying updated with emerging technologies, I am dedicated to delivering high-quality software products that exceed expectations</p>
          <div className='mt-3'>
            <a className='btn-cv' 
            href='https://drive.google.com/file/d/1UOqSSpCi2kDfR1uvHY9L4WXKvX7qISU9/view?usp=sharing'>
              My CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;