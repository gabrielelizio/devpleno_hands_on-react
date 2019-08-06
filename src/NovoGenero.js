import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const NovoGenero = () => {
   const [name, setName] = useState();
   const [success, setSuccess] = useState(false);

   const onChange = evt => setName(evt.target.value);

   const save = () => {
      axios.post("/api/genres", { name }).then(res => {
         setSuccess(true);
      });
   };

   if (success) {
      return <Redirect to="/generos/" />;
   }

   return (
      <div className="container">
         <h1>Novo Genêro</h1>
         <form>
            <div className="from-group">
               <label htmlFor="name">Nome:</label>
               <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Nome do genêro"
                  value={name}
                  onChange={onChange}
               />
            </div>
            <button
               className="btn btn-success mt-2"
               type="button"
               onClick={save}
            >
               Salvar
            </button>
         </form>
      </div>
   );
};

export default NovoGenero;
