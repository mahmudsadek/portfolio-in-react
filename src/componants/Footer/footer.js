import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='container-fluid bg-dark text-light'> 
      <div className='row py-5'>
        <div className='col-md-4 text-start'>
          <h2 className='fs-5 fw-bold'>CONTACT ME</h2>
          <div>
            <div><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> mahmoudsadek.1905@gmail.com </div>
            <div><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> +201282180838 </div>
          </div>
        </div>
        <div className='col-md-4 text-center'>
          <button className='btn-bla'>Something</button>
        </div>
        <div className='col-md-4 text-end'>
          <a href='facebook.com' className='text-primary fw-bold'>Facebook</a>
          <a href='facebook.com' className='text-info fw-bold'>Twitter</a>
          <a href='facebook.com' className='text-info fw-bold'>Linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;