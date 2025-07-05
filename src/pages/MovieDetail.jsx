import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie Details</h2>
      <p>Movie ID: {id}</p>
    </div>
  );
};

export default MovieDetail;
