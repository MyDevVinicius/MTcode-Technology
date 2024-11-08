"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'Desenvolvimento de Site',
    whatsapp: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Sending email with the following data:', formData);

    emailjs.send(
      'service_rxv4nrm', // Seu Service ID
      'template_wq9g1lo', // Seu Template ID
      {
        from_name: formData.name,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        serviceType: formData.serviceType,
        whatsapp: formData.whatsapp,
        email: formData.email,
      },
      '9AZ5v_hldfZK72gV1' // Sua chave pública
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Mensagem enviada com sucesso!');
    }, (error) => {
      console.error('Error sending email:', error.text);
      alert('Ocorreu um erro ao enviar a mensagem.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 bg-transparent rounded-lg shadow-md md:w-97% sm:w-full">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Entre em Contato</h2>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="name">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="company">
          Empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
        />
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="subject">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="serviceType">
          Tipo de Serviço
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
          required
        >
          <option value="Desenvolvimento de Site">Desenvolvimento de Site</option>
          <option value="Suporte">Suporte</option>
          <option value="Manutenção">Manutenção</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="whatsapp">
          WhatsApp
        </label>
        <input
          type="text"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border border-white rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-white text-black border border-white rounded px-3 py-1 transition duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
