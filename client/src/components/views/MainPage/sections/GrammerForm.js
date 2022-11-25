import React from "react";

function GrammerForm() {
  return (
    <table // 첫 번째 테이블 시작
      style={{
        width: "90%",
        borderBottom: "1px solid #d9d9d9",
        borderTop: "1px solid #d9d9d9",
        borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        justifyContent: "center",
        maxHeight: "100%",
        color: "black",
        fontWeight: "normal",
        fontSize: "13px",
      }}>
      <tbody>
        <tr
          style={
            {
              // borderBottom: "1px solid #d9d9d9"
            }
          }>
          <th
            style={{
              width: "30%",
              // borderRight: "1px solid #d9d9d9",
            }}>
            입력 내용
          </th>
          <th style={{ width: "70%" }}>도너츠</th>
        </tr>
        <tr
          style={
            {
              // borderBottom: "1px solid #d9d9d9"
            }
          }>
          <th
            style={{
              width: "30%",
              // borderRight: "1px solid #d9d9d9",
            }}>
            대치어
          </th>
          <th style={{ width: "70%" }}>도넛</th>
        </tr>
        <tr>
          <th
            style={{
              width: "30%",
              verticalAlign: "top",
              // borderRight: "1px solid #d9d9d9",
            }}>
            도움말
          </th>
          <th style={{ width: "70%" }}>
            다음은 '새 맞춤법과 교정의 실제' (미승우)를 참조하여 외래어 표기에
            관한 원칙을 인용한 예입니다. 짧은 모음 다음의 어말 무성 파열음 ([p],
            [t], [k])은 받침으로 적는다. (예) 'shoot' 슈트 (X) / 슛 (O)
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default GrammerForm;
