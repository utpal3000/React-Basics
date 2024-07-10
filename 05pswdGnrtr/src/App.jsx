import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook - when need ref.
  const passwordRef = useRef(null)

    // optimising
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzlkjhgfdsaqwertyuiop';

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+={}~`'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    if(length<8){document.getElementById('slider').style.accentColor='red'}
    else if(length>8 && length<12){document.getElementById('slider').style.accentColor='yellow'}else{document.getElementById('slider').style.accentColor='Green'}

  },[length, numberAllowed, charAllowed, setPassword]);
  
  const copyPasswordToClipboard=useCallback(()=>{
    //window coz react
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,10);
    // use above only when required!
    window.navigator.clipboard.writeText(password)
  },[password]);
  // passwordGenerator()
  // useEffect - multiple running 1st on pageload and then of any of the given parameter changes
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div id="main" className='text-4xl text-center text-purple-100'>
      Password Generator
    </div>
    <div
    className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-800 text-purple-800'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'
    >
      <input
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
  <button onClick={copyPasswordToClipboard} className='outline-none bg-purple-800 text-purple-100 px-3 py-0.5 shrink-0'>Copy</button>

    </div>
    <div
    className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        id='slider'
        type="range" 
        min={6}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label >
          Length : {length}
        </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <label htmlFor='numberInput'> Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='numberInput'
        onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        <label htmlFor='characterInput'> Characters</label>
      </div>
    </div>
    </div>
    </>
  )
};

export default App;
