import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const CarouselCustom = (props) => {
  console.log(props.movies);
  console.log(props.isLoading);
  return (
    <Carousel>
      {props.isLoading.isLoading && (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g>
              <circle cx="12" cy="3" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate0"
                  attributeName="r"
                  begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="16.5" cy="4.21" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate1"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="7.5" cy="4.21" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate2"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="19.79" cy="7.5" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate3"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="4.21" cy="7.5" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate4"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="21" cy="12" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate5"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="3" cy="12" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate6"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="19.79" cy="16.5" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate7"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="4.21" cy="16.5" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate8"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="16.5" cy="19.79" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotate9"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="7.5" cy="19.79" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotatea"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <circle cx="12" cy="21" r="1" fill="white">
                <animate
                  id="svgSpinners12DotsScaleRotateb"
                  attributeName="r"
                  begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                  values="1;2;1"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                dur="6s"
                repeatCount="indefinite"
                type="rotate"
                values="360 12 12;0 12 12"
              />
            </g>
          </svg>
          <span className="visually-hidden">Loading...</span>
        </>
      )}
      <Carousel.Item>
        <Row>
          {props.movies.slice(0, 6).map((movie, index) => (
            <Col sm={4} md={4} lg={2} key={index} className={index >= 3 ? "d-none d-lg-block" : ""}>
              <img src={movie.Poster} style={{ height: "310px" }} alt={movie.Title} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {props.movies.slice(6).map((movie, index) => (
            <Col sm={4} md={4} lg={2} key={index}>
              <img src={movie.Poster} style={{ height: "310px" }} alt={movie.Title} />
            </Col>
          ))}
          {props.movies.slice(0, 2).map((movie, index) => (
            <Col sm={4} md={4} lg={2} key={index}>
              <img src={movie.Poster} style={{ height: "310px" }} alt={movie.Title} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

/*  {/* <Col lg={2}>
            <img src={props.movies[1].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[2].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[3].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[4].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[5].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col lg={2}>
            <img src={props.movies[6].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[7].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[8].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[9].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[0].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
          <Col lg={2}>
            <img src={props.movies[1].Poster} style={{ height: "310px" }} alt="poster" />
          </Col>
        </Row>
       */

export default CarouselCustom;
