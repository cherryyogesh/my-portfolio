import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Web Development",
    tools: "HTML5, CSS3, JavaScript, Responsive Design",
    image: "/images/project-portfolio.jpg",
    link: "https://github.com",
  },
  {
    title: "Responsive Landing Page",
    category: "Frontend Web Design",
    tools: "HTML5, CSS3, Modern UI, Cross-Browser Compatibility",
    image: "/images/project-landing.jpg",
    link: "https://github.com",
  },
  {
    title: "AI-assisted Web App",
    category: "AI & Web Application",
    tools: "JavaScript (ES6+), AI API Integration, REST APIs",
    image: "/images/project-ai-webapp.jpg",
    link: "https://github.com",
  },
  {
    title: "AAROHAAN AI Practice Suite",
    category: "AI & Modern Web Tools",
    tools: "HTML5, CSS3, JavaScript, Git, GitHub",
    image: "/images/project-portfolio.jpg",
    link: "https://github.com",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!box.length || !container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement
        ? box[0].parentElement.getBoundingClientRect().width
        : window.innerWidth;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX > 0 ? translateX : 600}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -(translateX > 0 ? translateX : 0),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
