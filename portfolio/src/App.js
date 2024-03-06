import "./App.css";
import Home from "./components/Home";
import logo from "./img/Logo.png";



function App() {
  return (
    <div className="App p-14">
      <nav className="h-12 mx-16 flex flex-wrap justify-between ">
        <span>
          <img className="h-10 mt-2" src={logo}></img>
        </span>
        <ul className="flex flex-wrap gap-12 mt-4">
         <li className="anta-regular text-xl font-medium hover:text-2xl  hover:font-bold hover:border-b hover:border-b-black hover:border-b-2  active:text-2xl  active:font-bold active:border-b active:border-b-black active:border-b-2 ">
            Home
          </li>
          <li className="anta-regular text-xl font-medium hover:text-2xl  hover:font-bold   hover:border-b hover:border-b-black hover:border-b-2 active:text-2xl  active:font-bold active:border-b active:border-b-black active:border-b-2 ">
            Male
          </li>
          <li className="anta-regular text-xl font-medium hover:text-2xl  hover:font-bold   hover:border-b hover:border-b-black hover:border-b-2 active:text-2xl  active:font-bold active:border-b active:border-b-black active:border-b-2 ">
            Female
          </li>
          <li className="anta-regular text-xl font-medium hover:text-2xl  hover:font-bold   hover:border-b hover:border-b-black hover:border-b-2 active:text-2xl  active:font-bold active:border-b active:border-b-black active:border-b-2 ">
            FAQ
          </li>
          <li className="anta-regular text-xl font-medium hover:text-2xl  hover:font-bold   hover:border-b hover:border-b-black hover:border-b-2 active:text-2xl  active:font-bold active:border-b active:border-b-black active:border-b-2 ">
            About
          </li>
        </ul>
        <div className="">
          <from className="flex flex-wrap p-1 gap-2 ">
            <svg
              className="h-9 mt-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              id="search"
            >
              <path
                fill="#231F20"
                d="M20.745 32.62c2.883 0 5.606-1.022 7.773-2.881L39.052 40.3a.996.996 0 0 0 1.414.002 1 1 0 0 0 .002-1.414L29.925 28.319c3.947-4.714 3.717-11.773-.705-16.205-2.264-2.27-5.274-3.52-8.476-3.52s-6.212 1.25-8.476 3.52c-4.671 4.683-4.671 12.304 0 16.987a11.9 11.9 0 0 0 8.477 3.519zm-7.06-19.094c1.886-1.891 4.393-2.932 7.06-2.932s5.174 1.041 7.06 2.932c3.895 3.905 3.895 10.258 0 14.163-1.886 1.891-4.393 2.932-7.06 2.932s-5.174-1.041-7.06-2.932c-3.894-3.905-3.894-10.258 0-14.163z"
              ></path>
            </svg>
            <button className="  rounded-xl border-[3px] border-black py-1 px-8 h-[40px] font-medium text-xl">
              Search
            </button>
          </from>
        </div>
      </nav>
      <Home/>  
       </div>
  );
}

export default App;
