import { BrowserRouter,Routes,Route,} from "react-router-dom";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/sign-up";
import { NewsPage } from "../pages/news";
import { PreservationPage } from "../pages/preservation-areas";
import { HomePage } from "../pages/home";
import {CompaniesPage} from "../pages/companies";
import {TransparencyPage} from "../pages/transparency";
import {PeoplePage} from "../pages/people";
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
            <Route path="news" element={<NewsPage />} />
            <Route path="preservation" element={<PreservationPage />} />
            <Route path="companies" element={<CompaniesPage />} />
            <Route path="transparency" element={<TransparencyPage />} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="user" element={<Private Item={UserPage} />} />
            </Routes>
      </BrowserRouter>
    );
};