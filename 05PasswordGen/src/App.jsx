import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    const numbers = "0123456789";
    const charcters = "!@#$%^&*()-_=+[]{};:<.>/?'`";
    if (numberAllowed) alpha += numbers;
    if (charAllowed) alpha += charcters;

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * alpha.length);
      password += alpha.charAt(char);
    }
    setPassword(password);
  }, [length, charAllowed, numberAllowed]); // Should not add frequently change dependecies

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    console.log("Copied");
    passwordRef.current?.select();
  };

  return (
    
    <div className="py-3 w-full bg-gray-800 pb-10">
      <div className="w-full h-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500 mt-5">
        <h1 className="text-white text-center bg-red-500 rounded-md py-3 text-2xl">
          {" "}
          Password Generator{" "}
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <div className="flex text-sm gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length"> Length: {length} </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="numbers"
              id=""
              value={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number"> Numbers </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="chars"
              id=""
              value={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number"> Chars </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
