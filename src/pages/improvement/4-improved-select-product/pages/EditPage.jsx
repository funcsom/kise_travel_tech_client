import SelectGoTrain from "../components/SelectProduct/SelectGoTrain";
import SelectComeTrain from "../components/SelectProduct/SelectComeTrain";
import SelectPackage from "../components/SelectProduct/SelectPackage";

import { ImpUserContext } from "../../../../App";
import { useContext, useEffect } from "react";

// Edit 페이지
const EditPage = ({ editImpInfo, setStep }) => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  useEffect(() => {
    setStep(2);
  }, []);

  return (
    <div>
      {editImpInfo === "goTrain" && <SelectGoTrain />}
      {editImpInfo === "comeTrain" && <SelectComeTrain />}
      {editImpInfo === "package" && <SelectPackage />}
    </div>
  );
};

export default EditPage;
