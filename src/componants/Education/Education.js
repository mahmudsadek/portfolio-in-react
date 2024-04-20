import './Education.css'

function Eductaion() {
  return (
    <div className='container'>
      <h2 className='fs-1 fw-bold mt-5'>EDUCATION</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4 my-5'>
        <div className='col'>
          <div className='card'>
            <h5 className='card-title'>
              Assuit Univirsity
            </h5>
          </div>
        </div>
        <div className='col'>
          <div className='card bg-dark text-light'>
            <h5 className='card-title'>
              ITI 9-Month Program
            </h5>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <h5 className='card-title'>
              Computer and Informaion
            </h5>
          </div>
        </div>
        <div className='col'>
          <div className='card bg-dark text-light'>
            <h5 className='card-title'>
              Graduted in 2022
            </h5>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <h5 className='card-title'>
              GPA 3.02 of 4
            </h5>
            
          </div>
        </div>
        <div className='col'>
          <div className='card text-light bg-dark'>
            <h5 className='card-title'>
                Professional Web & BI
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eductaion;