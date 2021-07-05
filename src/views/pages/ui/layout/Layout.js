import {
  Button,
  Navbar,
  Container,
  Tabs,
  Nav,
  Tab,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import iS1 from "../assets/imgSlide1.png";
import iS2 from "../assets/imgSlide2.png";
import iS3 from "../assets/imgSlide3.png";
import iS4 from "../assets/imgSlide4.png";
import iS5 from "../assets/imgSlide5.png";
import netflix from "../assets/netflix.png";
import facebook from "../assets/facebook.png";
import freelancer from "../assets/freelancer.png";
import mailbluster from "../assets/mailbluster.png";
import themewagon from "../assets/themewagon.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import icon from "../assets/icon.png";
import pt1 from "../assets/photo1.png";
import pt2 from "../assets/photo2.png";
import pt3 from "../assets/photo3.png";
import pt4 from "../assets/photo4.png";
import pt5 from "../assets/photo5.png";
import pt6 from "../assets/photo6.png";
import s1 from "../assets/serviceImg1.png";
import s2 from "../assets/serviceImg2.png";
import "../scss/style2.scss";
import "typeface-roboto";
import {
  AiFillCamera,
  AiFillCheckCircle,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiFillPhone,
  AiFillMail,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineCopyright,
  AiFillHeart,
  AiOutlineLeft,
  AiOutlineRight
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";
const Layout = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    lazyLoad: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto ui_menu">
              <Nav.Link href="#features" className="iu_menu_item">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="iu_menu_item">
                How it works
              </Nav.Link>
              <Nav.Link href="#features" className="iu_menu_item">
                Reviews
              </Nav.Link>
              <Nav.Link href="#features" className="iu_menu_item">
                Works
              </Nav.Link>
              <Nav.Link href="#features" className="iu_menu_item">
                FAQs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="primary" className="ui_header_button">
                  Get started
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* hero */}
      <Container className="ui_hero">
        <p>San Francisco Base</p>
        <p>Product Photgraphy Services</p>
        <p>
          Get high-quality aesthetic photographs of your valuable products
          within few days{" "}
        </p>
        <div>
          <Button>
            <AiFillCamera className="icon"></AiFillCamera>Book a photoshoot
          </Button>
        </div>
      </Container>
      {/* slide */}
      <Slider {...settings} className="ui_slide">
        <div>
          <img src={iS1} alt="" />
        </div>
        <div>
          <img src={iS2} alt="" />
        </div>
        <div>
          <img src={iS3} alt="" />
        </div>
        <div>
          <img src={iS4} alt="" />
        </div>
        <div>
          <img src={iS5} alt="" />
        </div>
      </Slider>
      {/* client */}
      <Container className="ui_client">
        <p>
          Commercial product photography agency
          <br />
          praised by over 5,000 brands.
        </p>
        <div className="ui_client_list row">
          <img src={netflix} alt="" className="col-md-2 col-6" />
          <img src={facebook} alt="" className="col-md-2 col-6" />
          <img src={freelancer} alt="" className="col-md-2 col-6" />
          <img src={mailbluster} alt="" className="col-md-2 col-6" />
          <img src={themewagon} alt="" className="col-md-2 col-6" />
        </div>
      </Container>

      {/* hr */}
      <Container className="ui_hr">
        <hr />
      </Container>

      {/* how it work */}
      <Container className="ui_hiw">
        <p>How it haapents</p>
        <p>You deliver-We Click</p>
        <div className="row list_item">
          <div className="col-md-4 item">
            <div className="item_number1">
              <span>1</span>
            </div>
            <p className="item_title">Inform us about your product </p>
            <p className="item_content">
              Introduce your product, select through the pricing plan and let us
              know if you have any references in mind
            </p>
          </div>
          <div className="col-md-4 item">
            <div className="item_number2">
              <span>2</span>
            </div>
            <p className="item_title2">Deliver your products</p>
            <p className="item_content">
              Deliver the sujects at our doorstep, we will click perfect shots
              in no time and make it online ready
            </p>
          </div>
          <div className="col-md-4 item">
            <div className="item_number3">
              <span>3</span>
            </div>
            <p className="item_title3">Reviewing the shots </p>
            <p className="item_content">
              After the photoshoot, you will get to review the shots and let us
              know if there any modification needed.
            </p>
          </div>
        </div>
      </Container>

      {/* hr */}
      <Container className="ui_hr">
        <hr />
      </Container>

      {/* testimonial */}
      <Container className="ui_testi">
        <div className="btn_arrow">
          <button onClick={() => {previous()}}><AiOutlineLeft/></button>
          {currentSlide} of 3
          <button onClick={() => {next()}}><AiOutlineRight/></button>
        </div>
        <Slider
          slidesToShow={1}
          swipeToSlide={true}
          infinite={true}
          ref={ref}
          slidesToScroll={1}
          arrows = {false}
          beforeChange= {(current, next) => setCurrentSlide(next+1)}
        >
          <div>
            <div className="row">
              <div className="col-md-6 testi_content">
                <div>
                  <img src={icon} alt="" />
                  <p>
                    When it comes to both reliability and quality,
                    <span>ClickR </span> is undoubtly one of best services out
                    there. Team was fast and responsible. 5 stars for them!
                  </p>
                  <p>Andrinna Malin</p>
                  <p>Designer, co-Founder at Nirvana Tech</p>
                </div>
              </div>
              <div className="col-md-6 testi_img">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6 testi_content">
                <div>
                  <img src={icon} alt="" />
                  <p>
                    When it comes to both reliability and quality,
                    <span className="text-secondary fw-bold">ClickR </span> is
                    undoubtly one of best services out there. Team was fast and
                    responsible. 5 stars for them!
                  </p>
                  <p>Andrinna Malin</p>
                  <p>Designer, co-Founder at Nirvana Tech</p>
                </div>
              </div>
              <div className="col-md-6 testi_img">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6 testi_content">
                <div>
                  <img src={icon} alt="" />
                  <p>
                    When it comes to both reliability and quality,
                    <span>ClickR </span> is undoubtly one of best services out
                    there. Team was fast and responsible. 5 stars for them!
                  </p>
                  <p>Andrinna Malin</p>
                  <p>Designer, co-Founder at Nirvana Tech</p>
                </div>
              </div>
              <div className="col-md-6 testi_img">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          
        </Slider>
      </Container>

      {/* packages */}
      <Container className="ui_packages">
        <p className="packages_tittle">Our Packages</p>
        <div className="row packages_list_item">
          <div className="col-lg-4 item">
            <div className="item1">
              <p className="item_level">Basic</p>
              <p className="item_cost">$9</p>
              <p className="item_amount">/ per image</p>
              <div className="item_content">
                <ul>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    High quality images
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Single Revision
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    10 Products per order
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Not providing softcopy
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Free return shipment
                  </li>
                </ul>
              </div>
              <div className="item_btn">
                <Button>Choose plan</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 item">
            <div className="item2">
              <p className="item_level">Avarage</p>
              <p className="item_cost">$19</p>
              <p className="item_amount">/ per image</p>
              <div className="item_content">
                <ul>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    High quality images
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />3 Revisions
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    25 Products per order
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Provides softcopy
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Free return shipment
                  </li>
                </ul>
              </div>
              <div className="item_btn">
                <Button>Choose plan</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 item">
            <div className="item3">
              <p className="item_level">Avarage</p>
              <p className="item_cost">$19</p>
              <p className="item_amount">/ per image</p>
              <div className="item_content">
                <ul>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    High quality images
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />3 Revisions
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    25 Products per order
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Provides softcopy
                  </li>
                  <li>
                    <AiFillCheckCircle className="item_icon" />
                    Free return shipment
                  </li>
                </ul>
              </div>
              <div className="item_btn">
                <Button>Choose plan</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* galleyry */}
      <Container className="ui_gallery">
        <p className="gallery_tittle">Over 1,00,000 Photos Shot</p>
        <div className="gallery_tab">
          <Tabs
            defaultActiveKey="shoe"
            transition={false}
            className="mb-5"
            variant="pills"
          >
            <Tab eventKey="food" title="Food">
              Food
            </Tab>
            <Tab eventKey="shoe" title="Shoe" className="gallery_list_item">
              <Row>
                <Col>
                  <img src={pt1} alt="" />
                </Col>
                <Col>
                  <img src={pt2} alt="" />
                </Col>
                <Col>
                  <img src={pt3} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={pt4} alt="" />
                </Col>
                <Col>
                  <img src={pt5} alt="" />
                </Col>
                <Col>
                  <img src={pt6} alt="" />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="watches" title="Watches">
              Watches
            </Tab>
            <Tab eventKey="cosmetics" title="Cosmetics">
              Cosmetics
            </Tab>
            <Tab eventKey="phone" title="Phone">
              Phone
            </Tab>
            <Tab eventKey="camera" title="Camera">
              Camera
            </Tab>
          </Tabs>
        </div>
        <div className="gallery_btn">
          <Button>
            View portfolio{" "}
            <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
          </Button>
        </div>
      </Container>

      {/* services */}
      <Container className="ui_services">
        <p className="service_tittle">Our services</p>
        <div className="service_item">
          <div className="item row">
            <div className="col-md-5">
              <img src={s1} alt="" />
            </div>
            <div className="col-md-7 item_info">
              <div>
                <p className="item_tittle">Photo Preview</p>
                <p className="item_content">
                  Invest on your commercial product photography on a visual
                  story created by our creative team. Each click at the most
                  reasonable price going to pay you more.
                </p>
                <div className="item_button">
                  <a>
                    Explore service
                    <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
                  </a>
                  <a>
                    Pricing
                    <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item row">
            <div className="col-md-7 item_info2">
              <div>
                <p className="item_tittle">Product Revision</p>
                <p className="item_content">
                  It's not just another edge correcting service. A team trusted
                  by more than 5,000 brands will work at your product with care
                  and creativity.
                </p>
                <div className="item_button">
                  <a>
                    Explore service
                    <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
                  </a>
                  <a>
                    Pricing
                    <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={s2} alt="" />
            </div>
          </div>
        </div>
      </Container>

      {/* FAQ */}
      <Container className="ui_faq">
        <p className="faq_tittle">FAQ</p>
        <div className="row faq_info">
          <div className="col-md-6">
            <div className="tittle blue">What's the turnabout time?</div>
            <div className="content">
              Generally the turnabout time depends on the scheme of pricing you
              are selecting. The tentative turnaround time for orders less than
              100 images is up to 12 business days from the time we receive your
              products and payment. Reach our support to get better insight.
            </div>
            <div className="tittle green">What are the delivery options?</div>
            <div className="content">
              Deliver your products by using the labeling with the help of any
              courier service or just drop it at our door step at the Biancca
              Studio, San Francisco.
            </div>
            <div className="tittle orange">Will my products be returned?</div>
            <div className="content">
              That’s totally up to you. If you want the product back, then you
              have to include that option in registration time. Else, it will be
              stored in our storage and you can pick that whenever you wish.
            </div>
          </div>
          <div className="col-md-6">
            <div className="tittle orange">Can I provide references?</div>
            <div className="content">
              Absolutely! If clients provide any sort of refernces, that is
              highly appreciated by our creative team.
            </div>
            <div className="tittle blue">
              Can I be present during the shoot?
            </div>
            <div className="content">
              Sorry, we currently do not support that under any pricing scheme.
              Usually any other person than the creative team is not allowed to
              attend the phototshoot. Otherwise, it has effects on others and
              time & effort get wasted as we conduct the process on a fixed
              plan. We hope that people would understand and respect our
              creative process.
            </div>
            <div className="tittle green">Do you support revisions?</div>
            <div className="content">
              Yes, based on the pricing plan, you will have several revision
              options. If you want to bring more than 90% change, then you will
              have to pay further.
            </div>
          </div>
        </div>
      </Container>

      {/* nearfooter */}
      <Container className="ui_hero_footer">
        <div>
          <p className="tittle">
            Get your commercial product images today that matter
          </p>
          <div className="btn">
            <Button>
              Get Started Now<AiOutlineCheck className="icon"></AiOutlineCheck>
            </Button>
          </div>
        </div>
      </Container>

      {/* footer */}
      <Container className="ui_footer">
        <div className="row">
          <div className="col-md-9 row menu">
            <div className="col-md-2 col-sm-4 col-6 list_menu">
              <div className="tittle">Why Us</div>
              <ul className="item_menu">
                <li>Channel</li>
                <li>Engagement</li>
                <li>Scale</li>
                <li>Watch Demo</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-6 list_menu">
              <div className="tittle">Product</div>
              <ul className="item_menu">
                <li>Features</li>
                <li>Integrations</li>
                <li>Enterprise</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-6 list_menu">
              <div className="tittle">Resources</div>
              <ul className="item_menu">
                <li>Partners</li>
                <li>Developers</li>
                <li>Apps</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="list_menu col-sm-4 col-md-2 col-6">
              <div className="tittle">Company</div>
              <ul className="item_menu">
                <li>About Us</li>
                <li>Leadership</li>
                <li>Investor Relations</li>
                <li>News</li>
              </ul>
            </div>
            <div className="list_menu col-md-2 col-sm-4 col-6">
              <div className="tittle">Pricing </div>
              <ul className="item_menu">
                <li>Plans</li>
                <li>Paid vs. Free</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 contact">
            <div className="tittle">Contact</div>
            <div className="phone_number">
              <AiFillPhone className="icon"></AiFillPhone>+214556905345
            </div>
            <div className="email">
              <AiFillMail className="icon"></AiFillMail>something@email.com
            </div>
            <div className="location">
              <ImLocation className="icon"></ImLocation>567, Kansas, San
              Francisco, USA
            </div>
          </div>
        </div>
        <div className="social">
          <div>
            <FaFacebook className="icon facebook"></FaFacebook>
            <AiFillTwitterCircle className="icon twitter"></AiFillTwitterCircle>
            <AiOutlineInstagram className="icon instagram"></AiOutlineInstagram>
          </div>
        </div>
        <div className="copyright">
          <div className="right">
            <p>All rights Reserved</p>
            <AiOutlineCopyright className="icon"></AiOutlineCopyright>
            <p>Your Company, 2021</p>
          </div>
          <div className="left">
            <p>
              Made with <AiFillHeart className="icon" /> by
            </p>
            <p>Themewagon</p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Layout;
