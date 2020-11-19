const videoElement = document.getElementById("video");
const button = docuement.getElementById("button");

async function selectMediaStream(params) {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log("Error", error);
  }
}

selectMediaStream();