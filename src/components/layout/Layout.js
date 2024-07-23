import Footer from "../footer/Footer";
import Header from "../header/Header";
import layout from "./Layout.module.sass"

export default function Layout({children}) {
    return ( <article className={layout.app}>
    <Header />
    {children}
    <Footer />
    </article> );
}
