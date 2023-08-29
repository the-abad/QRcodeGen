var qrcode;

function generateQRCode() {
  var qrData = document.getElementById("qrData").value;
  if (qrData.trim() === "") {
    alert("Please enter data for the QR code.");
    return;
  }

  // Clear previous QR code if it exists
  clearQRCode();

  // Create a new QR code element
  var qrCodeElement = document.createElement("div");
  document.getElementById("qrCodeContainer").appendChild(qrCodeElement);

  qrcode = new QRCode(qrCodeElement, {
    text: qrData,
    width: 200, 
    height: 200 
  });

  // Show the download and refresh buttons after generating QR code
  document.getElementById("downloadButton").style.display = "block";
  document.getElementById("refreshButton").style.display = "block";
}

function clearQRCode() {
  if (qrcode) {
    qrcode.clear();
    var qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = "";

    // Hide the download and refresh buttons when clearing QR code
    document.getElementById("downloadButton").style.display = "none";
    document.getElementById("refreshButton").style.display = "none";
  }
}

function downloadQRCode() {
  if (qrcode) {
    var qrCodeCanvas = document.querySelector(".qr-code canvas");
    var qrCodeImage = qrCodeCanvas.toDataURL("image/png");
    var downloadLink = document.createElement("a");
    downloadLink.href = qrCodeImage;
    downloadLink.download = "qrcode.png";
    downloadLink.click();
  }
}

function refreshQRCode() {
  clearQRCode();
  document.getElementById("qrData").value = "";
}
