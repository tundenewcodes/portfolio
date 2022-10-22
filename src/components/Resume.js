import React, { Fragment } from 'react'
import { MdOutlineDownload } from 'react-icons/md'
//import { SiCodechef, SiHackerrank } from 'react-icons/si'

function Resume() {
    return (
   <Fragment>
      <div className='col p-4'>
        <div className='p-4 bg-dark slide-in-top'>
          <div className='row'>
            <div className='col-6'>
              <h2 className='ff-jose fw-bold ls-2'>FADIPE TUNDE</h2>
             <button type='button' className='btn  btn-link'><a
                href='https://download1654.mediafire.com/ryjbfdd4jrdg/7ngc8w5c3zm25xa/Tunde_dev+cv.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download   className='text-decoration-none'>
                  <MdOutlineDownload/>
                Download Resume (PDF){' '}
              </a></button>
            </div>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='ff-jose ls-2'>EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className='ff-jose my-1 text-red'>
                    Software Engineer Intern
                  </h4>
                  <h6 className='blue-label px-2 py-1'>
                    Apr 2022 - Jul 2022
                  </h6>
                  <p className='m-0'>
                    Adroit Solutions Ltd · Full-time . Remote
                  </p>
                  <p>Ojodu, Lagos, Nigeria</p>
                </li>
                <li>
                  <h4 className='ff-jose my-1 text-red'>
                    Volunteered Web Developer
                  </h4>
                  <h6 className='blue-label px-2 py-1'>
                    Jan 2022 - Apr 2022
                  </h6>
                  <p className='m-0'>
                    Carifika Inc · Part-Time . Remote{' '}
                  </p>
                  <p>Canada</p>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <h4 className='ff-jose ls-2'>EDUCATION</h4>
              <ul>
                <li>
                  <h4 className='ff-jose my-1 text-red'>
                    BSc - Agricultural Administration
                  </h4>
                  <h6 className='blue-label px-2 py-1'>
                    2012 - 2018
                  </h6>
                  <p className='m-0'>
                    Federal University of Agriculture Abeokuta
                  </p>
                  <p>CGPA: 4.61</p>
                </li>

              </ul>
            </div>
          </div>

          <hr></hr>

          {/* <div className='row'>
            <div className='col-md-6'>
              <h4 className='ff-jose ls-2'>PROFILE</h4>
              <h1>
                <a
                  href='https://www.codechef.com/users/yagnik_003'
                  target='/blank'
                  className='text-white text-decoration-none mx-2'>
                  <SiCodechef className='zoom-on-hover' />
                </a>
                <a
                  href='https://www.hackerrank.com/Yagnik_003'
                  target='/blank'
                  className='text-white text-decoration-none mx-2'>
                  <SiHackerrank className='zoom-on-hover' />
                </a>
              </h1>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
    )
}

export default Resume