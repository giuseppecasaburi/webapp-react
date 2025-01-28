import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviesCatagolPage from "./pages/MoviesCatagolPage"
import AppLayout from "./layout/AppLayout"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesCatagolPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
