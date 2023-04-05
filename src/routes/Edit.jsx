import HeaderLeft from "../components/HeaderLeft";
import styled from "styled-components";
import { Form, useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";


function Edit() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderWrapper>
        <HeaderLeft />
      </HeaderWrapper>
      <RecipeForm />
    </div>
  )
}

const HeaderWrapper = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  h1 {
    width: 100%
  }
`

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
	position: relative;
	padding-top: 1.5rem;
	input {
    width:100%;
    border-radius: 1rem;
    height: 50px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  textarea {}
`
const DemoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export default Edit;
