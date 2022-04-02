import styled from "styled-components";

const ListItem = styled.li`
  color: whitesmoke;

  &:hover {
    color: #ff0000;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 25px;
  background-color: black;
`;

function Header() {
  return (
    <List>
      <ListItem>Quem foram</ListItem>
      <ListItem>Discursos</ListItem>
      <ListItem>Família</ListItem>
    </List>
  );
}

export default Header;
