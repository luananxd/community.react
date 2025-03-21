import { BrowserRouter, Routes, Route } from 'react-router'
// Layouts
import DefaultLayout from '@/components/main/layout/DefaultLayout'
// Pages
import MainPage from '@/pages/MainPage'
import MarsExplorationPage from '@/pages/MarsExplorationPage'
import CounterPage from '@/pages/CounterPage'

export default function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<MainPage />}
          ></Route>

          <Route
            path="/mars-exploration"
            element={<MarsExplorationPage />}
          ></Route>

          <Route
            path="/counter"
            element={<CounterPage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
