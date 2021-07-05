import { CFormControl, CButton } from "@coreui/react";
import { useHistory } from "react-router-dom";
const AddOne3 = () => {
    const history =useHistory()
    const goBack = () => {
        history.push('/one/one3')
    }
  return (
    <>
      <div className="row">
        <div className="col-3 fs-3 fw-bold">매거진 등록</div>
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
            <span className="text-danger fs-4 mr-2">*</span>매거진 제목
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-7 my-3">
                <CFormControl placeholder="매거진 제목 입력"></CFormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center  fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>매거진 이미지(PC)
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
                  <br />- 이미지 사이즈는 225 x 315를 추천합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center  fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>매거진
            이미지(Mobile)
          </div>
          <div className="col-9 py-3">
            <div className="row">
              <div className="col-7">
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
                  <br />- 이미지 사이즈는 175 x 255를 추천합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row border border-dark">
          <div className="col-3 bg-secondary text-light d-flex justify-content-center align-items-center  fw-bold">
            <span className="text-danger fs-4 mr-2">*</span>첨부 파일
          </div>
          <div className="col-9 py-3">
            <div className="row">
              <div className="col-7">
                <CFormControl
                  type="file"
                  placeholder="파일을 등록해주세요."
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
                - 한글, ppt, pdf, img(jpg, png) 파일만 등록 가능합니다.
                </p>
              </div>
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
export default AddOne3;
