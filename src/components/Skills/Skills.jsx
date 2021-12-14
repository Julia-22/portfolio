import './Skills.css';

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skills_description">
        <div className="hard_skills">
          <h3>Hard Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS: layouts, grids, flex, responsiveness</li>
            <li>SASS</li>
            <li>JavaScript (ES6+)</li>
            <li>React, react hooks</li>
            <li>Redux</li>
            <li>Consuming client API / AXIOS</li>
            <li>Experience using GitHub</li>
            <li>Figma</li>
            <li>English B1 (at the level of reading the documentation)</li>
          </ul>
        </div>

        <div className="education">
          <h3>Education</h3>
          <p>Bachelor of Computer Science<br/> Institute for Applied System Analysis of National Technical University of Ukraine ‘’Igor Sikorsky Kyiv Polytechnic Institute’’<br/> September 2017 - June 2021</p>
        </div>

        <div className="soft_skills">
          <h3>Soft Skills</h3>
          <ul>
            <li>Adaptability</li>
            <li>Self-management</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div> 
    </div>
    
  );
}