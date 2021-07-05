import { CFormControl, CButton } from "@coreui/react";
import { useEffect, useState } from "react";
const One2 = () => {
  const [url, setUrl] = useState("");
  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  };
  const goUrl = () => {
    const check = validURL(url);
    if (!check) {
      const newLink = `https://www.google.com/search?q=${url}`;
      window.open(newLink)
    } else {
      window.open(url, "_blank");
    }
  };
  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-3 fs-3 fw-bold">동영상 등록</div>
        </div>
        <div className="row mt-2">
          <div className="col-8"></div>
          <div className="col-4 text-danger fs-6">
            * 표시된 영역은 필수 입력 영역 입니다.
          </div>
        </div>
        <div className="mt-2">
          <div className="row border border-dark">
            <div className="col-3 text-light bg-secondary d-flex justify-content-center align-items-center fw-bold">
              <span className="text-danger fs-4 mr-2">*</span>동영상 URL
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-7 my-3">
                  <CFormControl
                    placeholder="https://www.youtube.com/"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                    onKeyPress={(e)=>{
                      if(e.key==='Enter')
                      {
                        goUrl()
                      }
                    }}
                  ></CFormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center fixed-bottom bottom-50">
        <CButton
          className="text-light fw-bold col-2"
          size="lg"
          color="dark"
          onClick={goUrl}
        >
          저장
        </CButton>
      </div>
    </>
  );
};
export default One2;
