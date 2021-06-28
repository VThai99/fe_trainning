import { CContainer } from "@coreui/react";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import Header from "../../../components/Header";
const Home = (props) => {
  return (
    <div className="row min-vh-100">
      <div className="col-1">
        <Sidebar></Sidebar>
      </div>
      <div className="col-11">
        <div>
          <Header></Header>
        </div>
        <CContainer>    
                {props.children}
        </CContainer>
      </div>
    </div>
  );
};
export default Home;
