import { Button } from "./button";
import { ModalDialog } from "./modal-dialog";
import { useToggleDialog } from "../hook/useDialog";

export const ToggleButtonWithDialog = () => {
  const { isVisible, show, hide } = useToggleDialog();
  return (
    <>
      <Button onClick={show}>Open Dialog</Button>
      {isVisible ? <ModalDialog onClose={hide} /> : null}
    </>
  );
};
