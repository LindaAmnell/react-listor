const FruktLista = () => {
  const Frukt = ["Äpple", "Banan", "Päron", "Citron", "Apelsin", "Jordgubbe"];

  const Fruktisar = Frukt.map((item) => <li key={item}> {item}</li>);
  return <ul> {Fruktisar}</ul>;
};

export default FruktLista;
