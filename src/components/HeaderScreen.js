import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import moksha from '../images/moksha.webp'
import { FiLinkedin,FiGithub,FiInstagram } from "react-icons/fi";
//import '../App.css'
const HeaderScreen = ()=>{
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value)
    }

    return(
      <div style={{flex:1, width:'100%'}}>
        <Navbar expand="lg" className={scrolled?"scrolled":"" } >
          <Container>
            <Navbar.Brand href="#home" className="moksha" style={{marginBottom:"2%"}}>
                <img src={moksha} alt="logo" className="moksha"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{marginTop:'6%'}}>
                <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#certification" className={activeLink==='certification'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('certification')}>Certifications</Nav.Link>
                <Nav.Link href="#services" className={activeLink==='service'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('service')}>Services</Nav.Link>
                <span className="navbar-text" style={{marginLeft:'30%'}}>
                    <div className="social-icon" style={{display:"flex", flexDirection:"row", marginBottom:'10%'}}>
                      <a href="https://www.linkedin.com/in/moksha-vemula-84ba06225">
                          <FiLinkedin size={24} onClick={()=>onUpdateActiveLink('linkedin')} className="linkdin" color={activeLink==='linkdin'?'black':'white'}/>
                      </a>
                      <a href="https://github.com/moksha13"><FiGithub size={24} onClick={()=>onUpdateActiveLink('github')} className="linkdin" color={activeLink==='github'?'black':'white'}/></a>
                      <a href="https://instagram.com/moksha_vemula?igshid=YmMyMTA2M2Y="><FiInstagram size={24} onClick={()=>onUpdateActiveLink('instagram')} className="linkdin" color={activeLink==='instagram'?'black':'white'}/></a>
                    </div>
                    <button className="vvd" onClick={()=>{console.log("clicked")}} style={{marginBottom:'10%'}}>
                      <span>contack</span>
                    </button>
                </span>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
        
    )
}

export default HeaderScreen


//style={{color:activeLink==='linkedin'?'black':'white'}}