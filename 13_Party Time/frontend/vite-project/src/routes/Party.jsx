import partyFecth from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import useToast from "../hook/useToast";

import "./Party.css";

const Party = () => {
  const { id } = useParams();

  const [party, setParty] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadParty() {
      const res = await partyFecth.get(`/parties/${id}`);

      console.log(res.data);

      setParty(res.data);
    }
    loadParty();
  }, []);

  async function handleDelete() {
    const res = await partyFecth.delete(`/parties/${id}`);

    if (res.status === 200) {
      navigate("/");

      useToast(res.data.msg);
    }
  }

  if (!party) return <p>Carregando...</p>;

  return (
    <div className="party">
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link to={`/party/edit/${party._id}`} className="btn-party">Editar</Link>
        <button onClick={handleDelete} className="btn-secondary-party">
          Excluir
        </button>
      </div>
      <p>Orçamento: R${party.budget}</p>
      <h3>Serviços contratados:</h3>
      <div className="services-container">
        {party.services.map((service) => (
          <div className="service" key={service._id}>
            <img src={service.image} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Party;
