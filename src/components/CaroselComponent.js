import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import '../App'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';


const CarouselComponent = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    const Data = [
        {
            id:'1',
            percentage:97,
            val:'97%',
            img:'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg',
            alt:'React Native',
            text:'React Native'
        },
        {
            id:'2',
            percentage:95,
            val:'95%',
            img:'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg',
            alt:'React',
            text:'React'
        },
        {
            id:'1',
            percentage:97,
            val:'97%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGBY1N6PULlAAUzaJHwVYOcUaQJRYRdKl-6uHOi2O6A&s',
            alt:'Redux',
            text:'Redux'
        },
        {
            id:'1',
            percentage:97,
            val:'97%',
            img:'https://www.gstatic.com/devrel-devsite/prod/v1cfe30952218fac985c78c6c0da0de11fade09219719e8a9dbc367e6d5d7cee9/firebase/images/touchicon-180.png',
            alt:'Firebase',
            text:'Firebase'
        },
        {
            id:'3',
            percentage:90,
            val:'90%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmL9nQKqfApoSpgAC2z140s7NqUjA-Y6C0DJuYA8saEUONVwu970PEDp6N-mpAnKBY0K8&usqp=CAU',
            alt:'JavaScript',
            text:'JavaScript'
        },
        {
            id:'4',
            percentage:75,
            val:'75%',
            img:'https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
            alt:'Express',
            text:'Express'
        },
        {
            id:'5',
            percentage:75,
            val:'75%',
            img:'https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png',
            alt:'Node',
            text:'Node'
        },
        {
            id:'6',
            percentage:90,
            val:'80%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5hGyIUIkd024iBrqdrAAqABY4cFpzCr1OAadKQDqDUQabnhPxM5U8ri5fWSDeMfeMHs&usqp=CAU',
            alt:'SQL',
            text:'SQL'
        },
        {
            id:'7',
            percentage:50,
            val:'50%',
            img:'https://www.tutorialsteacher.com/Content/images/home/mongodb.svg',
            alt:'MongoDB',
            text:'MongoDB'
        },
        {
            id:'12',
            percentage:60,
            val:'60%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToI6ke5zhYPavDbyc_qcQ4JocCFeGwV_30bA&usqp=CAU',
            alt:'GQL',
            text:'GQL'
        },
        {
            id:'8',
            percentage:100,
            val:'100%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPqr0_W1__LYCmopa5QJPV5RQ6qVopNwB2ErCXnNGK1lY3I8aXZsc_onG39nTmYeV0hA&usqp=CAU',
            alt:'Postman',
            text:'Postman'
        },
        {
            id:'9',
            percentage:90,
            val:'90%',
            img:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            alt:'GitHub',
            text:'GitHub'
        },
        {
            id:'10',
            percentage:85,
            val:'80%',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
            alt:'Python',
            text:'Python'
        },
        {
            id:'11',
            percentage:50,
            val:'80%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnK18k0MgyfZ5UbR8q3zwbqWGohdzQH4aM94B668kj-TQxfnT1qGju6hiALojcqeI7HM&usqp=CAU',
            alt:'JAVA',
            text:'JAVA'
        },
        {
            id:'13',
            percentage:75,
            val:'75%',
            img:'https://www.doulos.com/media/1946/webinar-c.jpg?anchor=center&mode=crop&width=410&height=230&rnd=132742611600000000',
            alt:'C',
            text:'C'
        },
        {
            id:'14',
            percentage:95,
            val:'95%',
            img:'https://img.freepik.com/free-icon/html5_318-903450.jpg',
            alt:'HTML',
            text:'HTML'
        },
        {
            id:'15',
            percentage:95,
            val:'95%',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtocbl03k27ke5hN6hc8ECa_syKTpdcJx2Y6zn9-U-7INYaREc7kNKWQCpA3H7v6RFnjQ&usqp=CAU',
            alt:'CSS',
            text:'CSS'
        },
        {
            id:'17',
            percentage:80,
            val:'80%',
            img:'https://assets.telegraphindia.com/telegraph/2022/Feb/1645256492_resized-pic13.jpg',
            alt:'IOT',
            text:'IOT'
        },
        {
            id:'18',
            percentage:80,
            val:'80%',
            img:'https://www.clipartmax.com/png/middle/117-1179524_icon-arduino-arduino-logo.png',
            alt:'Arduino',
            text:'Arduino'
        },
        {
            id:'19',
            percentage:50,
            val:'80%',
            img:'https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png',
            alt:'RaspberryPi',
            text:'RaspberryPi'
        },
        {
            id:'12',
            percentage:null,
            val:'Learning',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTboi8NQNwsEH_AmRP8rIeAuqbceE8sqCCuRgZq0nlZBmf0HX4HFsvfYG7QJpBC1DDEIg&usqp=CAU',
            alt:'Spring boot',
            text:'Spring boot'
        },
        
    ]

    return(
        <div className='marqueeContainer'>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {Data.map((item)=>{
                    return(
                        <div style={{marginRight:'20px'}}>
                            <CircularProgressbarWithChildren
                                key={item.id}
                                value={item.percentage}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor:"#3e98c7",
                                    textColor:"#fff",
                                    pathColor:'#4A2FBD',
                                    // pathColor:"rgb(183, 194, 83)" ,
                                    trailColor:'transparent',
                                })}
                                
                            >
                                <img style={{width: '20%',height:'20%',borderRadius:10,marginTop: -10}} src={item.img} alt={item.alt}/>
                                <div style={{ fontSize: 14, marginTop:'10px'}}>
                                    <strong>{item.val}</strong> <br/>
                                    <strong>{item.text}</strong>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    )
                }
                )}
            </Carousel>
        </div>
        
    )
}


export default CarouselComponent

{/* <CircularProgressbarWithChildren
            value={percentage}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor:"#3e98c7",
                textColor:"#fff",
                pathColor:"#fff" ,
                trailColor:'transparent'
            })}
            
        >
            <img style={{ width: 40, marginTop: -5 }} src={img} alt={alt}/>
            <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>{val}</strong> mate
            </div>
        </CircularProgressbarWithChildren> */}