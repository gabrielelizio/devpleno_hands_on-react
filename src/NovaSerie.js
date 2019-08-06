import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const NovaSerie = () => {
   const [name, setName] = useState();
   const [success, setSuccess] = useState(false);

   const onChange = e => setName(e.target.value);

   const save = () => {
      axios
         .post("/api/series", {
            name
         })
         .then(res => setSuccess(true));
   };

   if (success) {
      return <Redirect to="/Series" />;
   }

   return (
      <div className="container-fluid">
         <h1>Nova Serie</h1>
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

export default NovaSerie;
