import React from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs(); // custom hook: we put in pagination as second parameter later
  return (
    <Container>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error. Try refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
