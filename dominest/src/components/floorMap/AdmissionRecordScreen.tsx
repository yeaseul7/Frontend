/* @jsxImportSource @emotion/react */
import { RoomRecord } from "@/content/floorRoom";
import { FloorTable } from "@/style/domiStyle/AdmissionRecordStyle";

interface AdmissionRecordScreenProps {
  domitoryNum: string;
}

export default function AdmissionRecordScreen({
  domitoryNum,
}: AdmissionRecordScreenProps): JSX.Element {
  return (
    <div>
      <FloorTable>
        <tr>
          <th>이름</th>
          <th>입실 일자</th>
          <th>퇴실 일자</th>
          <th>전화번호</th>
        </tr>
        {RoomRecord.map((record) => (
          <tr>
            <td>{record.name}</td>
            <td>{record.inDate}</td>
            <td>{record.outDate}</td>
            <td>{record.phoneNum}</td>
          </tr>
        ))}
      </FloorTable>
    </div>
  );
}
