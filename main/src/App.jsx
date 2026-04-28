import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity2 from "./pages/activity2/Activity2";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
