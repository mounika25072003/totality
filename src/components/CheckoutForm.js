import React, { useState } from 'react';

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={form.address} onChange={handleChange} />
      </label>
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;

