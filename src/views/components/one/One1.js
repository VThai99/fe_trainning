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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const initSelect = new Array(10).fill(false)
const One1 = () => {
  const [findKey, setFindKey] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);
  const [selected, setSelected] = useState(initSelect);
  const array = useSelector((state) => state.array);
  const [data, setData] = useState(array);

  const history = useHistory();
  const dispatch = useDispatch();
  const onCheckedAll = (e) => {
    const checked = e.target.checked;
    setCheckedAll(checked)
    if(checked){
      setSelected(data.map(()=>true));
    }
    else {
      setSelected(data.map(()=>false))
    }
  }
  const onSelect = (index) => {
    setSelected(setSelected.map((item,idx)=>{
      return (idx === index) ? !item : item
    }));
  }
  useEffect(() => {
    setData(array);
  }, [array]);
  const goAdd = () => {
    history.push("/one/one1/add");
  };
  const goFix = () => {
    history.push("/one/one1/fix");
  };
  const find = () => {
    if (!findKey) {
      setData(array);
    } else {
      const temp_arr = array.filter((item) => {
        return item.name === findKey;
      });
      setData(temp_arr);
    }
  };

  const deleteItem = () => {
    const delete_arr = [];

    // dispatch({
    //   type: "REMOVE",
    //   id: id,
    // });
  };
  return (
    <>
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
              value={findKey}
              onChange={(e) => setFindKey(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  find();
                }
              }}
            ></CFormControl>
            <CButton
              className="col-4 text-dark fw-bold"
              color="secondary"
              onClick={find}
            >
              검색
            </CButton>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">
                <input
                  type="checkbox"
                  defaultChecked={checkedAll}
                  onClick={() => {
                    setCheckedAll(onCheckedAll);
                  }}
                ></input>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">번호</CTableHeaderCell>
              <CTableHeaderCell scope="col">노출 순서</CTableHeaderCell>
              <CTableHeaderCell scope="col">메인 배너명</CTableHeaderCell>
              <CTableHeaderCell scope="col">등록일</CTableHeaderCell>
              <CTableHeaderCell scope="col">수정</CTableHeaderCell>
              <CTableHeaderCell scope="col">숨김 여부</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => {
              return (
                <Tables
                  key={index}
                  checkedAll={checkedAll || false}
                  index={index}
                  id={item.id}
                  name={item.name}
                  age={item.age}
                  date={item.date}
                  fucOfSelect= {onSelect}
                  selected={selected[index]}
                  goFix={goFix}
                ></Tables>
              );
            })}
          </CTableBody>
        </CTable>
      </div>
      <div className="row d-flex justify-content-between align-items-center mt-3">
        <CButton className="col-2" color="secondary" onClick={deleteItem}>
          삭제
        </CButton>
        <CButton className="col-2" color="secondary" onClick={goAdd}>
          등록
        </CButton>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-3">
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
const Tables = (props) => {
  const [opacity, setOpacity] = useState(false);
  const goHide = () => {
    setOpacity(!opacity);
  };
  return (
    <CTableRow
      key={props.index}
      style={opacity ? { opacity: ".3" } : { opacity: "1" }}
    >
      <CTableHeaderCell scope="row">
        <input type="checkbox" onChange={props.fucOfSelect} checked={props.selected}></input>
      </CTableHeaderCell>
      <CTableDataCell>{props.id}</CTableDataCell>
      <CTableDataCell>{props.name}</CTableDataCell>
      <CTableDataCell>{props.age}</CTableDataCell>
      <CTableDataCell>{props.date}</CTableDataCell>
      <CTableDataCell>
        <CButton size="sm" color="secondary" onClick={props.goFix} >
          수정
        </CButton>
      </CTableDataCell>
      <CTableDataCell>
        <CButton size="sm" color="danger" onClick={() => goHide()}>
          숨김
        </CButton>
      </CTableDataCell>
    </CTableRow>
  );
};
export default One1;
