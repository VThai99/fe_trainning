import { CContainer, CFormControl, CButton } from "@coreui/react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
const Login = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [errorId, setErrorId] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [cookies, setCookies] = useCookies(['username']);
  const history = useHistory();
  useEffect(() => {
    console.log(id, pass);
  }, [id, pass]);
  const login = () => {
    if (!id) {
      setErrorId("ID를 확인해주세요.");
    } else if (!pass) {
      setErrorPass("비밀번호를 확인해주세요.");
    } else {
      if (id === "1" && pass === "admin") {
        setCookies('username', 'Thai')
        history.push("/home");
      } else {
        alert("sai");
      }
    }
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row justify-content-center align-items-center">
      <CContainer>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <img src={logo} alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center fw-bold my-3 fs-3">
          관리자 로그인
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-sm-1 fw-bold">ID</div>
          <div className="col-sm-4">
            <CFormControl
              placeholder="ID 입력"
              aria-describedby="basic-addon1"
              value={id}
              onChange={(e) => {
                setErrorId("");
                setId(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  login();
                }
              }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-1 fw-bold"></div>
          <div className="col-sm-4">
            <p className="text-danger fs-6">{errorId}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-sm-1 fw-bold">비밀번호</div>
          <div className="col-sm-4">
            <CFormControl
              placeholder="비밀번호 입력"
              aria-describedby="basic-addon1"
              value={pass}
              onChange={(e) => {
                setErrorPass("");
                setPass(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  login();
                }
              }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-1 fw-bold"></div>
          <div className="col-sm-4">
            <p className="text-danger fs-6">{errorPass}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center my-5">
          <div className="col-sm-3"></div>
          <CButton
            color="secondary"
            size="lg"
            onClick={login}
            className="col-sm-3"
          >
            로그인
          </CButton>
          <div className="col-sm-3"></div>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5">
          <CButton color="link">
            <Link to="/insert_email"> 비밀번호 재설정</Link>
          </CButton>
        </div>
      </CContainer>
    </div>
  );
};
export default Login;
