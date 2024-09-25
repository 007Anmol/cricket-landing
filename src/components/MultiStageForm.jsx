import React, { useState } from 'react';

export default function MultiStageForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    favoriteTeam: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {  // Demo POST endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Success:', data);  // Handle successful response
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);  // Handle errors
      alert('Failed to submit form!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Personal Details</h2>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <button type="button" onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Cricket Preferences</h2>
            <input
              name="favoriteTeam"
              value={formData.favoriteTeam}
              onChange={handleChange}
              placeholder="Your favorite cricket team"
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
              Back
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
