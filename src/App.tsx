const App = () => {
  const handleClick = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
    });
    if (tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: () => {
          const body = document.querySelector("body");
          if (body) {
            body.style.backgroundColor = "red";
          }
        },
      });
    }
  };
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>button</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
