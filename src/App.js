// import axios from "axios";
// import { useEffect, useState } from "react";

// const Counter = () =>{
//   const [state, setState] = useState(0)

//   const Clicked = () =>{
//     setState(state+1)
//   }
//   return(
//     <button onClick={()=>Clicked()}>
//       count {state}
//     </button>
//   )
// }
// const HookCounterTwo = () =>{
//   const [state, setState] = useState(0)
//   let val = 0 
//   const Increment = () =>{
//     setState(state+1)
//   }
//   const Decrement = () =>{
//     setState(state-1)
//   }
//   const Reset = () =>{
//     setState(val )
//   }
//   return(
//     <div>
//       Count: {state}
//       <button onClick={()=>Increment()}>Increment</button>
//       <button onClick={()=>Reset()}>Reset</button>
//       <button onClick={()=>Decrement()}>Decrement</button>
//     </div>
//   )
// }

// const HookCounter3 = ()=>{
//   const [name, setName] = useState({firstName:'', lastName:''})
//   return(
//     <div>
//       <input type='text' value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})}/>
//       <input type='text'value={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})}/>
//       <h2>{name.firstName}</h2>
//       <h2>{name.lastName}</h2>
//     </div>
//   )
// }
// const HookCounter4 = () =>{
//   const [items, setItems] = useState([])

//   const ItemClicked =()=>{
//     setItems([...items,{
//       id:items.length,
//       value:Math.floor(Math.random()*10)+1
//     }])
//   }

//   return(
//     <div>
//       <button onClick={ItemClicked}>Add a number</button>
//       <ul>
//         {items.map((item)=>(
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const HookMouse = ()=>{
//   const [x, setX] = useState(0)
//   const [y, setY] = useState(0)

//   const mouseMovement = (e) =>{
//     setX(e.clientX)
//     setY(e.clientY)
//   }

//   useEffect(()=>{
//     window.addEventListener('mousemove',mouseMovement)
//   },[])
//   return(
//     <div>
//       Hooks X - {x} Y- {y}
//     </div>
//   )
// }

// const DataFetching = () =>{
//   const [posts, setPosts] = useState([])
//   useEffect(()=>{
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(res=>{
//         setPosts(res.data)
//       })
//       .catch(err=>{
//         console.log(err)
//       })

//   },[])

//   return(
//     <div>
//       {posts.map(i=>
//           <li key={i.id}>{i.title}</li>
//         )}
//     </div>
//   )
// }
// function App() {
//   return (
//     <div>
//       <Counter/>
//       <HookCounterTwo/>
//       <HookCounter3/>
//       <HookCounter4/>
//       <HookMouse/>
//       <DataFetching/>
//     </div>
//   );
// }

// export default App;


import Router from "./navigation/Router";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router/>
  );
}

export default App;