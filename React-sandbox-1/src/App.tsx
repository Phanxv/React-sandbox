/*import ListGroup from "./component/ListGroup";

const handleSelectItem = (item: string) => {
  console.log(item, 'clicked');
}*/

import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  /*let items = ["Okayu", "Korone", "Gura", "Mumei"];
  return <div><ListGroup items={items} heading="Name" onSelectItem={ handleSelectItem } /></div> */
  return (
    <div>
      { alertVisible && <Alert onClickButton={() => setAlertVisibility(false)}>Alert clicked</Alert>}{" "}
      <Button /*color="primary"*/ onClick={() => setAlertVisibility(true)}>
        <b>Click Here</b>
      </Button>
    </div>
  );
}

export default App;
