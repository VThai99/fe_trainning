import {Button, Form, Table} from 'react-bootstrap';
// import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import { useSelector } from 'react-redux';


const initialSelect = new Array(10).fill(false)

export default function FAQManage() {

    // const history = useHistory();

    // function handleCreate() {
    //     history.push("/faq/create/")
    // }



    const array = useSelector((state) => state.array);
    const [data, setData] = useState(array);

    // function handlePaging(number) {
    //     setData({...data, pageable: {...data.pageable, pageNumber: --number}})
    // }

    // useEffect(() => {
       
    // }, [])

    
    function deleteListFAQs() {
        let deletedIds = [];
        selected.forEach((select, index) => {
            if (select === true) deletedIds.push(data[index].id);
        })
        console.log(deletedIds)
        // let requestBody = {
        //     data: deletedIds,
        // }
        // if (deletedIds.length <= 0) {
        //     alert('SwalCommon.PLEASE_CHOOSE')
        // } else {
        //     alert('delete all').then(willDelete => {
        //         if (willDelete) {
        //             FAQService.deleteListFAQ(requestBody).then(
        //                 (response) => {
        //                     if (response.status === 204) {
        //                         getData()
        //                         setSelected(initialSelect)
        //                     } else {
        //                         alert("삭제 실패 !")
        //                     }
        //                 }
        //             ).catch((err) => {
        //                 console.log(err)
        //             });
        //         }
        //     })
        // }
    }

    const [selected, setSelected] = useState(initialSelect);
    const [selectAllCheckBox, setSelectAllCheckBox] = useState(false);

    function handleSelected(index) {
        setSelected(selected.map((item, idx) => {
            return (idx === index) ? !item : item
        }));
    }

    function handleSelectAll(e) {
        const checked = e.target.checked;
        setSelectAllCheckBox(checked)
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
                                    <th className="text-center"><Form.Check
                                        checked={selectAllCheckBox} onChange={handleSelectAll}/></th>
                                    <th>번호</th>
                                    <th>질문 내용</th>
                                    <th>작성일</th>
                                </tr>
                                </thead>
                                <tbody>
                                {(data && data.length > 0) &&
                                data.map((item, index) => {
                                    return (
                                        <tr>
                                            <td className="text-center"><Form.Check
                                                onChange={() => handleSelected(index)} checked={selected[index]}/></td>
                                            <td>{item.name}</td>
                                            <td >{item.age}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </div>

                        <div className="d-flex justify-content-between">

                            <div class="float-left">
                                <Button variant="danger" onClick={() => deleteListFAQs()}>삭제</Button>
                            </div>
                            {/* <PaginationSection
                                size={data.size}
                                number={data.number}
                                totalElements={data.totalElements}
                                handlePaging={handlePaging}/>
                            <div className="float-right">
                                <Button variant="org" onClick={handleCreate}>작성</Button>
                            </div> */}

                        </div>
                    </Form>
                </div>

            </div>
        </main>
    )
}
