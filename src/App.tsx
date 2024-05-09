import logo from "./assets/logo.svg";
import computer from "./assets/computer.jpg";

const App = () => {
  return (
    <body className="md: p-5">
      <nav className="flex justify-between nav">
        <img className="h-10 " src={logo} alt="" />{" "}
        <ul className="flex items-center gap-2">
          <li className="font-bold">
            <a href="#">sobre</a>
          </li>
        </ul>
      </nav>
      <section>
        <div>
          <h1 className="text-3xl font-bold underline text-center">
            Frontend Developer
          </h1>

          <img src={computer} alt="img" />
        </div>
      </section>
    </body>
  );
};

export default App;
