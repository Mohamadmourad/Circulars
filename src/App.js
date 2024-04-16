import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />}></Route>
      <Route path="/createPost" element={<CreatePost />}></Route>
      <Route path="/Profile">
        <Route path=":userId" element={ <Profile />}></Route>
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
