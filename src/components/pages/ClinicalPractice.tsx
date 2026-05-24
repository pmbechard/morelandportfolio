import { Suspense } from "react";
import Loading from "../Loading";
import merrillsImage from "../../assets/merrill.webp";
import articleImg from "../../assets/article.png";
import confImg from "../../assets/conf.webp";
import cohImg from "../../assets/coh.jpg";
import tarImg from "../../assets/tar.webp";
import scavImg from "../../assets/scav.jpg";
import rubricImg from "../../assets/rubric.png";
import studentWorkImg from "../../assets/student-project.png";

const ClinicalPractice = () => {
  return (
    <div id="content">
      <h2>Clinical Practice</h2>
      <h3>
        A Visual Representation of Merrill's Principles of Instruction in the Context of Secondary Computer Science
      </h3>
      <Suspense fallback={<Loading />}>
        <img src={merrillsImage} alt="Merrill's Principles of Instruction" />
      </Suspense>
      <small>
        <strong>References</strong>
      </small>
      <small>
        DeltaWorks. (2022, January 1). <em>School Study Education.</em> Pixabay. Retrieved November 18, 2025, from
        https://pixabay.com/photos/school-study-education-desk-6900381/.
      </small>
      <small>
        Pappas, C. (2023, September 13). <em>Merrill's principles of instruction: The definitive guide.</em> eLearning
        Industry. https://elearningindustry.com/merrills-principles-instruction-definitive-guide
      </small>
      <small>
        The University of Iowa. (2017, September 29). <em>Merrill's principles of instruction (MPI).</em> Current
        Students - Tippie College of Business.
        https://students.tippie.uiowa.edu/tippie-resources/technology/instructional-design/models/merrill
      </small>
      <hr></hr>
      <h3>M8U9A1: Professional and Continuous Learning - Virtual Scavenger Hunt</h3>
      <p>
        <strong>
          Get academic: Share a recently published academic article or journal in your subject area that you would like
          to read and why.
        </strong>
        <img src={articleImg} alt="Academic article" />
        Interesting and important to be considering the future development of LLMs like ChatGPT as a user and as a
        teacher guiding students in their use.
        <br />
        <br />
        <strong>
          Develop professionally: Share an upcoming conference or academic event that you would like to participate in
          and why.
        </strong>
        <img src={confImg} alt="Conference" />
        Would like to learn more about how technology is being used at international schools in our region of the world.
        <br />
        <br />
        <strong>
          Build life skills: Host a scavenger hunt activity for your students on life skills or social-emotional
          learning and take a picture of items collected by students.
        </strong>
        <br />
        <img src={scavImg} alt="Scavenger hunt" />
        When asked to choose the animal that best represents their personality.
        <br />
        <br />
        <strong>
          Create awareness: Implement an activity with students to overcome any one stereotype towards culture,
          ethnicity, gender, or learning differences.
        </strong>
        <br />
        Ask students to get different AI image generators to create images of "tech workers" and discuss results.
        <br />
        <br />
        <strong>Create a memory: Take a picture with your cohort with any educational prop.</strong>
        <img src={cohImg} alt="Cohort" />
        <br />
        <br />
        <strong>
          Find common ground: Show pictures of a hobby or interest that you share with a teacher colleague at your
          school. (e.g. pictures of you and your colleague trekking)
        </strong>
        <img src={tarImg} alt="Tarantula" />
        <br />
        <br />
        <strong>
          Get social: Add a post on the Twitter hashtag #tncohort or on the Facebook Cohorts community page with one
          important thing you learned during your clinical practice.
        </strong>
        <br />
        No social media
        <br />
        <br />
        <strong>
          Share an achievement: Share the biggest learning challenge you faced in the program and how you overcame the
          challenge.
        </strong>
        <br />
        Taught myself programming and computer science from scratch, set a goal to get into Georgia Tech's online
        program, made a long-term study guide based on entry requirements, and stuck to it.
        <br />
        <br />
        <strong>Get personal: Share one professional ethic that you always live by.</strong>
        <br />
        There is balance in everything.
      </p>
      <hr />
      <h3>M8U12A3: Implementing Authentic and Performance Assessments</h3>
      <p>
        The Makerspace Project was successfully implemented as a culminating performance assessment that engaged
        students in authentic, hands-on problem solving. Students demonstrated strong engagement throughout the unit,
        particularly during the design and prototyping phases, where creativity and ownership of learning were most
        evident. Many students were excited to work on self-selected, real-world problems, which increased motivation
        and persistence. However, challenges arose around managing time, especially during iteration and revision
        stages, and some students initially struggled with unfamiliar digital tools and open-ended expectations. Despite
        these challenges, most students were able to produce meaningful solutions and articulate their design processes.
        <br />
        <img src={studentWorkImg} alt="Student Work" />
        To support student growth, I explicitly guided students in using the rubric for both self-assessment and peer
        feedback. Before major checkpoints, we unpacked rubric criteria together and discussed what A-level versus
        B-level mastery looked like in practice. Students used this shared understanding to evaluate their own progress
        and provide structured feedback to peers. This process helped students reflect more critically on their work and
        identify areas for improvement. Peer assessment also encouraged collaboration and exposure to diverse ideas,
        although some students required additional support to provide specific, constructive feedback rather than
        general comments. <br />
        In analyzing student achievement, students excelled in creativity, idea generation, and collaboration. Many
        demonstrated originality and were able to develop innovative ideas that addressed real-world constraints.
        However, some struggled with refining and evaluating their ideas, particularly in documenting their iterative
        process. These challenges likely stemmed from limited prior experience with iteration and metacognitive
        reflection. Students who exceeded expectations tended to engage more deeply in feedback cycles and were more
        willing to revise and improve their work multiple times. <br />
        <img src={rubricImg} alt="Rubric" />
        The rubric overall was effective in clearly outlining expectations and aligning with project goals, but it could
        be improved to better distinguish between levels of mastery. Some criteria were broad and may not have provided
        enough specificity to guide student improvement. In future iterations, I would refine performance descriptors
        with more concrete examples and expand A-level criteria to better capture higher-order thinking and innovation.
        This would increase the rubric's validity and provide clearer guidance for both assessment and learning. <br />
        Based on this reflection, two key improvements will be made. First, I will incorporate more structured
        checkpoints focused on iteration and reflection to better support students in refining their ideas over time.
        Second, I will provide targeted mini-lessons and guided practice on using specific digital tools earlier in the
        unit to reduce technology-related barriers and allow students to focus more on problem solving and innovation.
      </p>
    </div>
  );
};

export default ClinicalPractice;
