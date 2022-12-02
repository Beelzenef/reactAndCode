// Si no es necesario, se recominenda que los métodos
// estén fuera de los functional components

const sum = (a, b) => {
  return a + b;
};


// function First() {
function First({title}) {
// function First({title, count}) {

  console.log(title)
  // const newMessage = "Elena";
  // const newMessage = [1,2,3,4,5];
  // const newMessage = true;
  const newMessage = {
    title: "Eragon",
    pages: 120,
  };

  return (
    <>
      <h1>{title}</h1>
      {/* <h1>{count}</h1> */}
      {/* <p>{ newMessage }</p> */}
      <p>{JSON.stringify(newMessage)}</p>
      <p>{sum(1, 2)}</p>
    </>
  );
}

export default First;
