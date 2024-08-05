import Footer from "../footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import layout from "./Layout.module.sass";

export default function Layout({ children }) {
  return (
    <article className={layout.app}>
      <div className={layout.nav}>
        <Nav />
      </div>
      <div className={layout.header}>
        <Header title={layout.title} />
      </div>
      <div className={layout.posts}>
        <main className={layout.content}>{children}</main>
      </div>
      <div className={layout.footer}>
        <Footer />
      </div>
    </article>
  );
}
