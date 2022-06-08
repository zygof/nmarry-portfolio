import React from "react";
import classNames from "classnames";

import { Statut } from "../../interfaces";

interface IconStatutProps {
  statut: Statut;
}

const className =
  "text-center text-xs text-blue-50 font-semibold rounded-full w-22 px-2";

const StatutElement: React.FunctionComponent<IconStatutProps> = ({
  statut,
}) => {
  switch (String(statut)) {
    case Statut.TEST:
      return <p className={classNames([className, "bg-yellow-600"])}>{Statut.TEST}</p>;
    case Statut.IN_PROGRESS:
      return <p className={classNames([className, "bg-orange-600"])}>{Statut.IN_PROGRESS}</p>;
    case Statut.DONED:
      return <p className={classNames([className, "bg-green-500"])}>{Statut.DONED}</p>;
    case Statut.DEPLOYED:
      return <p className={classNames([className, "bg-green-800"])}>{Statut.DEPLOYED}</p>;
    default:
      return <p className={classNames([className, "bg-orange-600"])}>{Statut.IN_PROGRESS}</p>;
  }
};

export default StatutElement;
