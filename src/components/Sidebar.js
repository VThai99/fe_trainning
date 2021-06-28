import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CCreateNavItem,
  CNavItem,
  CNavLink,
  CNavGroup,
} from "@coreui/react";
// import navigation from "../nav/_nav";
import logo from "../assets/icons/logo.png";
const Sidebar = () => {
  return (
    <CSidebar position="fixed">
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src={logo} alt="" />
      </CSidebarBrand>
      <CSidebarNav>
        <CNavGroup toggler="메인 관리">
          <CNavItem>
            <CNavLink href="/one/one1">메인 배너 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/one/one2">동영상 등록</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/one/one3">매거진 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/one/one4">공지사항 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink  href="/one/one5">메인 팝업 등록</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/one/one6">이벤트 배너 등록</CNavLink>
          </CNavItem>
        </CNavGroup>
        <CNavGroup toggler="수업 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>
        <CNavGroup toggler="도서 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler="결제 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler="회원 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler="지도교사 지원하기 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler="게시판 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler="정산 관리">
          <CNavItem>
            <CNavLink href="#">LiveClass 수업 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">LiveClass 책글 주차 수정 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">과학수학 다빈치 리스트</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">다빈치 로그 리스트</CNavLink>
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  );
};
export default Sidebar;
