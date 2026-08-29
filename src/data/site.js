import splashAnimation from "../assets/lottie/splashAnimation";

/* Splash Screen */
export const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

/* Illustrations (Lottie vs static image) */
export const illustration = {
  animated: true
};

/* Introduction Video Section (hidden by default) */
export const introVideo = {
  display: false,
  title: {
    en: "Get to Know Me",
    id: "Perkenalan Singkat"
  },
  subtitle: {
    en: "A quick introduction to how I work and what you can expect when collaborating with me.",
    id: "Pengantar singkat tentang cara saya bekerja dan apa yang bisa Anda harapkan saat berkolaborasi."
  },
  videoUrl: "https://youtu.be/L_8KDkAELJs",
  videoType: "youtube",
  thumbnail: ""
};
