import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  // useCallback hook to prevent unnecessary re-renders, read docs : 
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed){ 
      str += "0123456789";
    }
    if (charAllowed){
      str += "!@#$%^&*()";
    }

    // Make the password
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-600 bg-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input type="text" value={password} className="outline-none w-full px-4 py-2" placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-4 py-2 shrink-0">Copy</button>
        </div>

        <div className="flex items-center mb-4">
          <input type="range" min={8} max={100} value={length} onChange={(event) => setLength(event.target.value)} className="cursor-pointer" />
          <label className="mr-2">Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" checked={numberAllowed} onChange={(event) => setNumberAllowed(event.target.checked)} className="cursor-pointer" />
          <label htmlFor='numberInput' className="ml-2">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" checked={charAllowed} onChange={(event) => setCharAllowed(event.target.checked)} className="cursor-pointer" />
          <label htmlFor='charInput' className="ml-2">Include Special Characters</label>
        </div>

      </div>
    </>
  )
}

export default App
