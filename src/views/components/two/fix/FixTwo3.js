import { CFormControl, CButton } from "@coreui/react";
import { useHistory } from "react-router-dom";
const FixTwo3 = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/two/two3");
  };
  return (
    <>
      <div className="row">
        <div className="col-4 fs-3 fw-bold">과학수학 다빈치 등록</div>
      </div>
      <div className="row mt-2">
        <div className="col-8"></div>
        <div className="col-4 text-danger fs-6">
          * 표시된 영역은 필수 입력 영역 입니다.
        </div>
      </div>
      <div className="mt-3">
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>강의명
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-7 my-3">
                <CFormControl placeholder="강의명 입력"></CFormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>강의 소개
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-10 my-3">
                <CFormControl placeholder="강의 소개 입력"></CFormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>대상학생
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-10 my-3">
                <CFormControl placeholder="대상학생 입력"></CFormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>수업 준비
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-10 my-3">
                <CFormControl placeholder="수업 준비 입력"></CFormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>전체 강의비
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-7 my-3">
                <CFormControl placeholder="전체 강의비 입력"></CFormControl>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center fw-bold">
                원
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center  fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>강의 이미지
          </div>
          <div className="col-9 py-3">
            <div className="row">
              <div className="col-7 ">
                <CFormControl
                  type="file"
                  placeholder="이미지를 등록해주세요."
                ></CFormControl>
              </div>
              <CButton
                className="col-2 bg-secondary text-light fw-bold"
                size="sm"
              >
                파일 선택
              </CButton>
            </div>
            <div className="row">
              <div className="col-7">
                <p className="text-danger fs-6">
                  - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center  fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>강의 등록
          </div>
          <div className="col-9 py-3 pl-5">
            <div>
              <div className="row">
                <CButton
                  className="col-1 bg-secondary text-light fw-bold"
                  size="sm"
                >
                  1강
                </CButton>
              </div>
              <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  강의 제목
                </div>
                <CFormControl
                  placeholder="강의 제목 입력"
                  className="col-6"
                ></CFormControl>
              </div>
              <div className="row py-1">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  강의 시간
                </div>
                <CFormControl
                  placeholder="강의 시간 입력"
                  className="col-6"
                ></CFormControl>
              </div>{" "}
              <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  개별 강의비
                </div>
                <CFormControl
                  placeholder="개별 강의비 입력"
                  className="col-6"
                ></CFormControl>
              </div>
              <div className="row pt-3">
                <CFormControl
                  placeholder="파일을 등록해주세요."
                  className="col-6"
                ></CFormControl>
                <CButton
                  className="col-2 bg-secondary text-light fw-bold"
                  size="sm"
                >
                  파일 선택
                </CButton>
              </div>
              <div className="row pt-2">
                <div className="col-6">
                  <p className="text-danger">
                    - mp4, avi 동영상 파일만 등록 가능합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <CButton color="dark" className='fw-bold' shape="rounded-pill">
               + 강의 추가
              </CButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 row d-flex justify-content-center align-items-center">
        <CButton color="dark" variant="outline" size="lg" className="col-3">
          취소
        </CButton>
        <div className="col-1"></div>
        <CButton color="dark" size="lg" className="col-3" onClick={goBack}>
          저장
        </CButton>
      </div>
    </>
  );
};
export default FixTwo3;
