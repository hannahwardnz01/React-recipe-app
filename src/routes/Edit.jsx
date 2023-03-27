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
      <Form method="post" id="contact-form">
      <p>
        <span></span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue=""
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue=""
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue=""
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue=""
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue=""
          rows={6}
        />
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
    </div>
  )
}

const HeaderWrapper = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`

export default Edit;
