import { useEffect, useState } from "react";

import InputForm from "../form/InputForm";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <form className={styles.form}>
        <InputForm
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
        <InputForm
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
        <div>
          <Select
            name="category_id"
            text="Selecione a categoria"
            options={categories}
          />
        </div>
        <div>
          <SubmitButton text={btnText} />
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
