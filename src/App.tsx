import logo from "./assets/logo.svg";

const App = () => {
  return (
    <body className="md: p-5">
      <nav className="flex justify-between">
        <img className="h-10 " src={logo} alt="" />{" "}
        <ul className="flex items-center gap-2">
          <li className="font-bold">
            <a href="#">sobre</a>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold underline text-center">Hello</h1>
    </body>
  );
};

export default App;
