import Footer from "../components/Footer";
import HeaderLeft from "../components/HeaderLeft";
import RecipeForm from "../components/RecipeForm";


function Edit() {
  return (
    <div style={{background: "white"}}>
      <div style={{boxShadow: "0 8px 8px -8px grey"}}>
        <HeaderLeft />
      </div>
      <RecipeForm />
      <Footer />
    </div>
  )
}

export default Edit;
