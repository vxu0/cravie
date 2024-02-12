import Results from "../Results";

interface Props {
  results: string[];
}

export default function PageResults({ results }: Props) {
  return (
    <>
      <Results results={results} />
      <br></br>
      <br></br>
      <br></br>
      <button className="next">Start Over</button>
    </>
  );
}
