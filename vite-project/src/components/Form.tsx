import { IMaskInput } from "react-imask";
import { useState } from "react";
import Api from "../helpers/Api";

export function Form() {
  const api = Api();

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [companyName, setCompanyName] = useState();
  const [document, setDocument] = useState();
  const [postcode, setPostcode] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const submitForm = async (event: any) => {
    event.preventDefault();

    const payload = {
      name,
      password,
      companyName,
      document,
      postcode,
      address,
      number,
      phone,
      email,
    };

    const json = await api.storeClient(payload);
    console.log(json);
  };

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <label>
          Nome do cliente <br />
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value as any)}
          />
        </label>
        <label>
          Senha
          <br />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value as any)}
          />
        </label>
        <label>
          Nome da empresa (Razão Social)
          <br />
          <input
            type="text"
            placeholder="Razão social"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value as any)}
          />
        </label>
        <label>
          CNPJ
          <br />
          <IMaskInput
            mask="00.000.000/0000-00"
            placeholder="CNPJ"
            value={document}
            onChange={(e) => setDocument(e.target.value as any)}
          />
        </label>
        <label>
          CEP
          <br />
          <IMaskInput
            mask="00000-000"
            placeholder="CEP"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value as any)}
          />
        </label>
        <label>
          Endereço
          <br />
          <input
            type="text"
            placeholder="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value as any)}
          />
        </label>
        <label>
          Número
          <br />
          <input
            type="number"
            placeholder="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value as any)}
          />
        </label>
        <label>
          Telefone
          <br />
          <IMaskInput
            mask="+ 55 (00) 00000-0000"
            placeholder="Telefone com DDD"
            value={phone}
            onChange={(e) => setPhone(e.target.value as any)}
          />
        </label>
        <label>
          E-mail
          <br />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value as any)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
