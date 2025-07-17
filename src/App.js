import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

const accentColor = '#0054A6'; // Spidr blue

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guessedCost: '',
    spidrPin: '',
  });

  // Generic handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // For masked input
  const handlePinAccept = (value) => {
    setFormData(prev => ({ ...prev, spidrPin: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'url("https://images.unsplash.com/photo-1596387683127-0a289fdf56b4?auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          padding: '2rem',
          width: '100%',
          maxWidth: '480px',
        }}
      >
        <h2 style={{ color: accentColor, marginBottom: '1.5rem' }}>
          Spidr Air Fryer Interest Form
        </h2>

        <label>First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Phone Number</label>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Email Address</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Guess the air fryer’s cost (USD)</label>
        <input
          name="guessedCost"
          type="number"
          min="0"
          value={formData.guessedCost}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Very, very secret 16-digit Spidr PIN</label>
        <IMaskInput
          mask="0000-0000-0000-0000"
          name="spidrPin"
          value={formData.spidrPin}
          onAccept={handlePinAccept}
          placeholder="####-####-####-####"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: accentColor,
            color: '#fff',
            border: 'none',
            padding: '12px',
            borderRadius: '8px',
            marginTop: '1rem',
            width: '100%',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '0.5rem 0 1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

export default App;
