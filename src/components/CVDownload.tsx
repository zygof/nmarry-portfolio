import React from "react";

interface Props {
  file: string;
}

const CVDownload: React.FunctionComponent<Props> = ({ file }) => (
  <a
    href={file}
    download
    className="downloadButton hidden lg:inline-flex m-10 py-2 px-4 rounded shadow-xl fixed z-50"
  >
    Télécharger mon CV
  </a>
);

export default CVDownload;
