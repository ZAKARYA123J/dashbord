import React, { useState } from 'react';
import axios from 'axios';

const CreateMembreForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    ville: '',
    dateDeNaissance: '',
    IDadmin: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/membres', formData);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response.data.error);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Create Membre</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div>
          <label>Prenom:</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>
        <div>
          <label>Adresse:</label>
          <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />
        </div>
        <div>
          <label>Ville:</label>
          <input type="text" name="ville" value={formData.ville} onChange={handleChange} required />
        </div>
        <div>
          <label>Date de Naissance:</label>
          <input type="date" name="dateDeNaissance" value={formData.dateDeNaissance} onChange={handleChange} required />
        </div>
        <div>
          <label>ID Admin:</label>
          <input type="text" name="IDadmin" value={formData.IDadmin} onChange={handleChange} required />
        </div>
        <button type="submit">Create Membre</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateMembreForm;
