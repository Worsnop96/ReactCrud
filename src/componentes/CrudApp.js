import React, { useState } from "react";
import Form from "./Form";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    nombre: "Seiya",
    constelacion: "Pegaso",
  },
  {
    id: 2,
    nombre: "Shiryu",
    constelacion: "Dragón",
  },
  {
    id: 3,
    nombre: "Hyoga",
    constelacion: "Cisne",
  },
  {
    id: 4,
    nombre: "Shun",
    constelacion: "Andrómeda",
  },
  {
    id: 5,
    nombre: "Ikki",
    constelacion: "Fénix",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Estas seguro de eliminar el registro ${id}`);

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
  };

  return (
    <div>
      <h2>Crud App</h2>
      <article className="grid-1-2">
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};

export default CrudApp;
