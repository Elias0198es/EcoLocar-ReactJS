import { BrowserRouter,Routes,Route,} from "react-router-dom";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/sign-up";
import { HomePage } from "../pages/home";
import UserPage from "../pages/user"
import useAuth from '../hooks/useAuth'

const Private = ({ Item }) => {
    const { signed } = useAuth()

    return signed > 0 ? <Item /> : <LoginPage />
}

export const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sign" element={<SignUpPage />} />
            <Route path="user" element={<Private Item={UserPage} />} />
            </Routes>
      </BrowserRouter>
    );
};