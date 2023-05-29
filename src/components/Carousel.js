import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Carousel = () => {
  return (
    <ReactOwlCarousel className="owl-theme custom-carousel" 
        loop 
        margin={25}
        nav={false}
        dots
        autoplay
        smartSpeed={1000}
        center
        responsive={{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }}>
        <div class="custom-item text-center">
            <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/person-1.jpg" alt="" style={{width:"80px", height:"80px"}}/>
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="custom-text bg-light text-center p-4">
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt cumque sed quidem itaque, quibusdam illum, autem excepturi minus quos, eaque necessitatibus nostrum accusantium odit. Tempore suscipit nobis sed necessitatibus!</p>
            </div>
        </div>
        <div class="custom-item text-center">
            <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/person-2.jpg" alt="" style={{width:"80px", height:"80px"}}/>
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>  
            <div className="custom-text bg-light text-center p-4">
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt cumque sed quidem itaque, quibusdam illum, autem excepturi minus quos, eaque necessitatibus nostrum accusantium odit. Tempore suscipit nobis sed necessitatibus!</p>
            </div> 
        </div>
        <div class="custom-item text-center">
            <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/person-3.jpg" alt="" style={{width:"80px", height:"80px"}}/>
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="custom-text bg-light text-center p-4">
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt cumque sed quidem itaque, quibusdam illum, autem excepturi minus quos, eaque necessitatibus nostrum accusantium odit. Tempore suscipit nobis sed necessitatibus!</p>
            </div>
        </div>
        <div class="custom-item text-center">
            <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/person-4.jpg" alt="" style={{width:"80px", height:"80px"}}/>
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="custom-text bg-light text-center p-4">
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt cumque sed quidem itaque, quibusdam illum, autem excepturi minus quos, eaque necessitatibus nostrum accusantium odit. Tempore suscipit nobis sed necessitatibus!</p>
            </div>
        </div>
    </ReactOwlCarousel>
  )
}

export default Carousel
