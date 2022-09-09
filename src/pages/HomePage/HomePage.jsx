import { Link, Container, Line } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <div>
        <Line>Pss... Hey you.</Line>
        <Line>
          You should
          <Link to="/LoginPage">Log in</Link>
          to use this stuff.
        </Line>
        <Line>
          But if you haven't <Link to="/SignUpPage">Signed Up</Link> yet -
        </Line>
        <Line>DO THIS, RIGHT NOW!!!!</Line>
      </div>
    </Container>
  );
}
