import merrillsImage from "../../assets/merrill.png";

const ClinicalPractice = () => {
  return (
    <div id="content">
      <h2>Clinical Practice</h2>
      <h3>
        A Visual Representation of Merrill's Principles of Instruction in the
        Context of Secondary Computer Science
      </h3>
      <img src={merrillsImage} alt="Merrill's Principles of Instruction" />
      <small>
        DeltaWorks. (2022, January 1). <em>School Study Education.</em> Pixabay.
        Retrieved November 18, 2025, from
        https://pixabay.com/photos/school-study-education-desk-6900381/.
      </small>
      <small>
        Pappas, C. (2023, September 13).{" "}
        <em>Merrill's principles of instruction: The definitive guide.</em>{" "}
        eLearning Industry.
        https://elearningindustry.com/merrills-principles-instruction-definitive-guide
      </small>
      <small>
        The University of Iowa. (2017, September 29).{" "}
        <em>Merrill's principles of instruction (MPI).</em> Current Students -
        Tippie College of Business.
        https://students.tippie.uiowa.edu/tippie-resources/technology/instructional-design/models/merrill
      </small>
    </div>
  );
};

export default ClinicalPractice;
