import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  let [length, setLength] = useState(0);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) {
        str += "0123456789";
      }
      if (charAllowed) {
        str += "!@#$%^&*()~`-{};<>?/'_";
      }

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1); // random char index
        pass += str.charAt(char);
      }

      setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(()=> generatePassword(),[length,numberAllowed,charAllowed,generatePassword]);

  const copyPasswordToClipBoard = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
        />
        <button onClick={copyPasswordToClipBoard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
                setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
