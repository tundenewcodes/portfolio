import React from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { BsLaptop } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const BackendProjects = () => {
  const projectInfo = [
    {
      name: 'Discord App',

      host: 'https://discord-clone-app.herokuapp.com/',
      pic1: '../portfolio-images/da-01.jpg',
      pic2: '../portfolio-images/da-02.jpg',
      pic3: '../portfolio-images/da-03.jpg',
      github: 'https://github.com/tundenewcodes/discord',
    },
    {
      name: 'Task Management',

      host: 'https://task-manager-web2app.herokuapp.com/',
      pic1: '../portfolio-images/tm-01.jpg',
      pic2: '../portfolio-images/tm-02.jpg',
      pic3: '../portfolio-images/tm-03.jpg',
      github: 'https://github.com/tundenewcodes/node-task-manager',
    },
    {
      name: 'Note App',

      host: 'https://fullstack-note-webapp.herokuapp.com/',
      pic1: '../portfolio-images/ntp-01.jpg',
      pic2: '../portfolio-images/ntp-02.jpg',
      pic3: '../portfolio-images/ntp-03.jpg',
      github: 'https://github.com/tundenewcodes/fullstack-noteapp',
    },
    {
      name: 'E-commerce App',

      host: 'https://py-django-ecommerce-webapp.herokuapp.com/',
      pic1: '../portfolio-images/ec-01.jpg',
      pic2: '../portfolio-images/ec-01.jpg',
      pic3: '../portfolio-images/ec-01.jpg',
      github: 'https://github.com/tundenewcodes/django-ecommerce',
    },
    {
      name: 'NASA PLANETS App',

      host: 'https://nasa-planet.herokuapp.com',
      pic1: '../portfolio-images/na-01.jpg',
      pic2: '../portfolio-images/na-02.jpg',
      pic3: '../portfolio-images/na-03.jpg',
      github: 'https://github.com/tundenewcodes/nasa-app',
    },
  ]

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
              target='_blank' rel='noreferrer'>
              <BsLaptop /> Watch Live
            </a>
            <a
              href={info.github}
              className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
              target='_blank' rel='noreferrer'>
              <AiFillGithub /> Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BackendProjects
