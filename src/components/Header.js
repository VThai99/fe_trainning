import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
const Header = () => {
  const [cookies, removeCookie] = useCookies([""])
  const history = useHistory()
  useEffect(()=>{
    console.log(cookies)
  })
  const logOut = () =>{
    if(window.confirm('Are you sủe')){
      removeCookie('username');
      history.push('/login')
    }
  }
    return(
    <CHeader position="sticky" className="mb-4 bg-secondary">
    <CContainer fluid>
      <CHeaderToggler
        className="ms-md-3 d-lg-none"
      >
      </CHeaderToggler>
      <CHeaderBrand className="mx-auto d-md-none" to="/">
      </CHeaderBrand>
      <CHeaderNav className="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink to="/dashboard">
            Dashboard
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Users</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Settings</CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#">
          
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
        
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" className='fw-bold text-dark' onClick={logOut}>
          {/* 로그아웃 */}
          {cookies.username}
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav className="ms-3">
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
    </CContainer>
  </CHeader>
    );
}
export default Header;