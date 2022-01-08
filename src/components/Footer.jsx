import React from "react";
import styled from "styled-components";

const Footerdiv = styled.div`
  height: 50vh;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Footerdiv2 = styled.div`
  margin-left: 10%;
`;

const Footerh4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class Footer extends React.Component {
  render() {
    return (
      <Footerdiv>
        <div />
        <Footerdiv2>
          <Footerh4>
            <h4>이용약관 | 개인정보처리</h4>
          </Footerh4>
          <div>
            <h3>(주)잠많은코알라 | 사업자등록번호 123-12-12345 </h3>
            <h3>대표 오 은 하 | Tel 1234-1234 </h3>
            <h3>E. ouhouh0000@gmail.com | F. 123-123-1234</h3>
            <h3>카카오채널 : 잠많코</h3>
          </div>
          <div>
            <h4>
              Copyright ⓒ 2022 sleepmanycorla All right reserved. By corla
              software
            </h4>
          </div>
        </Footerdiv2>
      </Footerdiv>
    );
  }
}

export default Footer;
