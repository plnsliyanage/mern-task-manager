import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold text-blue-600">MERN Task Manager</h1>
      </div>
    </>
  );
}

export default App;
