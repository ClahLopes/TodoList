import { Container, Title, User } from "./header.styles";
import  ImageUser  from "../../../assets/claudia.jpg"

export function Header() {
  return (
    <Container>
      <Title>To.do</Title>
      <User>
        <img src={ImageUser} alt="J"></img>
      </User>
    </Container>
  );
}
