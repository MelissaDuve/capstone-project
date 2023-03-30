import styled from "styled-components";
import { useEffect, useState } from "react";
import { uid } from "react-uid";

export default function Form({ idDrink }) {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [comment, setComment] = useState();
  const [formList, setFormList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uid(event);
    const formData = { name, date, comment, idDrink, id };
    const forms = JSON.parse(localStorage.getItem("forms")) || [];
    localStorage.setItem("forms", JSON.stringify([...forms, formData]));
    setFormList([...forms, formData]);
    event.target.reset();
    event.target.elements.name.focus();
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters only).");
      return;
    }
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

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            style={{ width: "95px", height: "20px" }}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="date"> Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            style={{ width: "125px", height: "20px" }}
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
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>

      <section>
        <StyledHeading>Comments:</StyledHeading>
        {formList.some((form) => form.idDrink === idDrink) ? (
          <StyledList>
            {formList
              .filter((form) => form.idDrink === idDrink)
              .map((form, index) => (
                <StyledCommentItem key={index}>
                  <p>Name: {form.name}</p>
                  <p>Date: {form.date}</p>
                  <StyledComment>
                    <p>Comment: {form.comment}</p>
                  </StyledComment>
                  <StyledDeleteButton
                    type="button"
                    onClick={() => handleDelete(form.id)}
                  >
                    x
                  </StyledDeleteButton>
                </StyledCommentItem>
              ))}
          </StyledList>
        ) : (
          <NoCommentsText>No comments submitted yet.</NoCommentsText>
        )}
      </section>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 50px;
  margin-top: 40px;
  padding-bottom: 40px;
  fieldset {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 20px;
  }

  label {
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="date"],
  textarea {
    margin-bottom: 10px;
  }
`;
const StyledComment = styled.div`
  white-space: pre-wrap;
`;

const StyledDeleteButton = styled.button`
  background-color: #708090;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #b9137c;
  }
`;
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledCommentItem = styled.li`
  border: 1px solid white;
  margin: 0px 10px 75px 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #708090;
  color: white;
  margin: 3px 0px 10px 310px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b9137c;
  }
`;
const StyledHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 0 0 5px 10px;
  color: #b9137c;
  text-decoration: underline;
`;
const NoCommentsText = styled.p`
  margin-left: 12px;
`;
