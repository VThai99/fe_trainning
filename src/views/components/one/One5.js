import { Button, Form, Table } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const initialSelect = new Array(10).fill(false);

export default function FAQManage() {
  const array = useSelector((state) => state.array);
  const [data, setData] = useState(array);
  function deleteListFAQs() {
    let deletedIds = [];
    selected.forEach((select, index) => {
      if (select === true) deletedIds.push(data[index].id);
    });
    console.log(deletedIds);
  }

  const [selected, setSelected] = useState(initialSelect);
  const [selectAllCheckBox, setSelectAllCheckBox] = useState(false);

  function handleSelected(index) {
    setSelected(
      selected.map((item, idx) => {
        return idx === index ? !item : item;
      })
    );
  }

  function handleSelectAll(e) {
    const checked = e.target.checked;
    setSelectAllCheckBox(checked);
    if (checked) {
      setSelected(data.map(() => true));
    } else {
      setSelected(data.map(() => false));
    }
  }

  return (
    <main>
      <div className="container-fluid">
        <h4 className="mt-5 mb-3">자주 묻는 질문 관리</h4>
        <div>
          <Form>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th className="text-center">
                      <Form.Check
                        checked={selectAllCheckBox}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>번호</th>
                    <th>질문 내용</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length > 0 &&
                    data.map((item, index) => {
                      return (
                        // <tr>
                        //   <td className="text-center">
                        //     <Form.Check
                        //       onChange={() => handleSelected(index)}
                        //       checked={selected[index]}
                        //     />
                        //   </td>
                        //   <td>{item.name}</td>
                        //   <td>{item.age}</td>
                        //   <td>{item.date}</td>
                        // </tr>
                        <TableArray
                            key = {index}
                            funtionChange = {()=> handleSelected(index)}
                            functionCheck= {selected[index]}
                            name = {item.name}
                            age = {item.age}
                            date = {item.date}
                        ></TableArray>
                      );
                    })}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-between">
              <div class="float-left">
                <Button variant="danger" onClick={() => deleteListFAQs()}>
                  삭제
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
const TableArray = (props) => {
  return (
    <tr>
      <td className="text-center">
        <Form.Check
          onChange={props.funcChange}
          checked={props.functionCheck}
        />
      </td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.date}</td>
    </tr>
  );
};
