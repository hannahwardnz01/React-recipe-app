import { useState } from 'react';
import './RecipeForm.css';
import Create from '../firebase_setup/Create';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../Colors';

function RecipeForm() {

  const navigate = useNavigate();

  const [ingredientsList, setIngredientsList] = useState([])
  const [methodList, setMethodList] = useState([])


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

  const handleChangeList = (event) => {
    const { name, value } = event.target;
    if(name === "ingredients"){
      setIngredientsList((prevState)=> ({
        ...prevState, value
      }))
      setFormData((prevState) => ({
        ...prevState,
        [name]: ingredientsList
      }));
    }else{
      setMethodList((prevState)=> ({
        ...prevState, value
      }))
      setFormData((prevState) => ({
        ...prevState,
        [name]: methodList
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or send data to a backend API
    Create(formData)
    navigate("/")
  };


  return (
    <div className="recipe-form-container">
      <h1 style={{color: COLORS.TeaGreen, lineHeight: 0.5}}>Create a new recipe...</h1>
      <p style={{color: COLORS.TeaGreen}}>Fill out the form below to create a new recipe for your journal.</p>
      <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <label>
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        </label>
        {/* <select id="options" value={formData.difficulty} onChange={handleChange}>
          <option value="">Choose an difficulty</option>
          <option value="option1">Easy</option>
          <option value="option2">Medium</option>
          <option value="option3">Hard</option>
        </select> */}
          <input type="text" name="id" placeholder="ID" onChange={handleChange} />
          <input type="text" name="difficulty" placeholder="Difficulty" onChange={handleChange} />
          <input type="text" name="time" placeholder="Time" onChange={handleChange} />
          <input type="ingredients" name="ingredients" placeholder="Ingredients" onChange={handleChangeList} />
          <input type="method" name="method" placeholder="Method" onChange={handleChangeList} />
          <input type="number" name="servings" placeholder="Servings" onChange={handleChange} />
          <input type="text" name="imageURL" placeholder="Image URL" onChange={handleChange} />
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
