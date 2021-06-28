import { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
const Modal = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton style={{width: '100%'}} className={props.btnClass} color="dark" size="lg" onClick={() => setVisible(!visible)}>
        {props.btnName}
      </CButton>
      <CModal alignment="center" visible={visible}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>{props.modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody>{props.modalContent}</CModalBody>
        <CModalFooter>
          <CButton color="dark" onClick={props.fucModal}>{props.btnModal}</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
export default Modal;
