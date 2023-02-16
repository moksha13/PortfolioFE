import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import CarouselComponent from './CaroselComponent';



export const Skills = () => {
  

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        
                        {/* <div className='marqueeContainer'>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
                                 <CarouselComponent/>   
                            {/* </Carousel>
                            
                        </div> */}
                    </div>
                </div>
            
            </div>
        </div>

        {/* Marquee gradient={false} */}
        {/* <img className="background-image-left" src={mocha} alt="Image" /> */}
    </section>
  )
}

