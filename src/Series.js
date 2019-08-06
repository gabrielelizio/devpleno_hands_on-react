import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Series = () => {
   const [data, setData] = useState([]);
   useEffect(() => {
      axios.get("/api/series").then(res => {
         setData(res.data.data);
      });
   }, []);

   const deleteSeries = id =>
      axios
         .delete(`/api/series/${id}`)
         .then(() => setData(data.filter(item => item.id !== id)));

   const renderizaLinha = record => {
      return (
         <tr key={record.id}>
            <th scope="row">{record.id}</th>
            <td>{record.name}</td>
            <td>
               <button
                  className="btn btn-danger"
                  onClick={() => deleteSeries(record.id)}
               >
                  Remover{" "}
               </button>
               <Link to={"/Series/" + record.id} className="btn btn-warning">
                  Info
               </Link>
            </td>
         </tr>
      );
   };
   if (data.length === 0) {
      return (
         <div className="container">
            <h1>Series</h1>
            <div>
               {" "}
               <Link to="/series/novo" className="btn btn primary mb-2">
                  Nova Serie
               </Link>
            </div>
            <div className="alert alert-warning" role="alert">
               Você não possui series criadas.
            </div>
         </div>
      );
   }
   return (
      <div className="container-fluid">
         <h1>Series</h1>
         <div>
            {" "}
            <Link to="/series/novo" className="btn btn primary mb-2">
               Nova Serie
            </Link>
         </div>
         <table className="table table-dark">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Ações</th>
               </tr>
            </thead>
            <tbody>{data.map(renderizaLinha)}</tbody>
         </table>
      </div>
   );
};

export default Series;
