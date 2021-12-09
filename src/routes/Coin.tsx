import { useParams } from "react-router-dom";

const Coin = () => {
  const { id } = useParams();

  return <div>{id} welcome</div>;
};

export default Coin;
