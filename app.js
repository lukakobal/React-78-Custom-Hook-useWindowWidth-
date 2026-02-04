import { useState, useEffect } from "react";
import "./styles.css";

// ✅ CUSTOM HOOK
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();

  return (
    <div className="app">
      <h1>React 78 – Custom Hook</h1>
      <p>Širina okna: {width}px</p>

      {width < 600 && <p>📱 Mobile pogled</p>}
      {width >= 600 && width < 1024 && <p>💻 Tablet pogled</p>}
      {width >= 1024 && <p>🖥️ Desktop pogled</p>}
    </div>
  );
}

export default App;
