import { Link } from "react-router-dom";

export default function Card(props) {
  const { name } = props;

  return (
    <Link to={`/list/${name}`}>
      <div className="card">
        <div>name:{name}</div>
      </div>
    </Link>
  );
}
