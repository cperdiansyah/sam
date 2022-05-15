import Brand from '../Brand';

const index = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <div className='row'>
            <div className='col-lg-3 col-md-4'>
              <div className='brand-wrapper w-full '>
                <Brand
                  href='/'
                  src='/static/images/sam-logo-blue.png'
                  alt='Sentra Awan Maxima Logo'
                  width='250'
                  height='100'
                />
                <p>Mangkuluhur City, 18th Floor. Jl. Gatot Subroto Kav. 1, Jakarta</p>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='footer-bottom-wrapper'>
            <p className='text-center'>
              &copy; Copyright{' '}
              <span className='fw-bold'>PT Sentra Awan Maxima</span>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
