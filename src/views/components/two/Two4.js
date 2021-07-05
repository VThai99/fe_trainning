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
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Two3 = () => {
  const array = useSelector((state)=> state.array);
  const [findKey, setFindKey] = useState("");
  const [data, setData] = useState(array);
  const find = () => {
    const data_old = array;
    if (!findKey) {
      setData(data_old);
    } else {
      const temp_arr = data_old.filter((item) => {
        return item.name === findKey;
      });
      setData(temp_arr);
    }
  };
  useEffect(() => {
    console.log(findKey);
  }, [findKey]);
  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-3 fw-bold fs-3">다빈치 로그 리스트</div>
        <div className="col-sm-9"></div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-3"></div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-6">
              <CInputGroup className="d-flex">
                <CFormControl placeholder="YYYY.MM.DD" />
                <CInputGroupText id="basic-addon2">icon</CInputGroupText>
              </CInputGroup>
            </div>
            <div className="col-6">
              <CInputGroup className="d-flex">
                <CFormControl placeholder="YYYY.MM.DD" />
                <CInputGroupText id="basic-addon2">icon</CInputGroupText>
              </CInputGroup>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <CFormControl
              className="col-9"
              placeholder="검색어를 입력해주세요."
              value={findKey}
              onChange={(e) => {
                setFindKey(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  find();
                }
              }}
            ></CFormControl>
            <CButton
              className="col-3 text-dark fw-bold"
              color="secondary"
              onClick={find}
            >
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
              <CTableHeaderCell scope="col">강의명</CTableHeaderCell>
              <CTableHeaderCell scope="col">강의 제목 </CTableHeaderCell>
              <CTableHeaderCell scope="col">학생</CTableHeaderCell>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">IP</CTableHeaderCell>
              <CTableHeaderCell scope="col">시청일시</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => {
              return (
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                  <CTableDataCell>{item.id}</CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.age}</CTableDataCell>
                  <CTableDataCell>{item.date}</CTableDataCell>
                  <CTableDataCell>{item.id}</CTableDataCell>
                  <CTableDataCell>{item.id}</CTableDataCell>
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
export default Two3;
