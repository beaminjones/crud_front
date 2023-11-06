import { IMaskInput } from "react-imask";

export function Form() {
  return (
    <div className="form">
      <form action="" method="POST">
        <label>
          Nome do cliente <br />
          <input type="text" placeholder="Nome" />
        </label>
        <label>
          Senha
          <br />
          <input type="text" placeholder="Senha" />
        </label>
        <label>
          Nome da empresa (Razão Social)
          <br />
          <input type="text" placeholder="Razão social" />
        </label>
        <label>
          CNPJ
          <br />
          <IMaskInput mask="00.000.000/0000-00" placeholder="CNPJ" />
        </label>
        <label>
          CEP
          <br />
          <IMaskInput mask="00000-000" placeholder="CEP" />
        </label>
        <label>
          Endereço
          <br />
          <input type="text" placeholder="Endereço" />
        </label>
        <label>
          Número
          <br />
          <input type="number" placeholder="Número" />
        </label>
        <label>
          Telefone
          <br />
          <IMaskInput
            mask="+ 55 (00) 00000-0000"
            placeholder="Telefone com DDD"
          />
        </label>
        <label>
          E-mail
          <br />
          <input type="email" placeholder="E-mail" />
        </label>
      </form>
      <button type="submit">Save</button>
    </div>
  );
}
