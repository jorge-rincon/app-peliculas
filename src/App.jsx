import "./styles/app.css";
import { MyRoutes } from "./routes/routes";
import { FcFilmReel } from "react-icons/fc"

function App() {
  return (
    <div>
      <header>
        <h1 className="title"><FcFilmReel /> Best Pelis</h1>        
      </header>
      < MyRoutes />
    </div>
  );
}

export default App;
