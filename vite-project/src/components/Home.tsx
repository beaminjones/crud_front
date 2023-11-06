import { BsPeopleFill } from "react-icons/bs";
import Api from '../helpers/Api';
import { useEffect, useState } from "react";

export function Home() {

  const api = Api();

  const [clients, setClients] = useState([]);

  useEffect(() => {
      const getClients = async () => {
          try {
              const client = await api.getClients();
              setClients(client);
          } catch ( error ) {
              console.error(error);
          }
      }
      getClients();
  }, []);
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>CLIENTS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{clients.length}</h1>
        </div>
      </div>
    </main>
  );
}
