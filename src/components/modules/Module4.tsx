import vid from '../../assets/M4U4A2.mp4'

const Module4 = () => {
  return (
    <>
      <h2>U4A1: Positive Classroom Environments</h2>
      <h3>Nurturing Creativity in the Computer Science Classroom</h3>
      <p>
        Creativity is sometimes associated mainly with art or music, but it is also essential in computer science.
        Writing a program rarely involves only one correct path. Students must experiment, recognize patterns, make
        design decisions, and revise their ideas when something does not work. In my classroom, I can nurture creativity
        by giving students both the technical foundation and the freedom to develop original solutions.
        <br />
        One strategy I use is to provide open-ended challenges rather than prescribing every step. For example, after
        students learn the required programming concepts, I can ask them to design a game, interactive story, website,
        or application around a topic they care about. I can establish clear technical requirements while allowing
        students to choose the theme, appearance, features, and intended audience. This combination of structure and
        choice helps students meet learning objectives while expressing their interests and identities.
        <br />
        I can also nurture creativity by creating a classroom culture in which experimentation is encouraged and
        mistakes are treated as useful information. In computer science, debugging is a natural part of the creative
        process. When a program fails, students have an opportunity to investigate, revise, and try a different
        approach. Celebrating persistence and thoughtful revision helps students become more willing to take creative
        risks.
        <br />I can model creativity in at least two specific ways:
        <ol>
          <li>
            Think aloud while solving an unfamiliar problem. Rather than presenting only a polished solution, I can
            demonstrate how I brainstorm possibilities, test an idea, encounter an error, and adjust my approach. This
            shows students that creativity is a process and that teachers do not immediately know every answer.{" "}
          </li>
          <li>
            Create multiple versions of the same project. For example, I could demonstrate how one programming concept
            might be used to build a quiz, a simulation, or a simple game. I could then explain the creative decisions
            behind each version. This shows students that the same knowledge can produce very different outcomes.
          </li>
        </ol>
        Teacher modeling directly affects student engagement because students are more likely to experiment when they
        see their teacher doing the same. If I openly revise my work, respond positively to mistakes, and show
        enthusiasm for unusual ideas, I communicate that creativity is expected rather than merely permitted.
        <br />
        Finally, I can leverage students' creativity as a tool for communicating knowledge and making connections.
        Instead of relying only on traditional tests, I can invite students to demonstrate their understanding through
        visualizations, interactive programs, digital stories, animations, or short tutorial videos. For example,
        students might create an interactive model to explain an algorithm, design an infographic connecting programming
        concepts, or develop a simulation that applies computing to science, mathematics, or a real-world issue.
        Students can then present their work and explain why they made particular design choices.
        <br />
        These opportunities allow students to move beyond simply recalling information. They must organize their
        thinking, connect concepts, and communicate their understanding to an audience. By modeling the creative process
        and giving students meaningful opportunities to make choices, I can build a classroom in which creativity
        strengthens both engagement and academic learning.
      </p>
      <br />
      <h2>U4A2: Creating a Positive, Information-Intensive Environment</h2>
      <video width="560" height="315" src={vid} controls preload="metadata">
        Your browser does not support the video tag.
      </video>

    </>
  );
};

export default Module4;
