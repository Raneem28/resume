import React from "react";
import img from "../assets/image.jpg";
export function Intro() {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "20px", gap: "20px" }}>
      {/* Sidebar Section */}
      <div
        className="sidebar"
        style={{
          width: "40%",
          backgroundColor: "pink",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={img}
            alt="Profile"
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
          <h2 style={{ margin: "15px 0", fontSize: "1.5rem" }}>RANEEM SULTAN</h2>
          <p style={{ fontSize: "1rem", color: "#6c757d" }}>
            Student (BS Artificial Intelligence - 3rd Semester)
          </p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>CONTACT INFO</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li>+92-345-8835299</li>
            <li>sultanraneem6g1@gmail.com</li>
            <li>Islamabad, Pakistan</li>
            <li><a href="https://www.linkedin.com/in/raneem-sultan-70bab9291/" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>Linkedin</a></li>
            <li><a href="https://github.com/Raneem28"  target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>Github</a></li>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>EDUCATION</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>2023-Present</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>Bachelor's Degree in Artificial Intelligence</strong>
                <br />
                Ghulam Ishaq Khan Institute, Topi, Swabi
              </p>
            </li>
            <li>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>2022-2023</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>HSSC</strong>
                <br />
                Army Public School and College, Hamayun Road, Rawalpindi
              </p>
            </li>
            <li>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>2020-2021</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>SSC</strong>
                <br />
                Fauji Foundation College for Girls, Rawalpindi
              </p>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>Languages</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li>English</li>
            <li>Urdu</li>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>Hobbies</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li>Reading</li>
            <li>Baking</li>
            <li>Coding</li>
          </ul>
        </div>
      </div>

      {/* Right Side Section */}
      <div
        className="Rightside"
        style={{
          width: "60%",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>PROFILE</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            I'm a second-year Artificial Intelligence student at Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) in Pakistan, with a deep passion for technology and a strong desire to learn. During my first year, I built a solid foundation in C++, and I used my summer vacation to independently learn HTML, CSS, JavaScript, and React. I’ve also completed a Python course and am always eager to explore new tools and technologies. Alongside my studies, I’m a dedicated math teacher on Preply, where I enjoy helping students reach their full potential. I’m excited to keep expanding my knowledge and applying it to real-world projects.
          </p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>EXPERIENCE & PROJECTS</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li><strong>Intern at Quant Data Solutions (August 2024):</strong> Gained valuable experience working on real time project.</li>
            <li><strong>Math Teacher on Preply:</strong> Currently teaching mathematics online, helping students improve their skills and achieve academic success.</li>
            <li><strong>Online Travel Agency Project (C++):</strong> Developed an online travel agency system utilizing Object-Oriented Programming principles in C++.</li>
            <li><strong>Simple Calculator (React.js):</strong> Designed and implemented a simple calculator application using React.js, showcasing my understanding of React components and state management.</li>
            <li><strong>Weather App (React.js):</strong> Developed a weather application using React.js that fetches real-time data and presents it in a user-friendly interface.</li>
            <li><strong>Responsive Website - "Software Company" (React.js):</strong> Built a fully responsive website for a fictional software company using React.js, demonstrating my ability to create professional and adaptable web layouts.</li>
            <li><strong>Figma Project (TALKHUB):</strong> Designed a chat system in Figma.</li>
          </ul>
        </div>
        <div>
          <h2 style={{ borderBottom: "2px solid #6c757d", paddingBottom: "5px" }}>PROFESSIONAL SKILLS</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c757d ", paddingBottom: "5px" }}>CERTIFICATES</h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "10px 0" }}>
            <li>
              <a href="https://coursera.org/share/0074ac3cd9b2df92d4ab7207a4c9cc59" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
                Coursera Python Certificate
              </a>
            </li>
            <li>
                <a href="https://coursera.org/share/7cd488b68f4312f277a7452a1c35e28a" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
                Coursera Canva Certificate
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
