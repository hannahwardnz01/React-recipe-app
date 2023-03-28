import { useState } from 'react';
import './RecipeForm.css';

function RecipeForm() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    difficulty: '',
    time: '',
    ingredients: '',
    method: '',
    servings: '',
    imageURL: '',
    favourite: false,
    rating: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or send data to a backend API
  };

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <label>
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        </label>
        <select id="options" value={formData.difficulty} onChange={handleChange}>
          <option value="">Choose a difficulty</option>
          <option value="option1">Easy</option>
          <option value="option2">Medium</option>
          <option value="option3">Hard</option>
        </select>
          <input type="text" name="time" placeholder="Time" value={formData.time} onChange={handleChange} />
          <textarea name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
          <textarea name="method" placeholder="Method" value={formData.method} onChange={handleChange} />
          <input type="number" name="servings" placeholder="Servings" value={formData.servings} onChange={handleChange} />
          <input type="text" name="imageURL" placeholder="Image URL" value={formData.imageURL} onChange={handleChange} />
          <label>
          Favourite:
          <input type="checkbox" name="favourite" checked={formData.favourite} onChange={() => setFormData(prevState => ({ ...prevState, favourite: !prevState.favourite }))} />
          </label>
          <label>
          Rating:
          <input type="number" name="rating" placeholder="4" value={formData.rating} onChange={handleChange} />
          </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecipeForm;
