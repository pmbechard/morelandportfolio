import Tab from "../Tab";

const Home = () => {
  return (
    <div id="content">
      <h2>About Me</h2>
      <p>
        <Tab />
        Mentorship, technology, critical thought, and practical problem-solving
        are key areas of focus that have permeated my diverse background, which
        spans the humanities, risk management, computer science, and education.
        These practices have come to fruition through positions in project
        management, education and educational leadership, software engineering,
        and daily life, where I have consistently identified inefficiencies and
        shortcomings and solved them with innovative, tailored software
        solutions. I am continuing to expand these skills by simultaneously
        pursuing a Master of Science in Computer Science (AI) and a teaching
        certification - two fields which I strongly believe need to be addressed
        in parallel in today's climate - to bridge technology and pedagogy and
        create sensible, accessible, engaging, and future-proof learning
        environments at scale.
      </p>
      <br />
      <h2>About this Site</h2>
      <p>
        <Tab />
        This site was developed by Peyton Bechard using TypeScript and React,
        and was inspired by a mash of retro, brutalist, and pop art styles of
        web design. The site was built as a part of the participation in the
        TEACH-NOW Teacher Certification Program at Moreland University, and more
        content will be added as progression is made in the program. The code is
        open-source and can be viewed on GitHub at{" "}
        <a href="https://github.com/pmbechard/morelandportfolio">this link</a>.
        It is hosted using GitHub Pages.
      </p>
    </div>
  );
};

export default Home;
