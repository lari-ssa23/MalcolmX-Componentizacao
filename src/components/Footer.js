import styled from "styled-components";

const ListItem = styled.li`
  color: whitesmoke;

  &:hover {
    color: #ff0000;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 20px;
  background-color: black;
`;

function Footer() {
  return (
    <List>
      <ListItem>Voltar</ListItem>
      <ListItem>Subir</ListItem>
      <ListItem>Avançar</ListItem>
    </List>
  );
}

export default Footer;
