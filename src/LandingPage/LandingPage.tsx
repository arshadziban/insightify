import { useState, useEffect, type ReactNode } from "react";
import imgSumaiaMadam from "../assets/sumaia_madam.png";
import imgZiban from "../assets/ziban.png";
import imgAyesha from "../assets/ayesha.png";
import imgNishat from "../assets/oyshe.png";
import imgFieldwork1 from "../assets/bc83fc1c8281d343eafa2f7a8a3da58e36f2f21d.png";
import imgFieldwork2 from "../assets/de2ae3f505e802be690713bb3c6a4081a460998d.png";
import imgFieldwork3 from "../assets/47c8bf3565689dd455756b131862b3ac4aa678ad.png";
import imgFieldwork4 from "../assets/4a15b8b090542742833ebda660a02416abd52a98.png";
import navLogo from "../assets/nav_logo.png";
import blackLogo from "../assets/black_logo.png";
import footerLogo from "../assets/footer_logo.png";
import cardSvg from "../assets/card.svg";
import svgPaths from "./svg-p2whsf4toz.ts";

const PRIMARY = "#503af2";

/**
 * TopLeftGradient - Complex layered gradient background design
 * 
 * Based on Figma design specifications with multiple gradient elements:
 * - Ellipse 29: Large white-teal gradient (152.13deg, rotated -128.46deg)
 * - Ellipse 28: Medium purple gradient (blurred)
 * - Ellipse 30: Medium purple gradient (blurred)
 * - Vector 109-112: White gradient layers with various rotations
 * 
 * Positioning:
 * - Uses absolute positioning relative to parent container (must be `relative`)
 * - Negative offsets position elements for visual depth
 * - Uses z-0 to stay behind content (z-10 and higher are for foreground)
 * - pointer-events-none ensures it doesn't block user interactions
 */
function TopLeftGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ellipse 29: Large gradient circle - white to teal */}
      <div 
        className="absolute blur-[178px]"
        style={{
          width: "1329.97px",
          height: "1346.37px",
          left: "-950px",
          top: "-350px",
          background: "linear-gradient(152.13deg, #FFFFFF 62.37%, #0E748A 82.7%)",
          transform: "rotate(-128.46deg)",
        }}
      />
      
      {/* Ellipse 28: Medium purple gradient circle */}
      <div 
        className="absolute blur-[178px]"
        style={{
          width: "899.36px",
          height: "909.7px",
          left: "-200px",
          top: "-480px",
          background: "#503AF2",
        }}
      />
      
      {/* Ellipse 30: Medium purple gradient circle */}
      <div 
        className="absolute blur-[178px]"
        style={{
          width: "734.67px",
          height: "743.59px",
          left: "-320px",
          top: "-500px",
          background: "#503AF2",
        }}
      />
      
      {/* Vector 109: White gradient - rotated */}
      <div 
        className="absolute blur-[89px]"
        style={{
          width: "1069.04px",
          height: "548.04px",
          left: "100px",
          top: "-200px",
          background: "rgba(255, 255, 255, 0.85)",
          transform: "rotate(-106.75deg)",
        }}
      />
      
      {/* Vector 111: White gradient - rotated */}
      <div 
        className="absolute blur-[89px]"
        style={{
          width: "753.32px",
          height: "386.19px",
          left: "600px",
          top: "-80px",
          background: "rgba(255, 255, 255, 0.85)",
          transform: "rotate(-92.96deg)",
        }}
      />
      
      {/* Vector 110: White gradient with angle gradient */}
      <div 
        className="absolute blur-[62px]"
        style={{
          width: "848.58px",
          height: "435.02px",
          left: "-100px",
          top: "20px",
          background: "linear-gradient(73.84deg, rgba(255, 255, 255, 0.7) 26.4%, rgba(255, 255, 255, 0) 157.4%)",
          transform: "rotate(-107.49deg)",
        }}
      />
      
      {/* Vector 112: White gradient - rotated */}
      <div 
        className="absolute blur-[107px]"
        style={{
          width: "848.58px",
          height: "712.07px",
          left: "-680px",
          top: "100px",
          background: "rgba(255, 255, 255, 0.8)",
          transform: "rotate(-120.11deg)",
        }}
      />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const links = [
    { label: "Home", href: "#home" },
    { label: "Team Members", href: "#team-members" },
    { label: "Workflow", href: "#workflow" },
    { label: "Fieldwork", href: "#fieldwork" },
    { label: "Technologies", href: "#technologies" },
    { label: "Results", href: "#results" },
    { label: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Detect active section
      const sections = links.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-3xl border-white/20 shadow-2xl shadow-white/20" : "bg-transparent border-transparent"}`}>
      <div className="h-[72px] flex items-center justify-center px-6">
        <div className="w-full max-w-[1280px] flex items-center gap-0">
          <div className="flex items-center shrink-0 ml-0">
            <img 
              src={isScrolled ? blackLogo : navLogo} 
              alt="Insightify Logo" 
              className="h-[25px] w-auto transition-all duration-300" 
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {links.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-['Manrope',sans-serif] text-[15px] transition-colors whitespace-nowrap ${
                    isActive ? "text-black font-semibold" : "text-[#6b7280] hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="#assessment"
            className="hidden lg:flex items-center gap-3 border border-[#503af2] rounded-full pl-5 pr-1.5 py-1 bg-white/90 hover:bg-[#503af2]/10 transition-colors shrink-0"
          >
            <span className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#503af2]">Mind Well</span>
            <span className="bg-[#503af2] rounded-full size-8 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <button className="lg:hidden text-[#556176] ml-auto" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-3xl border-t border-white/20 shadow-2xl shadow-white/20 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-['Manrope',sans-serif] text-[15px] transition-colors ${
                  isActive ? "text-black font-semibold" : "text-[#556176] hover:text-black"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#assessment" className="mt-2 self-start flex items-center gap-3 border border-[#503af2] rounded-full pl-5 pr-1.5 py-1">
            <span className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#503af2]">Mind Well</span>
            <span className="bg-[#503af2] rounded-full size-8 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="w-full relative min-h-screen flex flex-col items-center justify-center text-center pt-[72px] overflow-hidden">
      <TopLeftGradient />
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 max-w-5xl mx-auto py-20 w-full">
        <div className="border border-[#503af2] bg-[#e8e0ff]/10 rounded-full px-6 py-2">
          <span className="font-['Manrope',sans-serif] text-[15px] text-[#503af2] tracking-wide">Academic Research</span>
        </div>

        <h1 className="font-['Manrope',sans-serif] font-semibold text-[clamp(36px,6vw,72px)] text-black leading-[1.2] tracking-tight">
          Screen Time and Its Impact on <span className="font-['Playfair_Display',serif] italic font-semibold text-black">Adolescent</span> Health
        </h1>

        <p className="font-['Manrope',sans-serif] font-medium text-[clamp(16px,2vw,20px)] text-[#6b7280] max-w-2xl leading-relaxed">
          An in-depth research study exploring how digital screen usage affects mental, physical, and behavioral outcomes among children and adolescents.
        </p>

        <button
          className="mt-2 px-8 py-4 rounded-[8px] text-white font-['Manrope',sans-serif] font-semibold text-lg transition-opacity hover:opacity-90"
          style={{ background: PRIMARY }}
        >
          Show Result
        </button>
      </div>
    </section>
  );
}

interface TeamMember {
  name: string;
  role: string;
  institution: string;
  img: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative rounded-[12px] overflow-hidden shrink-0 w-full sm:w-[280px] md:w-[311px]" style={{ background: "rgba(61, 99, 221, 0.37)" }}>
      <img src={member.img} alt={member.name} className="w-full object-cover" />
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-4 flex flex-col justify-end gap-1"
        // style={{
        //   background: "url('data:image/svg+xml;utf8,<svg width=\"311\" height=\"159\" viewBox=\"0 0 311 159\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><foreignObject x=\"-50\" y=\"-50\" width=\"411\" height=\"259\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"backdrop-filter:blur(25px);clip-path:url(%23bgblur_0_78_186_clip_path);height:100%;width:100%\"></div></foreignObject><rect width=\"311\" height=\"159\" rx=\"12\" fill=\"url(%23paint0_linear_78_186)\" fill-opacity=\"0.3\"/><defs><clipPath id=\"bgblur_0_78_186_clip_path\" transform=\"translate(50 50)\"><rect width=\"311\" height=\"159\" rx=\"12\"/></clipPath><linearGradient id=\"paint0_linear_78_186\" x1=\"156.049\" y1=\"37.8\" x2=\"147.152\" y2=\"167.309\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"%23C9C9C9\" stop-opacity=\"0.02\"/><stop offset=\"0.5\" stop-color=\"%23555555\" stop-opacity=\"0.5\"/><stop offset=\"1\" stop-color=\"%23000000\" stop-opacity=\"0.8\"/></linearGradient></defs></svg>')",
        //   backdropFilter: "blur(25px)"
        // }}
      >
        <p className="font-['Manrope',sans-serif] font-medium text-white text-[18px] leading-snug">{member.name}</p>
        <p className="font-['Manrope',sans-serif] font-medium text-white/80 text-[13px] leading-snug">{member.role}</p>
        <p className="font-['Manrope',sans-serif] font-medium text-white/80 text-[13px] leading-snug">{member.institution}</p>
      </div>
    </div>
  );
}

function ResearchTeamSection() {
  const team: TeamMember[] = [
    { name: "Sumaia Rahman Ontora", role: "Assistant Professor, Dept. CSE", institution: "Varendra University", img: imgSumaiaMadam },
    { name: "Arshad Rahman Ziban", role: "Student, Dept. CSE", institution: "Varendra University", img: imgZiban },
    { name: "Ayesha Muni", role: "Student, Dept. CSE", institution: "Varendra University", img: imgAyesha },
    { name: "Nishat Oyshe", role: "Student, Dept. CSE", institution: "Varendra University", img: imgNishat },
  ];

  return (
    <section id="team-members" className="w-full bg-white py-20 px-4">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(30px,4vw,42px)] text-black tracking-tight">
            Our Research <span className="font-['Playfair_Display',serif] italic font-medium">Team</span>
          </h2>
          <p className="mt-3 font-['Manrope',sans-serif] font-medium text-[18px] text-black/60 max-w-md mx-auto">
            A dedicated team leading this research from conceptualization to outcomes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IconArrows() {
  return (
    <svg width="52" height="52" viewBox="0 0 59 59" fill="none">
      <path d={svgPaths.p364daa80} fill={PRIMARY} />
      <path d={svgPaths.p12f41b00} fill={PRIMARY} />
    </svg>
  );
}

function IconDocs() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 29.501L0 59.002V0L30 29.501Z" fill="#503AF2"/>
      <path d="M60 29.501L30 59.002V0L60 29.501Z" fill="#503AF2"/>
    </svg>
  );
}

function IconDocsLarge() {
  return (
    <svg width="52" height="52" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.2998 59.001H0V0L35.2998 59.001ZM70.6484 59.001H35.3496V0L70.6484 59.001Z" fill="#503AF2"/>
    </svg>
  );
}

function IconValidation() {
  return (
    <svg width="52" height="52" viewBox="0 0 59.0957 59.002" fill="none">
      <path d={svgPaths.p39496200} fill={PRIMARY} />
    </svg>
  );
}

function IconData() {
  return (
    <svg width="52" height="52" viewBox="0 0 62.2764 59.001" fill="none">
      <path d={svgPaths.p23ac4500} fill={PRIMARY} />
    </svg>
  );
}

function IconAnalysis() {
  return (
    <svg width="52" height="52" viewBox="0 0 55 59" fill="none">
      <path d={svgPaths.p1a8f9a00} fill={PRIMARY} />
    </svg>
  );
}

interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

function WorkflowCard({ step }: { step: WorkflowStep }) {
  return (
    <div className="relative rounded-[12px] p-6 flex flex-col gap-4 min-h-[220px]" style={{ background: "rgba(80,58,242,0.05)", border: `1px solid ${PRIMARY}` }}>
      <span className="absolute top-4 right-5 font-['Manrope',sans-serif] font-semibold text-[36px] text-black/25 leading-none">{step.num}</span>
      <div className="mt-2">{step.icon}</div>
      <div className="flex flex-col gap-2">
        <p className="font-['Manrope',sans-serif] font-semibold text-[20px] text-black leading-snug">{step.title}</p>
        <p className="font-['Manrope',sans-serif] font-medium text-[16px] text-black/60 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

function WorkflowSection() {
  const steps: WorkflowStep[] = [
    { num: "01", title: "Topic Selection and Preliminary Study", desc: "Choosing the topic and understanding the background.", icon: <IconArrows /> },
    { num: "02", title: "Documentation and Proposal Development", desc: "Preparing documents and submitting the research proposal.", icon: <IconDocs /> },
    { num: "03", title: "Questionnaire Design and Finalization", desc: "Effectively designing and properly finalizing the questionnaire.", icon: <IconAnalysis /> },
    { num: "04", title: "Questionnaire Validation and Approval", desc: "Properly validating the questionnaire and getting approval.", icon: <IconValidation /> },
    { num: "05", title: "Data Collection and Processing", desc: "Collecting and organizing the data efficiently and systematically.", icon: <IconData /> },
    { num: "06", title: "Data Analysis and Final Paper Preparation", desc: "Analyzing data and preparing the final paper with clear findings.", icon: <IconDocsLarge /> },
  ];

  return (
    <section id="workflow" className="w-full bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(30px,4vw,42px)] text-black tracking-tight">
            Research <span className="font-['Playfair_Display',serif] italic font-medium">Workflow</span>
          </h2>
          <p className="mt-3 font-['Manrope',sans-serif] font-medium text-[18px] text-black/60 max-w-md mx-auto">
            The research team followed a systematic process to complete this study.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <WorkflowCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldworkSection() {
  const photos = [
    { img: imgFieldwork1, caption: "Sardah Govt. College, Rajshahi" },
    { img: imgFieldwork2, caption: "Sardah Govt. College, Rajshahi" },
    { img: imgFieldwork3, caption: "Shahid Nazmul Huq Girls' High School" },
    { img: imgFieldwork4, caption: "Shahid Nazmul Huq Girls' High School" },
  ];

  return (
    <section id="fieldwork" className="w-full bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(30px,4vw,42px)] text-black tracking-tight">
            <span className="font-['Playfair_Display',serif] italic font-semibold">Fieldwork</span> Documentation
          </h2>
          <p className="mt-3 font-['Manrope',sans-serif] font-medium text-[18px] text-black/60 max-w-2xl mx-auto">
            Photographs documented during data collection to reflect the authentic research process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "Sardah Govt. College, Rajshahi", imgs: [photos[0], photos[1]] },
            { label: "Shahid Nazmul Huq Girls' High School", imgs: [photos[2], photos[3]] },
          ].map((group) => (
            <div key={group.label} className="rounded-[12px] p-4 flex flex-col gap-4" style={{ background: "rgba(80,58,242,0.05)", border: `1px solid ${PRIMARY}` }}>
              <div className="grid grid-cols-2 gap-4">
                {group.imgs.map((photo, i) => (
                  <img key={i} src={photo.img} alt={group.label} className="w-full h-[200px] sm:h-[240px] rounded-[8px] object-cover" />
                ))}
              </div>
              <p className="font-['Inter',sans-serif] font-medium text-[16px] text-black text-center">{group.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-14 h-14 flex items-center justify-center">{children}</div>
      <span className="font-['Inter',sans-serif] text-[16px] text-black text-center">{label}</span>
    </div>
  );
}

function ReactIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 58 52" fill="none">
      <path d={svgPaths.p12e52100} fill="#00D8FF" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 53 52" fill="none">
      <path clipRule="evenodd" d={svgPaths.p11215700} fill="black" fillRule="evenodd" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg width="35" height="52" viewBox="0 0 34.6666 52.0001" fill="none">
      <path d={svgPaths.p932c480} fill="#F4511E" />
      <path d={svgPaths.pc5d1500} fill="#FF8A65" />
      <path d={svgPaths.p1fba9780} fill="#29B6F6" />
      <path d={svgPaths.p33160d00} fill="#7C4DFF" />
      <path d={svgPaths.p22d8f880} fill="#00E676" />
    </svg>
  );
}

function ColabIcon() {
  return (
    <svg width="89" height="52" viewBox="0 0 76.6661 45" fill="none">
      <path d={svgPaths.p15d600} fill="#FFB300" />
      <path d={svgPaths.p2b48b700} fill="#FFB300" />
      <path d={svgPaths.p27674500} fill="#F57A00" />
    </svg>
  );
}

function GSheetsIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d={svgPaths.pe084380} fill="#34A853" />
    </svg>
  );
}

function VSCodeIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d={svgPaths.p1ee43c80} fill="#2196F3" />
    </svg>
  );
}

function GDocsIcon() {
  return (
    <svg width="41" height="52" viewBox="0 0 41 52" fill="none">
      <path d={svgPaths.p26a33a00} fill="#4285F4" />
    </svg>
  );
}

function KaggleIcon() {
  return (
    <svg width="29" height="52" viewBox="0 0 29 52" fill="none">
      <path d={svgPaths.p185c8980} fill="#20BEFF" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 97 97" fill="none">
      <path d="M0 48.2798V96.5596H96.5596V0H0V48.2798ZM77.8116 44.4174C80.1243 44.9541 82.2262 46.1637 83.8523 47.8935C84.7474 48.8256 85.5256 49.8632 86.1698 50.9835C86.1698 51.107 81.9984 53.9266 79.4569 55.5024C79.3642 55.5642 78.9935 55.1625 78.584 54.5523C78.1201 53.7517 77.4609 53.0818 76.668 52.605C75.875 52.1281 74.9742 51.8599 74.0496 51.8254C71.1219 51.6246 69.2371 53.1618 69.2525 55.6878C69.2291 56.3167 69.373 56.9405 69.6697 57.4954C70.3108 58.8318 71.5082 59.6275 75.2624 61.2497C82.1761 64.2237 85.1346 66.1858 86.9731 68.9744C89.0279 72.0643 89.4837 77.0545 88.0932 80.747C86.5483 84.7639 82.7631 87.4907 77.4099 88.3945C74.9649 88.6747 72.4945 88.6487 70.0559 88.3172C66.3184 87.7012 62.8756 85.9067 60.23 83.1957C59.3416 82.2147 57.6113 79.6578 57.7194 79.4724C58.0009 79.2622 58.2979 79.0737 58.6078 78.9085L62.1844 76.9309L64.9576 75.3242L65.5369 76.1816C66.515 77.58 67.7592 78.7718 69.1985 79.6887C72.2884 81.3109 76.5061 81.0869 78.5918 79.2097C79.292 78.5219 79.7289 77.6102 79.8263 76.6335C79.9237 75.6568 79.6754 74.6768 79.1248 73.8642C78.3523 72.7905 76.8073 71.8867 72.4892 70.0018C67.5067 67.8543 65.3592 66.5257 63.3972 64.4091C62.1727 63.0121 61.2684 61.3643 60.7476 59.5811C60.3594 57.5437 60.302 55.457 60.5776 53.4013C61.605 48.5888 65.2125 45.2285 70.4808 44.232C72.9206 43.9306 75.3919 43.9983 77.8116 44.4329V44.4174ZM55.1471 48.4652V52.4203H42.6098V88.1318H33.7186V52.4125H21.1504V48.5502C21.111 47.2182 21.1419 45.8851 21.2431 44.5564C21.3049 44.4869 28.9679 44.4869 38.2376 44.4869H55.1008L55.1471 48.4652Z" fill="#007ACC"/>
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 98 98" fill="none">
      <path d="M0 0H98V98H0V0Z" fill="#F7DF1E"/>
      <path d="M25.768 81.8959L33.2673 77.3572C34.7143 79.9225 36.0304 82.093 39.1875 82.093C42.2136 82.093 44.1219 80.9094 44.1219 76.3049V44.9916H53.3312V76.435C53.3312 85.9736 47.7399 90.3154 39.5821 90.3154C32.2149 90.3154 27.9385 86.5 25.7676 81.8951M58.3334 80.909L65.832 76.5675C67.8061 79.7912 70.3717 82.1592 74.9104 82.1592C78.7266 82.1592 81.1598 80.2513 81.1598 77.6199C81.1598 74.4624 78.66 73.3438 74.4498 71.5025L72.148 70.5149C65.5035 67.687 61.0962 64.1345 61.0962 56.6352C61.0962 49.7278 66.3587 44.4648 74.5819 44.4648C80.4366 44.4648 84.6468 46.5045 87.6726 51.8328L80.5017 56.4381C78.9226 53.6095 77.213 52.4913 74.5815 52.4913C71.8842 52.4913 70.1738 54.2017 70.1738 56.4381C70.1738 59.2008 71.8842 60.3198 75.831 62.0302L78.1333 63.0167C85.9618 66.3721 90.3691 69.7925 90.3691 77.4885C90.3691 85.778 83.8567 90.3166 75.1075 90.3166C66.5559 90.3166 61.03 86.2381 58.3331 80.9094" fill="black"/>
    </svg>
  );
}

function PowerPointIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 45" fill="none">
      <path d="M28.6811 24.2254L25.3726 0H25.1252C19.3492 0.00981389 13.812 2.3059 9.72391 6.38635C5.63583 10.4668 3.32943 15.9997 3.30884 21.7757V22.0231L28.6811 24.2254Z" fill="#ED6C47"/>
      <path d="M25.6194 0H25.3721V22.0231L36.4022 26.4277L47.4341 22.0231V21.7757C47.4135 16 45.1073 10.4674 41.0196 6.38695C36.9319 2.30654 31.3951 0.0102611 25.6194 0Z" fill="#FF8F6B"/>
      <path d="M47.4346 22.0232V22.2654C47.4131 28.0422 45.1061 33.5757 41.0177 37.6568C36.9292 41.738 31.3916 44.0351 25.6148 44.0463H25.1286C19.3521 44.0342 13.815 41.7368 9.72676 37.6559C5.63848 33.5749 3.3312 28.0419 3.30884 22.2654V22.0232H47.4346Z" fill="#D35230"/>
      <path opacity="0.1" d="M26.4754 10.8233V34.322C26.4724 34.7218 26.3515 35.1118 26.1279 35.4432C25.9043 35.7747 25.588 36.0329 25.2184 36.1855C24.9766 36.2854 24.7178 36.3378 24.4561 36.3396H8.51647C8.2071 35.985 7.91263 35.6176 7.63385 35.2385C4.8244 31.4976 3.30653 26.9452 3.30886 22.2669V21.7824C3.30303 17.5622 4.53845 13.4336 6.86135 9.91024C7.10253 9.532 7.36028 9.16459 7.63385 8.80908H24.4561C24.9897 8.81262 25.5005 9.02581 25.8783 9.40265C26.2561 9.77949 26.4706 10.2898 26.4754 10.8233Z" fill="black"/>
      <path opacity="0.2" d="M25.3726 11.9261V35.4247C25.3703 35.6853 25.318 35.9429 25.2184 36.1837C25.0656 36.5529 24.8073 36.8689 24.4759 37.0922C24.1444 37.3154 23.7545 37.4361 23.3549 37.439H9.52106C9.17207 37.0844 8.83721 36.7173 8.51647 36.3378C8.20709 35.9832 7.91263 35.6158 7.63385 35.2367C4.8244 31.4959 3.30653 26.9434 3.30886 22.2651V21.7806C3.30336 17.561 4.53877 13.433 6.86135 9.91016H23.3532C23.8871 9.9137 24.3982 10.1271 24.776 10.5043C25.1539 10.8815 25.3681 11.3922 25.3726 11.9261Z" fill="black"/>
      <path opacity="0.2" d="M25.3726 11.9261V33.2224C25.3677 33.756 25.1532 34.2663 24.7754 34.6431C24.3976 35.02 23.8868 35.2332 23.3532 35.2367H7.63385C4.8244 31.4959 3.30653 26.9434 3.30886 22.2651V21.7806C3.30336 17.561 4.53877 13.433 6.86135 9.91016H23.3532C23.8871 9.9137 24.3982 10.1271 24.776 10.5043C25.1539 10.8815 25.3681 11.3922 25.3726 11.9261Z" fill="black"/>
      <path opacity="0.2" d="M24.2697 11.9261V33.2224C24.2649 33.756 24.0504 34.2663 23.6726 34.6431C23.2948 35.02 22.784 35.2332 22.2504 35.2367H7.63385C4.8244 31.4959 3.30653 26.9434 3.30886 22.2651V21.7806C3.30336 17.561 4.53877 13.433 6.86135 9.91016H22.2504C22.7843 9.9137 23.2953 10.1271 23.6732 10.5043C24.051 10.8815 24.2653 11.3922 24.2697 11.9261Z" fill="black"/>
      <path d="M2.02274 9.91017H22.2467C22.7824 9.90972 23.2964 10.122 23.6757 10.5003C24.055 10.8787 24.2685 11.3921 24.2694 11.9278V32.1179C24.2685 32.6536 24.055 33.1671 23.6757 33.5454C23.2964 33.9237 22.7824 34.136 22.2467 34.1355H2.02274C1.75728 34.1364 1.49427 34.0849 1.24879 33.9839C1.00331 33.8829 0.780194 33.7344 0.592254 33.5469C0.404315 33.3594 0.25525 33.1367 0.153615 32.8915C0.0519796 32.6462 -0.000223848 32.3833 7.21469e-07 32.1179V11.9278C-0.000223848 11.6624 0.0519796 11.3995 0.153615 11.1543C0.25525 10.909 0.404315 10.6863 0.592254 10.4988C0.780194 10.3114 1.00331 10.1629 1.24879 10.0618C1.49427 9.96082 1.75728 9.90928 2.02274 9.91017Z" fill="url(#paint0_linear_162_116)"/>
      <path d="M12.3549 15.2941C13.6712 15.2074 14.9757 15.5891 16.0378 16.3715C16.4742 16.7599 16.8163 17.2427 17.0382 17.7831C17.2601 18.3235 17.356 18.9073 17.3185 19.4903C17.3329 20.3115 17.1138 21.1198 16.6867 21.8214C16.2534 22.5108 15.6305 23.0608 14.8926 23.4053C14.0491 23.797 13.1272 23.9905 12.1973 23.9711H9.63419V28.7146H7.01514V15.2941H12.3549ZM9.63249 21.9213H11.8873C12.6021 21.9721 13.311 21.7607 13.8813 21.3267C14.1143 21.1044 14.2958 20.8337 14.4128 20.5337C14.5299 20.2337 14.5798 19.9116 14.5589 19.5902C14.5589 18.1119 13.6977 17.3721 11.9754 17.371H9.63249V21.9213Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_162_116" x1="4.22504" y1="8.32451" x2="20.0444" y2="35.7212" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CA4C28"/>
          <stop offset="0.5" stopColor="#C5401E"/>
          <stop offset="1" stopColor="#B62F14"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="51" height="52" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.6583 0.000403474C23.5165 0.0105494 21.4721 0.192668 19.6722 0.511249C14.371 1.44772 13.4092 3.4079 13.4092 7.02339V11.7975H25.9358V13.3889H8.70757C5.06722 13.3889 1.87938 15.5769 0.882035 19.7408C-0.26851 24.5119 -0.31924 27.4897 0.882035 32.4718C1.77234 36.1807 3.89892 38.8227 7.53977 38.8227H11.8472V33.0994C11.8472 28.9644 15.4241 25.3175 19.6727 25.3175H32.1852C35.6683 25.3175 38.4482 22.4492 38.4482 18.9519V7.0239C38.4482 3.62858 35.5841 1.07841 32.1852 0.511757C30.0322 0.153607 27.7996 -0.00923513 25.6583 0.000403474ZM18.8839 3.84012C20.1775 3.84012 21.2347 4.91406 21.2347 6.23506C21.2347 7.55047 20.178 8.61427 18.8839 8.61427C17.5852 8.61427 16.5336 7.55047 16.5336 6.23506C16.5331 4.91406 17.5852 3.84012 18.8839 3.84012Z" fill="url(#paint0_linear_152_110)"/>
      <path d="M40.0095 13.3887V18.9517C40.0095 23.2637 36.3529 26.8934 32.1839 26.8934H19.6715C16.2442 26.8934 13.4084 29.8271 13.4084 33.2594V45.1885C13.4084 48.5828 16.3599 50.58 19.6715 51.5535C23.6365 52.7188 27.4392 52.9298 32.1839 51.5535C35.3373 50.6399 38.447 48.8024 38.447 45.1885V40.4138H25.9351V38.8219H44.7111C48.3514 38.8219 49.7089 36.2829 50.9752 32.4711C52.283 28.5472 52.2267 24.7734 50.9752 19.74C50.0752 16.1154 48.357 13.3882 44.7111 13.3882L40.0095 13.3887ZM32.9718 43.5966C34.271 43.5966 35.3226 44.6604 35.3226 45.9768C35.3226 47.2968 34.2704 48.3707 32.9718 48.3707C31.6782 48.3707 30.6215 47.2968 30.6215 45.9768C30.6215 44.6604 31.6782 43.5966 32.9718 43.5966Z" fill="url(#paint1_linear_152_110)"/>
      <defs>
        <linearGradient id="paint0_linear_152_110" x1="-1.25577" y1="1.49319" x2="27.6366" y2="26.1324" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A9FD4"/>
          <stop offset="1" stopColor="#306998"/>
        </linearGradient>
        <linearGradient id="paint1_linear_152_110" x1="38.5063" y1="41.4484" x2="28.145" y2="26.9184" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD43B"/>
          <stop offset="1" stopColor="#FFE873"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function TechStackSection() {
  return (
    <section id="technologies" className="bg-white py-20 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(30px,4vw,42px)] text-black tracking-tight">
            <span className="font-['Playfair_Display',serif] italic font-medium">Tech</span> Stack
          </h2>
          <p className="mt-3 font-['Manrope',sans-serif] font-medium text-[18px] text-black/60 max-w-xl mx-auto">
            The tools and technologies used in this research.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 py-8">
          <TechIcon label="React">
            <ReactIcon />
          </TechIcon>
          <TechIcon label="TypeScript">
            <TypeScriptIcon />
          </TechIcon>
          <TechIcon label="JavaScript">
            <JavaScriptIcon />
          </TechIcon>
          <TechIcon label="Python">
            <PythonIcon />
          </TechIcon>
          <TechIcon label="Github">
            <GithubIcon />
          </TechIcon>
          <TechIcon label="Figma">
            <FigmaIcon />
          </TechIcon>
          <TechIcon label="Colab">
            <ColabIcon />
          </TechIcon>
          <TechIcon label="Google Sheets">
            <GSheetsIcon />
          </TechIcon>
          <TechIcon label="VS Code">
            <VSCodeIcon />
          </TechIcon>
          <TechIcon label="Google Docs">
            <GDocsIcon />
          </TechIcon>
          <TechIcon label="PowerPoint">
            <PowerPointIcon />
          </TechIcon>
          <TechIcon label="Kaggle">
            <KaggleIcon />
          </TechIcon>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="bg-white py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(30px,4vw,42px)] text-black tracking-tight">
          Research <span className="font-['Playfair_Display',serif] italic font-medium">Results</span>
        </h2>
        <p className="mt-3 font-['Manrope',sans-serif] font-medium text-[18px] text-black/60 max-w-xl mx-auto mb-12">
          Key findings derived from the collected data and subsequent analysis.
        </p>

        <p className="font-['Manrope',sans-serif] font-medium text-[clamp(24px,3vw,36px)] text-black mb-6">After Analysis</p>

        <div className="rounded-[16px] border border-[#503af2]/20 bg-[rgba(80,58,242,0.03)] h-40 sm:h-48 flex items-center justify-center px-4">
          <p className="font-['Manrope',sans-serif] text-black/30 text-[clamp(14px,2vw,18px)]">Analysis visualizations will be published here.</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(30px,4vw,42px)] text-black tracking-tight">
            Get in <span className="font-['Playfair_Display',serif] italic font-medium">Touch</span>
          </h2>
          <p className="mt-3 font-['Manrope',sans-serif] font-medium text-[18px] text-black/60 max-w-xl mx-auto">
            Have any questions about our research? We'd love to hear from you. Reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] text-black mb-2">Email</h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#6b7280]">research@insightify.com</p>
            </div>
            <div>
              <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] text-black mb-2">Address</h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#6b7280]">Varendra University<br />Rajshahi, Bangladesh</p>
            </div>

          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-[8px] border border-[#503af2]/20 bg-white focus:outline-none focus:border-[#503af2] transition-colors font-['Manrope',sans-serif] text-[16px]"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-[8px] border border-[#503af2]/20 bg-white focus:outline-none focus:border-[#503af2] transition-colors font-['Manrope',sans-serif] text-[16px]"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 rounded-[8px] border border-[#503af2]/20 bg-white focus:outline-none focus:border-[#503af2] transition-colors font-['Manrope',sans-serif] text-[16px] resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-[8px] text-white font-['Manrope',sans-serif] font-semibold text-[16px] transition-opacity hover:opacity-90"
                style={{ background: PRIMARY }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="assessment" className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-[12px] px-4 sm:px-8 py-12 sm:py-16 text-center flex flex-col items-center gap-6 sm:gap-8" style={{ background: "rgba(80,58,242,0.08)", border: `1px solid ${PRIMARY}` }}>
          <div className="flex flex-col gap-3">
            <h2 className="font-['Manrope',sans-serif] font-semibold text-[clamp(24px,4vw,52px)] text-black leading-tight">
              Start Mental Health Assessment
            </h2>
            <p className="font-['Manrope',sans-serif] font-medium text-[clamp(14px,2vw,18px)] text-black/70">Completion time: less than 2 minutes.</p>
          </div>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-[8px] text-white font-['Manrope',sans-serif] font-semibold text-[clamp(14px,2vw,18px)] transition-opacity hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            Start Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white overflow-hidden pt-0 pb-0 relative w-full">
      <div className="text-center select-none pointer-events-none overflow-hidden w-full h-full flex items-center justify-center">
        <img 
          src={footerLogo} 
          alt="Insightify Logo" 
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ResearchTeamSection />
      <WorkflowSection />
      <FieldworkSection />
      <TechStackSection />
      <ResultsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
