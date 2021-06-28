import { useRef, useState } from "react";
import {
  CToast,
  CToastHeader,
  CToastBody,
  CButton,
  CToaster,
} from "@coreui/react";
const Toast = () => {
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast title="CoreUI for React.js">
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  );
  return (
    <>
      <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton>
      <CToaster ref={toaster} push={toast} placement="bottom-end" />
    </>
  );
};
export default Toast;
