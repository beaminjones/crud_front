import { FaTrash, FaEdit } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from '../helpers/Api';

export function Clients() {
  const api = Api();

  const [clients, setClients] = useState([]);

 
const getClients = async (setClients: any, api: any) => {
  try {
    const cats = await api.getClients();
    setClients(cats);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getClients(setClients, api); 
}, []);


const handleDelete = async (id: any) => {
  try {
    await api.deleteClient(id);
    getClients(setClients, api); 
  } catch (error) {
    console.error(error);
  }
};

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
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.companyName}</td>
            <td>{client.document}</td>
            <td>
              <Link to={`/edit/${client.id}`}>
                <FaEdit />
              </Link>
            </td>
            <td>
              <FaTrash onClick={() => handleDelete(client.id)}/>
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}
