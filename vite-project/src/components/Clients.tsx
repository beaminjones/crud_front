import { FaTrash, FaEdit } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from '../helpers/Api';

export function Clients() {
  const api = Api();

  const [clients, setClients] = useState([]);

  useEffect(() => {
      const getClients = async () => {
          try {
              const cats = await api.getClients();
              setClients(cats);
          } catch ( error ) {
              console.error(error);
          }
      }
      getClients();
  }, []);

  return (
    <div className="table-clients">
      <div className="header-left">
        <IMaskInput mask="00.000.000/0000-00" />
        <BsSearch className="icon-search" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome da Empresa (Razão social)</th>
            <th>CNPJ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody> {
          clients.map((client)=> (
          <tr>
            <td>{client.name}</td>
            <td>Empresa 123</td>
            <td>546785787</td>
            <td>
              <Link to="/form">
                <FaEdit />
              </Link>
            </td>
            <td>
              <FaTrash />
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}
