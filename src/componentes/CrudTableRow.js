import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { nombre, constelacion, id } = el;
  return (
    <tr>
      <td>{el.nombre}</td>
      <td>{el.constelacion}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
