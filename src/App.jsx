import { useState } from "react";
import "./App.css";
import { useStorage } from "./components/usestorage";

function App() {
  const [value, setValue] = useState("");
  function handleEnter(event) {
    if (event.key === "Enter" && value.trim() !== "") {
      useStorage(value);
    }
  }
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEnter}
      />
    </>
  );
}

export default App;
