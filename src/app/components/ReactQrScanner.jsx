import React, { Component, useEffect } from "react";
import QrReader from "react-qr-scanner";
import { isMobile } from "react-device-detect";

function ReactQrScanner() {
  useEffect(() => {});
  function handleScan(data) {
    // console.log("handleScann");
  }
  function handleError(err) {
    if (err === "DOMException: Permission denied") {
      this.setState({
        ...this.state,
        isHasCameraAccess: false,
      });
    }
    console.log("handleError ", err);
  }

  function handleImageLoad(img) {
    console.log(img);
  }
  function handleLoad(res) {
    console.log("onLoad", res);
  }
  function onScanFile() {
    console.log(this.qrRef);
    this.qrRef.openImageDialog();
  }

  const previewStyle = {
    height: "40vh",
    width: "80%",
  };

  return (
    <div>
      <QrReader
        constraints={
          window.screen.width > 768
            ? undefined
            : {
                video: {
                  facingMode: { exact: `environment` },
                },
              }
        }
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
}
export default ReactQrScanner;
