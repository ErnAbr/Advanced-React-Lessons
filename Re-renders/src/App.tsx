import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import { useState } from "react";
import { Button } from "./components/button";
import { ModalDialog } from "./components/modal-dialog";

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Dialog</Button>
      {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null}
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
