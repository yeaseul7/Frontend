import {
  DormitoryDetail,
  InModal,
  ResidentList,
  StudentButton,
} from "@/style/domiStyle/SelectStudentStyle";
import React from "react";
import AdmissionRecordScreen from "./AdmissionRecordScreen";

interface SelectStudentProps {
  students: {
    student1: string;
    student2: string;
  };
  floorNum: number;
}

interface DomitoryProps {
  domitoryNum: string;
  Check: boolean;
}

export default function SelectStudent({
  students,
  floorNum,
}: SelectStudentProps): JSX.Element {
  const [domitory, setDomitory] = React.useState<DomitoryProps[]>([
    { domitoryNum: floorNum + "A", Check: false },
    { domitoryNum: floorNum + "B", Check: false },
  ]);
  function findDomitoryNum(floorNum: number, unit: string) {
    let domitoryNum = (floorNum < 100 ? floorNum * 100 + 1 : floorNum) + unit;
    setDomitory((prev) => {
      const newState = [...prev];
      if (unit === "A") {
        newState[0].domitoryNum = domitoryNum;
        newState[0].Check = !newState[0].Check;
        newState[1].Check = false;
      } else {
        newState[1].domitoryNum = domitoryNum;
        newState[1].Check = !newState[1].Check;
        newState[0].Check = false;
      }
      return newState;
    });
  }

  return (
    <InModal>
      <ResidentList>
        <DormitoryDetail key={"A"}>
          <span>{floorNum < 100 ? floorNum * 100 + 1 : floorNum}A :</span>
          <StudentButton onClick={() => findDomitoryNum(floorNum, "A")}>
            {students.student1}
          </StudentButton>
        </DormitoryDetail>
        {floorNum === 218 ? null : (
          <DormitoryDetail key={"B"}>
            <span>{floorNum < 100 ? floorNum * 100 + 1 : floorNum}B :</span>
            <StudentButton onClick={() => findDomitoryNum(floorNum, "B")}>
              {students.student2}
            </StudentButton>
          </DormitoryDetail>
        )}
      </ResidentList>
      {domitory.map((domitory) => (
        <div key={domitory.domitoryNum}>
          {domitory.Check && (
            <AdmissionRecordScreen domitoryNum={domitory.domitoryNum} />
          )}
        </div>
      ))}
    </InModal>
  );
}
