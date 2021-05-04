import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-deliveroo-api.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <Hero data={data.restaurant} />
      <Content data={data.categories} />
      <div className="basket">
        <button
          onClick={() => {
            return console.log(data.item);
          }}
        >
          Valider mon panier
        </button>
      </div>
      <footer>Fait avec React grâce au Réacteur par Tom</footer>
    </div>
  );
}

export default App;
