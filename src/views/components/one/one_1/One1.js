import Home from "../../../pages/home/Home";
import { CFormControl, CButton,CTable,CTableHead, CTableRow,CTableHeaderCell ,CTableBody,CTableDataCell} from "@coreui/react";
const One1 = () => {
  return (
    <Home>
      <div className="row mt-4">
        <div className="col-sm-3 fw-bold fs-3">메인 배너 리스트</div>
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
      <div className="mt-2">
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">번호</CTableHeaderCell>
              <CTableHeaderCell scope="col">메인 배너명</CTableHeaderCell>
              <CTableHeaderCell scope="col">등록일</CTableHeaderCell>
              <CTableHeaderCell scope="col">수정</CTableHeaderCell>
              <CTableHeaderCell scope="col">숨김 여부</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>@fat</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Larry</CTableDataCell>
              <CTableDataCell>the Bird</CTableDataCell>
              <CTableDataCell>@twitter</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </Home>
  );
};
export default One1;
