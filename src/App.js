import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Profile from './pages/Profile.jsx';
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import checkFollow from "./functions/checkFollow.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />}/>
      <Route path="/createPost" element={<CreatePost />} />
      <Route path="/Profile">
        <Route path=":userId" element={ <Profile />} loader={ checkFollow }/>
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Route>
  )
)
function App() {

  return (
      <RouterProvider router={router}/>
  );
}
export default App;
