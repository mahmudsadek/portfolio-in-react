import './skills.css'

function Skills() {
  return (
    <div className='container-fluid skills my-4'>
      <div>
        <h2 className='fs-1 fw-bold py-5'>SKILLS</h2>
        <p className='w-75 m-auto mb-5'>I'm adept in C#, utilizing its robust features for developing a wide range of applications, from desktop software to web services. My proficiency extends to frameworks like ASP.NET and Xamarin, allowing me to create scalable and cross-platform solutions. With a keen eye for optimization and performance, I leverage C# to deliver efficient and reliable software products.</p>
      </div>
      <div className='w-50 m-auto'>
        <div className='row'>
          <div className='col-12'>
              <h3 class="progress-title">C#</h3>
              <div class="progress">
                  <div class="progress-bar" style={{width:"85%" ,backgroundColor:"#97c513"}}>
                      <div class="progress-value">65%</div>
                  </div>
              </div>
              <h3 class="progress-title">JavaScript</h3>
              <div class="progress">
                  <div class="progress-bar" style={{width:"88%" ,backgroundColor:"#97c513"}}>
                      <div class="progress-value">65%</div>
                  </div>
              </div>
              <h3 class="progress-title">C/C++</h3>
              <div class="progress">
                  <div class="progress-bar" style={{width:"80%" ,backgroundColor:"#97c513"}}>
                      <div class="progress-value">65%</div>
                  </div>
              </div>
              <h3 class="progress-title">React</h3>
              <div class="progress">
                  <div class="progress-bar" style={{width:"78%" ,backgroundColor:"#97c513"}}>
                      <div class="progress-value">65%</div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;