import React from "react";

interface Props {
  file: string;
}

const CVDownload: React.FunctionComponent<Props> = ({ file }) => (
  <a
    href={file}
    download
    className="hidden lg:inline-flex bg-primary hover:bg-gray-600 text-white font-bold py-2 px-4 rounded shadow-xl fixed inset-dl-cv m-10 z-50"
  >
    Télécharger mon CV
  </a>
);

export default CVDownload;
