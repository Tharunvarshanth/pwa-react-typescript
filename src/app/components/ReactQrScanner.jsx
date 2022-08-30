import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import { isMobile } from "react-device-detect";

class ReactQrScanner extends Component {
  qrRef = React.createRef(null);
  ref = React.createRef(null);
  constructor(props) {
    console.log(isMobile);
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
      isHasCameraAccess: true,
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    // console.log("handleScann");
    // console.log(data);
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    if (err === "DOMException: Permission denied") {
      this.setState({
        ...this.state,
        isHasCameraAccess: false,
      });
    }
    console.log("handleError ", err);
  }

  handleImageLoad(img) {
    console.log(img);
  }
  handleLoad(res) {
    console.log("onLoad", res);
  }
  onScanFile = () => {
    console.log(this.qrRef);
    this.qrRef.openImageDialog();
  };

  componentDidMount() {}

  render() {
    const previewStyle = {
      height: "40vh",
      width: "80%",
    };

    return (
      <div ref={this.ref}>
        <QrReader
          facingmode="environment"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }
}
export default ReactQrScanner;
