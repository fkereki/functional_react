import { Simple } from "./simple.comp";
import { showWhenHOF } from "./showWhen.hof";

const SimpleWithWhen = showWhenHOF(Simple);

function App() {
  return (
    <>
      <Simple name={"Alpha"} age={11} />
      <SimpleWithWhen when={1 < 2} name={"Bravo"} age={22} />
      <SimpleWithWhen when={1 > 2} name={"Charlie"} age={33} />
    </>
  );
}

export default App;
