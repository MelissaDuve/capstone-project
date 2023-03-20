import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Form({}) {
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
            <fieldset>
              <br />
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                style={{ width: "125px", height: "20px" }}
                onChange={(event) => setName(event.target.value)}
              />

              <label htmlFor="date"> Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                onChange={(event) => setDate(event.target.value)}
              />
              <br />
              <br />
              <label htmlFor="comment">Comment:</label>
              <br />
              <textarea
                id="comment"
                name="comment"
                required
                maxLength={50}
                style={{ width: "340px", height: "70px" }}
                onChange={(event) => setComment(event.target.value)}
              />
            </fieldset>

            <button type="submit">Submit</button>
          </form>

          <div>
            <h3>Comments:</h3>
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
