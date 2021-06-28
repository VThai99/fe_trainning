import { CContainer, CFormControl, CButton } from "@coreui/react";
import { useHistory } from "react-router-dom";
const Index = () => {
    const history = useHistory()
    const goLogin = () => {
        history.push('/login')
    }
  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center">
      <CContainer>
        <div className="d-flex justify-content-center align-items-center fw-bold fs-1">
          비밀번호 재설정
        </div>
        <div className="d-flex justify-content-center align-items-center fs-4 my-5">
          재설정 할 새 비밀번호를 입력해주세요.
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-2 fw-bold fs-3">새 비밀번호</div>
          <div className="col-sm-4">
            <CFormControl
              placeholder="새 비밀번호 입력"
              aria-describedby="basic-addon1"
              size="lg"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <p className="text-danger fs-6">
              비밀번호는 영문, 숫자, 특수문자 조합의 8~13자를 입력해주세요.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-2 fw-bold fs-3">비밀번호 확인</div>
          <div className="col-sm-4">
            <CFormControl
              placeholder="비밀번호 확인"
              aria-describedby="basic-addon1"
              size="lg"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <p className="text-danger fs-6">비밀번호가 일치하지 않습니다.</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-sm-1"></div>
          <CButton color="dark" size="lg" className="col-sm-3 fs-3 fw-bold" onClick={goLogin}>
            확인
          </CButton>
        </div>
      </CContainer>
    </div>
  );
};
export default Index;
