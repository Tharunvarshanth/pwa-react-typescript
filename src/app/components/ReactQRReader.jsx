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
          ref={qrRef}
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorFile}
          onScan={handleScanFile}
          legacyMode
        />
        <h3>Scanned Code: {scanResultFile}</h3>
      </div>
      <div false>
        <h3>Qr Code Scan by Web Cam</h3>
        <QrReader delay={300} style={{ width: "100%" }} onError={handleErrorWebCam} onScan={handleScanWebCam} />
        <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
      </div>
    </>
  );
}

export default ReactQrLibReader;
