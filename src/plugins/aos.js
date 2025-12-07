import AOS from "aos";
import "aos/dist/aos.css";

export default function aosInit() {
    AOS.init({
        duration: 700,
        once: true,
        offset: 80,
        easing: "ease-in-out",
    });
}
