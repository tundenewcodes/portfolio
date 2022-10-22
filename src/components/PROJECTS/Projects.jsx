import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { BsLaptop } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { projectInfo } from '../Data'

const Projects = () => {
  return (
    <div className='row'>
      {projectInfo.map((info) => (
        <div className='col-md-4 text-center my-2'>
          <div
            id='carouselExampleControls1'
            className='carousel slide my-1'
            data-bs-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src={info.pic1}
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={info.pic2}
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={info.pic3}
                  className='d-block w-100'
                  alt='...'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls1'
              data-bs-slide='prev'>
              <GrPrevious />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls1'
              data-bs-slide='next'>
              <GrNext />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
          <h5 className='ff-jose my-1'>{info.name}</h5>
          <div className='row d-flex justify-content-center'>
            <a
              href={info.host}
              className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
              target='_blank'>
              <BsLaptop /> Watch Live
            </a>
            <a
              href={info.github}
              className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
              target='_blank'>
              <AiFillGithub /> Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
