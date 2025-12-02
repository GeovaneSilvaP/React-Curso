import partyFecth from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import useToast from "../hook/useToast";

import "./Form.css";

const EditParty = () => {
  const { id } = useParams();

  const [party, setParty] = useState(null);

  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadServices() {
      const res = await partyFecth.get("/services");

      console.log(res.data);

      setServices(res.data);

      loadParty();
    }

    async function loadParty() {
      const res = await partyFecth.get(`/parties/${id}`);

      console.log(res.data);

      setParty(res.data);
    }

    loadServices();
  }, []);

  //Add or remove services
  function handleServices(e) {
    const checked = e.target.checked;
    const value = e.target.value;

    const filteredService = services.filter((s) => s._id === value);

    let partyServices = party.services;

    if (checked) {
      partyServices = [...partyServices, filteredService[0]];
    } else {
      partyServices = partyServices.filter((s) => s._id !== value);
    }

    setParty({ ...party, services: partyServices });

  }

  const updateParty = async(e) => {
    e.preventDefault();

    try {
      const res = await partyFecth.put(`/parties/${party._id}`, party);

      if (res.status === 200) {
        navigate(`/party/${id}`);
      }

    } catch (error) {
      useToast(error.response.data.msg, "error");
    }
  };

  if (!party) return <p>Carregando...</p>;

  return (
    <div className="form-page">
      <h2>Editando: {party.title}</h2>
      <p>Ajustando as informações da sua festa</p>
      <form onSubmit={(e) => updateParty(e)}>
        <label>
          <span>Nome da festa:</span>
          <input
            type="text"
            placeholder="Seja Criativo..."
            required
            value={party.title}
            onChange={(e) => setParty({...party, title: e.target.value})}
          />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input
            type="text"
            placeholder="Quem está dando a festa..."
            required
            value={party.author}
            onChange={(e) => setParty({...party, author: e.target.value})}
          />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea
            placeholder="Conte mais sobre a festa..."
            required
            value={party.description}
            onChange={(e) => setParty({...party, description: e.target.value})}
          ></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input
            type="text"
            placeholder="Quanto você pretende investir ?"
            required
            value={party.budget}
            onChange={(e) => setParty({...party, budget: e.target.value})}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL de uma imagem"
            required
            value={party.image}
            onChange={(e) => setParty({...party, image: e.target.value})}
          />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 &&
              services.map((service) => (
                <div className="service" key={service._id}>
                  <img src={service.image} alt={service.name} />
                  <p className="service-name">{service.name}</p>
                  <p className="service-price">R${service.price}</p>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      value={service._id}
                      onChange={(e) => handleServices(e)}
                      checked={
                        party.services.find(
                          (partyService) => partyService._id === service._id
                        ) || ""
                      }
                    />
                    <p>Marque para solicitar</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <input type="submit" value="Editar festa" className="btn" />
      </form>
    </div>
  );
};

export default EditParty;
