import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"

function App() {

  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
