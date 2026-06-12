import vid from "../../assets/M3U2A2 Video Compressed.mp4";
import infographic from "../../assets/M3U3A1 Infographic.png";

const Module3 = () => {
  return (
    <>
      <h2>M3U2A2: Understanding Multilingual Learners</h2>

      <video width="560" height="315" src={vid} controls preload="metadata">
        Your browser does not support the video tag.
      </video>

      <hr />
      <h2>M3U3A1: Technology Use in Education</h2>
      <img src={infographic} alt="Technology in Education Infographic" />
    </>
  );
};

export default Module3;
