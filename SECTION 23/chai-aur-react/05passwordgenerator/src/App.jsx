import {useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import { use } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  // password generator method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!@#$%^&*(()_+{}?><";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange
    window.navigator.clipboard.writeText(password)
  },[password])




  // Use callback hook ke baare mai padho
  // USE effect hook

  useEffect(() => { 
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, setPassword]);
  return (
    <>
      <div
        className="flex items-center justify-center w-screen h-screen bg-center"
        style={{
          backgroundImage: `url("https://cyberpedia.reasonlabs.com/IMG/password%20generator.jpg")`,
        }}
      >
        <div className="w-150 h-50 rounded-4xl text-amber-500 flex items-center justify-center flex-col shadow-lg border-2 bg-black bg-opacity-70 p-6">
          <h1 className="text-xl text-center mb-4">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 bg-amber-50 text-black"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard}>Copy</button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>
            <label>Length: {length}</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;
