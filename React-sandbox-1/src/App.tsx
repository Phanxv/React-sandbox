import ListGroup from "./component/ListGroup";

const handleSelectItem = (item: string) => {
  console.log(item, 'clicked');
}

function App() {
  let items = ["Okayu", "Korone", "Gura", "Mumei"];
  return <div><ListGroup items={items} heading="Name" onSelectItem={ handleSelectItem } /></div>
}

export default App;
