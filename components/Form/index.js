import styled from "styled-components";

// export default function Form() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const forData = new FormData(event.target);
// const data = Object.fromEntries(formData);

// event.target.elements.Name.focus;
// event.target.reset;
//   }
import { useEffect, useState } from "react";

export default function MyForm() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [comment, setComment] = useState();
  const [formList, setFormList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, date, comment };
    const forms = JSON.parse(localStorage.getItem("forms")) || [];
    localStorage.setItem("forms", JSON.stringify([...forms, formData]));
    setFormList([...forms, formData]);
    event.target.reset();
    event.target.elements.name.focus();
  };
  //useEffect damit der neue Zustand erhalten bleibt nach einem reload.
  useEffect(() => {
    const forms = JSON.parse(localStorage.getItem("forms")) || [];
    setFormList(forms);
  }, []);

  return (
    <>
      <Container>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={(event) => setDate(event.target.value)}
            />

            <label htmlFor="comment">Your comment:</label>
            <textarea
              id="comment"
              name="comment"
              onChange={(event) => setComment(event.target.value)}
            />

            <button type="submit">Submit</button>
          </form>

          <div>
            <h2>Comments:</h2>
            {formList.length > 0 ? (
              <ul>
                {formList.map((form, index) => (
                  <li key={index}>
                    <p>Name: {form.name}</p>
                    <p>Date: {form.date}</p>
                    <p>Comment: {form.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No forms submitted yet.</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;

  margin-top: 80px;
  margin-bottom: 80px;
`;
