import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import NavigationBar from "./components/Navigation/navigation.component";
import SignIn from "./routes/singin/signin.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
