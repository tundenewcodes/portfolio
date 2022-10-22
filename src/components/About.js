import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image">

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Ambitious full-stack developer, a self-led learner and team player  <br></br>
                                with one year of experience in web developement.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Previously worked as Full stack web developer.<br></br>
                                The technology I've worked on : <span className="text-red ls-2">ReactJs, Typescript, NextJs <br></br>
                                NodeJs, ExpressJs, MongoDb, Python-Django, Redux, MySql, PostgresSql, firebaseV9, git & github, yup & formik, React-Query Semantic-UI, Html, Css, Js, Bootstrap, TailwindCss, Pug, Ejs, Handlebars </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Learning Devops Tools
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>


        </div>
    </Fragment>
  )
}

export default About