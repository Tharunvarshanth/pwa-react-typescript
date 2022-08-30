import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

function ReactQrLibReader() {
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const ref = useRef();
  const qrRef = useRef();

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  return (
    <>
      <div ref={ref}>
        <button onClick={onScanFile}>Scan Qr Code</button>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              console.log(result);
            }

            if (!!error) {
              console.info("error", error);
            }
          }}
          style={{ width: 150, height: 150 }}
        />
      </div>
    </>
  );
}

export default ReactQrLibReader;
