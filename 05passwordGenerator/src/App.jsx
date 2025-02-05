import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);


  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}|:<>?-=[]\\;',./";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  useEffect(() => {passwordGen()}, [length, numberAllowed, charAllowed, passwordGen]);

  const copyPasswordClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md-rounded-lg px-4 py-5 my-8 text-black-900 bg-orange-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          
          <button onClick={copyPasswordClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div
          className="flex text-sm gap-x-2">
            <div className='flex-items-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
              <label>length:{length}</label>
            </div>
            <div className='flex items-center gap gap-x-1'>
            <input type="checkbox"
            defualtChecked={numberAllowed}
            id="numberInput"
            onChange={()=>setNumberAllowed((prev)=>!prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap gap-x-1'>
            <input type="checkbox"
            defualtChecked={charAllowed}
            id="charInput"
            onChange={()=>setCharAllowed((prev)=>!prev)}
            />
            <label htmlFor="charInput">Character</label>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;