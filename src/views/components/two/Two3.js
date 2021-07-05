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
import { useHistory } from "react-router-dom";
  
  const Two3 = () => {
    const history = useHistory();
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
    const goFix = () =>{
        history.push('/two/two3/fix')
    }
    return (
      <>
        <div className="row mt-4">
          <div className="col-sm-3 fw-bold fs-3">
          과학수학 다빈치 리스트
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
                <CTableHeaderCell scope="col"><input type='checkbox'></input></CTableHeaderCell>
                <CTableHeaderCell scope="col">
                번호
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">강의명 </CTableHeaderCell>
                <CTableHeaderCell scope="col">대상학생</CTableHeaderCell>
                <CTableHeaderCell scope="col">전체 강의비</CTableHeaderCell>
                <CTableHeaderCell scope="col">수정</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {array.map((item, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row"><input type='checkbox'></input></CTableHeaderCell>
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.age}</CTableDataCell>
                    <CTableDataCell>{item.date}</CTableDataCell>
                    <CTableDataCell><CButton color='secondary' className='text-light' onClick={goFix}>수정</CButton></CTableDataCell>
                  </CTableRow>
                );
              })}
            </CTableBody>
          </CTable>
        </div>
        <div className="row d-flex justify-content-between align-items-center mt-3">
        <CButton className="col-2" color="secondary">
        삭제
        </CButton>
        <CButton className="col-2" color="secondary">
        등록
        </CButton>
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
  export default Two3;
  