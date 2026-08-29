import Lottie from "lottie-react";

export default function DisplayLottie({animationData, loop = true, autoplay = true}) {
  return <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />;
}
