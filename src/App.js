import "./App.css";
import Container from "./components/Container/Container";
import Paragraph from "./components/Component/Paragraph/Paragraph";
import Title from "./components/Component/Title/Title";

function App() {
  return (
    <Container width={70}>
      <Title>Insert Title</Title>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
    </Container>
  );
}

export default App;
