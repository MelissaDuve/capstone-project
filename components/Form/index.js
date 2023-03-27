import styled from "styled-components";
import { useEffect, useState } from "react";
import { uid } from "react-uid";

export default function Form({ idDrink }) {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [comment, setComment] = useState();
  const [formList, setFormList] = useState([]);
  // const [editingText, setEditingText] = useState();
  // const [editingId, setEditingId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uid(event);
    const formData = { name, date, comment, idDrink, id };
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

  function handleDelete(id) {
    const updatedFormList = formList.filter((form) => form.id !== id);
    localStorage.setItem("forms", JSON.stringify(updatedFormList));
    alert("Successfully deleted!");
    setFormList(updatedFormList);
  }

  // function handleEdit(id) {
  //   const formToEdit = formList.find((form) => form.id === id);
  //   setName(formToEdit.name);
  //   setDate(formToEdit.date);
  //   setComment(formToEdit.comment);
  //   setEditingText(id);
  // }

  //   localStorage.setItem("forms", JSON.stringify(updatedFormList));
  //   alert("Successfully edited!");
  //   setFormList(updatedFormList);
  //   setEditingText(null);
  //   setName("");
  //   setDate("");
  //   setComment("");
  // }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
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

          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            required
            maxLength={200}
            style={{ width: "340px", height: "70px" }}
            onChange={(event) => setComment(event.target.value)}
          />
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <section>
        <h3>Comments:</h3>
        {formList.some((form) => form.idDrink === idDrink) ? (
          <ul>
            {formList
              .filter((form) => form.idDrink === idDrink)
              .map((form, index) => (
                <li key={index}>
                  <p>Name: {form.name}</p>
                  <p>Date: {form.date}</p>
                  <StyledComment>
                    <p>Comment: {form.comment}</p>
                  </StyledComment>
                  <button type="button" onClick={() => handleDelete(form.id)}>
                    x
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p>No comments submitted yet.</p>
        )}
      </section>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 80px;
`;
const StyledComment = styled.p`
  white-space: pre-wrap;
`;
// const StyledDeleteButton = styled.button`
// `;
