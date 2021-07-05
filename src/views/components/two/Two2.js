import {
  CFormControl,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CButtonGroup,
  CTableDataCell,
  CButtonToolbar,
} from "@coreui/react";

const Two2 = () => {
  const array = [
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
    { id: 30, name: "test1", age: 23, date: "22-11-2021" },
  ];
  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-3 fw-bold fs-3">
          LiveClass 책글 주차 수정 리스트
        </div>
        <div className="col-sm-9"></div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <div className="row">
            <CFormControl
              className="col-8"
              placeholder="검색어를 입력해주세요."
              aria-describedby="basic-addon1"
            ></CFormControl>
            <CButton className="col-4 text-dark fw-bold" color="secondary">
              검색
            </CButton>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">번호</CTableHeaderCell>
              <CTableHeaderCell scope="col">
                LiveClass 수업 종류
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">수업명 </CTableHeaderCell>
              <CTableHeaderCell scope="col">지도교사 이름</CTableHeaderCell>
              <CTableHeaderCell scope="col">수정 사유</CTableHeaderCell>
              <CTableHeaderCell scope="col">수정일</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {array.map((item, index) => {
              return (
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                  <CTableDataCell>{item.id}</CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.age}</CTableDataCell>
                  <CTableDataCell>{item.date}</CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        </CTable>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <CButtonToolbar role="group" className="col-5">
          <CButtonGroup className="me-1" role="group">
            <CButton color="link">1</CButton>
            <CButton color="link">2</CButton>
            <CButton color="link">3</CButton>
            <CButton color="link">4</CButton>
            <CButton color="link">5</CButton>
            <CButton color="link">6</CButton>
            <CButton color="link">7</CButton>
            <CButton color="link">8</CButton>
            <CButton color="link">9</CButton>
            <CButton color="link">10</CButton>
          </CButtonGroup>
        </CButtonToolbar>
      </div>
    </>
  );
};
export default Two2;
