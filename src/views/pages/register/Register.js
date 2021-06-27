import { CContainer, CFormControl, CRow, CCol, CButton } from '@coreui/react';
const Register = () => {
    return (
        <>
            <CContainer className='justify-content-center align-items-center d-flex min-vh-100 flex-column'>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <h1>비밀번호 초기화 메일 발송</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <p className="text-center">관리자로 등록된 이메일 주소를 정확히 입력해 주세요.<br></br>
                        해당 이메일로 비밀번호 재설정 안내 메일을 발송해드립니다.</p>
                </div>
                <div className="row">
                    <div className="col-1">aa</div>
                    <div className="col-11">aa</div>
                </div>
            </CContainer>
        </>
    )
}
export default Register;