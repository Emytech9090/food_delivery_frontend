import { useEffect, useState, useRef } from "react";
const Student = ({ students }: { students: string[] }) => {
  const [studentList, setStudentList] = useState(students);
  const [nameInput, setNameInput] = useState("");
  const onButtonClick = () => {
    // setStudentList((prev)=>prev+1);
    setStudentList((prev) => [...prev, nameInput]);
    setNameInput("");
  };
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    
  }, []);
  const onHandleModal = (visibility: string) => {
    if (!modalRef.current) return;
    modalRef.current.style.display = visibility;
  };
  return (
    <div className="bg-gray-100 h-screen px-10 py-10 flex items-center justify-center flex-col ">
      <div className="flex my-2 gap-x-2">
        <button
          className="bg-red-700 px-2 py-2 rounded-full text-white capitalize font-semibold hover:bg-red-500"
          onClick={() => onHandleModal("none")}
        >
          close
        </button>
        <button
          className="bg-blue-700 px-2 py-2 rounded-full text-white capitalize font-semibold hover:bg-blue-500"
          onClick={() => onHandleModal("flex")}
        >
          open
        </button>
      </div>
      <div
        ref={modalRef}
        className="bg-white w-md px-5 py-5 rounded-lg shadow-lg space-y-3 flex-col "
      >
        <div className="pl-5">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
        </div>

        <input
          className="h-12 w-full outline-2 rounded-full px-4 placeholder:text-gray-500"
          placeholder="name here..."
          name="name"
          type="text"
          id="name"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <div className="flex gap-x-2">
          {studentList.map((student) => (
            <h3
              key={student}
              className="bg-gray-200 px-2 py-1 rounded-full text-xs"
            >
              {student}
            </h3>
          ))}
        </div>
        <button
          className="bg-blue-700 px-2 py-2 rounded-full text-white capitalize font-semibold hover:bg-blue-500"
          onClick={onButtonClick}
        >
          add student
        </button>
      </div>
    </div>
  );
};
export default Student;
