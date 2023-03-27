import Header from "../components/Header";
import styled from "styled-components";
import { Form, useNavigate } from "react-router-dom";


function Edit() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <FormWrapper>
      <Form method="post" id="contact-form">
        <input
          placeholder="Title"
          type="text"
          defaultValue=""
        />
        <textarea
          placeholder="Description"
          defaultValue=""
          rows={6}
        />
        <label for="difficulty">Select a difficulty</label>
        <select id="difficulty">
          <option value="1">Easy</option>
          <option value="2">Intermediate</option>
          <option value="3">Hard</option>
        </select>
        <input
          type="number"
          placeholder="Time taken (hours)"
          defaultValue=""
        />
        <input
          type="number"
          placeholder="Servings"
          defaultValue=""
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          defaultValue=""
        />
        <input
          placeholder="Image URL"
          type="text"
          defaultValue=""
        />
        <textarea
          placeholder="Ingredients"
          defaultValue=""
          rows={6}
        />
        <textarea
          placeholder="Method"
          defaultValue=""
          rows={6}
        />
        <label for="accept">
          <input type="checkbox" id="accept" name="accept" value="yes"/>Favorite?
        </label>
        <p>
        <button type="submit" onClick={() => {
            navigate(-1);
          }}>Save</button>
        <button type="button" onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>
    </Form>
    </FormWrapper>
    </div>
  )
}

const HeaderWrapper = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;`

export default Edit;
