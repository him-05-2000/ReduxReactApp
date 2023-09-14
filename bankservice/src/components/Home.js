import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="container" style={{'justifyContent':'center','alignItems':'center'}}>
        <Button variant="primary">Self-Register</Button>{" "}
        <Button variant="primary">Register</Button>{" "}
      </div>
    </>
  );
};
export default Home;
