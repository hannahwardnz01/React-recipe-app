function Recipe(id) {
  
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        favs.push(data[i]);
        break;
      }
    }
  }

}

export default Recipe;
