import Marquee from "react-fast-marquee"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Services = () =>{
    

    return(
        <section className="skill" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Services</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Marquee gradient={false} speed={100}>
                                <MDBCard style={{height:'300px', width:'300px', margin:'4em', boxShadow: '6px 6px 10px #F4AAB9',padding: '1em',}}>
                                    <MDBCardBody>
                                        <MDBCardTitle style={{color:'black', fontSize:'22px', fontWeight:'bold'}}>Application development</MDBCardTitle>
                                        <MDBCardText style={{color:'black', fontSize:'20px', fontStyle:'italic'}}>
                                        sfkjbrwivjkn cndsjkvnjiernvc.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard style={{height:'300px', width:'300px',margin:'4em',boxShadow: '6px 6px 10px #F4AAB9',padding: '1em',}}>
                                    <MDBCardBody>
                                        <MDBCardTitle style={{color:'black', fontSize:'22px', fontWeight:'bold'}}>WebSite development</MDBCardTitle>
                                        <MDBCardText style={{color:'black', fontSize:'20px', fontStyle:'italic'}}>
                                        sfkjbrwivjkn cndsjkvnjiernvc.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard style={{height:'300px', width:'300px',margin:'4em',boxShadow: '6px 6px 10px #F4AAB9',padding: '1em',}}>
                                    <MDBCardBody>
                                        <MDBCardTitle style={{color:'black', fontSize:'22px', fontWeight:'bold'}}>Api's development</MDBCardTitle>
                                        <MDBCardText style={{color:'black', fontSize:'20px', fontStyle:'italic'}}>
                                        sfkjbrwivjkn cndsjkvnjiernvc.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </Marquee>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
        
    )
}

export default Services