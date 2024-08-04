import About from "./about/About";

export default function Header({ title }) {
  return (
    <header>
      <div className={title}>
        <h1>shanon-coded.</h1>
      </div>
      <About />
    </header>
  );
}
