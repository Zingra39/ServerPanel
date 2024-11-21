import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Link } from "./pages/Link";
import { SpreadsheetLink } from "./pages/SpreadsheetLink";
import { Clientes } from "./pages/Client";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<DefaultLayout/>} >
                <Route path="/home" element={<Home />}/>
                <Route path="/home/link" element={<Link />} />
                <Route path="/home/link/addmultipleslinks" element={<SpreadsheetLink />} />
                <Route path="/home/clientes" element={<Clientes />} />
            </Route>
        </Routes>
    )
}