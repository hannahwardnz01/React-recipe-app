import data from "./data";

export default function getRecipe(id) {
    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            return data[i];
        }
    }
    return null;
  }