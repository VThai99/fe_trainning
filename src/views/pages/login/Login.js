import { CContainer, CFormControl, CRow, CCol, CButton } from '@coreui/react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
const Login = () => {
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [errorId, setErrorId] = useState ('');
    const [errorPass, setErrorPass] = useState ('');
    const history = useHistory()
    useEffect(() => {
        console.log(id, pass)
    }, [id, pass])
    const login = () => {
        if(id === '1' && pass === 'admin') {
            history.push('/home');
        }
        else {
            alert('sai')
        }
    }
    return (
        <div className="bg-light min-vh-100 d-flex flex-row justify-content-center align-items-center">
            <CContainer>
                <div className='d-flex justify-content-center align-items-center'>
                    logo
                </div>
                <div className='d-flex justify-content-center align-items-center fw-bold my-3 fs-3'>
                    관리자 로그인
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div className="d-grid col-1 fw-bold">
                        ID
                    </div>
                    <div className="d-grid col-4">
                        <CFormControl
                            placeholder="ID 입력"
                            aria-describedby="basic-addon1"
                            value={id}
                            onChange={(e) => { setId(e.target.value) }}
                        />
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="d-grid col-1 fw-bold">
                    </div>
                    <div className="d-grid col-4">
                        <p className='text-danger fs-2'>{errorId}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div className="d-grid col-1 fw-bold">
                        비밀번호
                    </div>
                    <div className="d-grid col-4">
                        <CFormControl
                            placeholder="비밀번호 입력"
                            aria-describedby="basic-addon1"
                            value={pass}
                            onChange={(e) => { setPass(e.target.value) }}
                        />
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="d-grid col-1 fw-bold">
                    </div>
                    <div className="d-grid col-4">
                        <p className='text-danger fs-2'>{errorPass}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    <div className="d-grid gap-2 col-3 mx-auto">
                        <CButton color="secondary" size="lg" onClick={login}>
                            로그인
                        </CButton>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    <CButton color="link">
                        <Link to='/register'>  비밀번호 재설정</Link>
                    </CButton>
                </div>
            </CContainer>
        </div>
    )
}
export default Login;