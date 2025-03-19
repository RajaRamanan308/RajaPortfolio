import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5 pb-5"
    >
      <div className="md:w-1/2 mt-10 flex justify-center">
        <img className="w-[300px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center items-center py-5">
        <div className="text-white">
          {/* flex flex-col */}
          <h1 className="text-4xl border-b-4 border-[#5551e3] mb-4 w-[133px] font-bold">
            Resume
          </h1>
          <p className="text-2xl ">Lorem ipsum dolor sit amet.</p>
          <p>
            {" "}
            <br />
            <a
              className="btn"
              href="https://drive.google.com/file/d/1GHi63B4L6ROl701Jt2PDOJNmBe7Ifqrw/view?usp=sharing"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
