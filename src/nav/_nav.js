import { NavLink } from 'react-router-dom'

const _nav = [
    // {
    //     _component: 'CNavTitle',
    //     anchor: '메인 관리'
    // },
    {
        _component: 'CNavGroup',
        as: NavLink,
        anchor: '메인 관리',
        items: [
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '메인 배너 리스트',
                to: '/one/one1'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '동영상 등록',
                to: '/one/one2'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '매거진 리스트',
                to: '/one/one3'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '공지사항 리스트',
                to: '/one/one4'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '메인 팝업 등록',
                to: '/one/one5'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '이벤트 배너 등록',
                to: '/one/one6'
            },

        ]
    },
    {
        _component: 'CNavGroup',
        as: NavLink,
        anchor: '수업 관리',
        items: [
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: 'LiveClass 수업 리스트',
                to: '/two/two1'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: 'LiveClass 책글 주차 수정 리스트',
                to: '/two/two2'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '과학수학 다빈치 리스트',
                to: '/two/two3'
            },
            {
                _component: 'CNavItem',
                as: NavLink,
                anchor: '다빈치 로그 리스트',
                to: '/two/two4'
            },
        ]
    },
]
export default _nav;