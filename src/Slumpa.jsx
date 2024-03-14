import { useState } from "react";

const SlumpaTal = () => {
  const [Tal, setTal] = useState([1, 10, 3, 5, 9, 20]);

  const Random = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    const TalListCopy = [...Tal, randomNumber];
    return setTal(TalListCopy);
  };
  const TalLista = Tal.map((item) => <li key={item}> {item}</li>);
  return (
    <ul>
      {TalLista}
      <button onClick={Random}>Lägg till</button>
    </ul>
  );
};

export default SlumpaTal;
