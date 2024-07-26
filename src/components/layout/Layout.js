import Footer from "../footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import layout from "./Layout.module.sass"

export default function Layout({children}) {
    return ( <article className={layout.app}>
    <Header />
    <Nav/>
    {children}
    <Footer />
    </article> );
}
