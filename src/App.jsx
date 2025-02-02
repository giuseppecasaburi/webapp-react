import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviesCatagolPage from "./pages/MoviesCatagolPage"
import AppLayout from "./layout/AppLayout"
import SinglePage from "./pages/SinglePage"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesCatagolPage />} />
            <Route path="/detail-page/:slug" element={<SinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
