import { CContainer, CFormControl, CButton } from "@coreui/react";
import { useHistory } from "react-router-dom";
import Modal from "../../components/modal/Modal";
const EmailToReset = () => {
  const history = useHistory();
  const goResset = () => {
    history.push("/reset_pass");
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row justify-content-center align-items-center">
      <CContainer>
        <div className="d-flex justify-content-center align-items-center fw-bold mb-3 fs-1">
          비밀번호 초기화 메일 발송
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5 ">
          <p className="text-center fs-5">
            관리자로 등록된 이메일 주소를 정확히 입력해 주세요.<br></br>
            해당 이메일로 비밀번호 재설정 안내 메일을 발송해드립니다.
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-3">
          <div className="col-sm-1 fw-bold fs-4">이메일</div>
          <div className="col-sm-5">
            <CFormControl
              size="lg"
              placeholder="이메일 입력"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <p className="text-danger fs-6">이메일을 확인해주세요.</p>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-items-center mt-5">
          <div className="col-sm-4"></div>
          <div className="col-sm-3">
              <Modal
              fucModal={goResset}
              btnName="확인"
              modalTitle=""
              modalContent="발송이 완료되었습니다.
              메일을 확인해주세요."
              btnModal="확인"
            ></Modal>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </CContainer>
    </div>
  );
};
export default EmailToReset;
