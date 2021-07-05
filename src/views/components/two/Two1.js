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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";

const Modal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton size="sm" color="secondary" onClick={() => setVisible(!visible)}>
        출석 상세
      </CButton>
      <CModal alignment="center" size='lg' visible={visible}>
        <CModalHeader
          className="fw-bold d-flex justify-content-center align-items-center"
          onDismiss={() => setVisible(false)}
        >
          <CModalTitle className="w-100 text-center">출석 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">수업일시</CTableHeaderCell>
                <CTableHeaderCell scope="col">지도교사 수업 여부</CTableHeaderCell>
                <CTableHeaderCell scope="col">학생명</CTableHeaderCell>
                <CTableHeaderCell scope="col">학생 출석 여부</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell rowspan='3'>3</CTableHeaderCell>
                <CTableDataCell rowspan='3'>Larry the Bird</CTableDataCell>
                <CTableDataCell>@twitter</CTableDataCell>
                <CTableDataCell>@twitter</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>@twitter</CTableDataCell>
                <CTableDataCell>@twitter</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>@twitter</CTableDataCell>
                <CTableDataCell>@twitter</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>
        <CModalFooter className=' row d-flex justify-content-center align-items-center'>
          <CButton className='col-3' color="dark">확인</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

const Two1 = () => {
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
        <div className="col-sm-3 fw-bold fs-3">LiveClass 수업 리스트</div>
        <div className="col-sm-9"></div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6">
          <div className="row">
            <CButton className="col-3 fw-bold" color="dark" variant="outline">
              전체
            </CButton>
            <CButton className="col-3  fw-bold" color="dark" variant="outline">
              LiveClass 책글
            </CButton>
            <CButton className="col-3  fw-bold" color="dark" variant="outline">
              LiveClass 목적
            </CButton>
          </div>
        </div>
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
              <CTableHeaderCell scope="col">구분</CTableHeaderCell>
              <CTableHeaderCell scope="col">
                LiveClass 수업 종류
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">수업명</CTableHeaderCell>
              <CTableHeaderCell scope="col">지도교사 이름</CTableHeaderCell>
              <CTableHeaderCell scope="col">교육비</CTableHeaderCell>
              <CTableHeaderCell scope="col">개설일</CTableHeaderCell>
              <CTableHeaderCell scope="col">출석 상세</CTableHeaderCell>
              <CTableHeaderCell scope="col">수업 상세</CTableHeaderCell>
              <CTableHeaderCell scope="col">숨김 여부</CTableHeaderCell>
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
                  <CTableDataCell>{item.age}</CTableDataCell>
                  <CTableDataCell>
                    <Modal></Modal>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton size="sm" color="secondary">
                      수업 상세
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton size="sm" color="danger">
                      숨김
                    </CButton>
                  </CTableDataCell>
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
export default Two1;
