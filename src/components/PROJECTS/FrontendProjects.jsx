import React from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { BsLaptop } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const FrontendProjects = () => {
  const projectInfo = [
    {
      name: 'Facebook App',

      host: 'https://facebook-tawny.vercel.app',
      pic1: '../portfolio-images/b-01.jpg',
      pic2: '../portfolio-images/fb-02.jpg',
      pic3: '../portfolio-images/b-03.jpg',
      github: 'https://github.com/tundenewcodes/facebook',
    },
    {
      name: 'Instagram App',
      pic1: 'https://i.ibb.co/SmQ0cMy/instaa.jpg',
      pic2: 'https://i.ibb.co/SmQ0cMy/instaa.jpg',
      pic3: 'https://i.ibb.co/SmQ0cMy/instaa.jpg',
      host: 'https://instagram-nine-iota.vercel.app/',

      github: 'https://github.com/tundenewcodes/instagram',
    },
    {
      name: 'Hulu Video App',

      host: 'https://hulu-clone-two-bay.vercel.app',
      pic1: '../portfolio-images/hu-01.jpg',
      pic3: '../portfolio-images/hu-03.jpg',
      pic2: '../portfolio-images/hu-02.jpg',
      github: 'https://github.com/tundenewcodes/hulu',
    },
    {
      name: 'Google App',

      host: 'https://google-smoky.vercel.app',
      pic1: '../portfolio-images/g0-01.jpg',
      pic2: '../portfolio-images/go-02.jpg',
      pic3: '../portfolio-images/go-03.jpg',
      github: 'https://github.com/tundenewcodes/google',
    },
    {
      name: 'Food Ordering App',

      host: 'https://meal-ordering-app.vercel.app/',
      pic1: '../portfolio-images/fo-01.jpg',
      pic2: '../portfolio-images/fo-02.jpg',
      pic3: '../portfolio-images/fo-03.jpg',
      github: 'https://github.com/tundenewcodes/meal-ordering-app',
    },
    {
      name: 'Burger App',

      host: 'https://my-burger-app-coral.vercel.app',
      pic1: '../portfolio-images/bp-01.jpg',
      pic2: '../portfolio-images/bp-02.jpg',
      pic3: '../portfolio-images/bp-03.jpg',
      github: 'https://github.com/tundenewcodes/myBurger',
    },
    {
      name: 'Dictionary App',

      host: 'https://my-dictionary-one.vercel.app',
      pic1: '../portfolio-images/di-01.jpg',
      pic2: '../portfolio-images/di-02.jpg',
      pic3: '../portfolio-images/di-03.jpg',
      github: 'https://github.com/tundenewcodes/my-dictionary',
    },
    {
      name: 'Rick and monty App',

      host: 'https://rick-and-monty.vercel.app',
      pic1: '../portfolio-images/rm-01.jpg',
      pic2: '../portfolio-images/rm-02.jpg',
      pic3: '../portfolio-images/rm-01.jpg',
      github: 'https://github.com/tundenewcodes/rick-and-monty',
    },
    {
      name: 'Expense Tracker',

      host: 'https://expenses-tracker-webapp.netlify.app',
      pic1: '../portfolio-images/et-01.jpg',
      pic2: '../portfolio-images/et-02.jpg',
      pic3: '../portfolio-images/et-03.jpg',
      github: 'https://github.com/tundenewcodes/expense-tracker',
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

export default FrontendProjects
