import { useState } from "react";

function Attendance() {
  const [count, setCount] = useState(0);

  function presentStudent() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function absentStudent() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetAttendance() {
    setCount(0);
  }

  return (
    <div>
      <h1>Present Students: {count}</h1>

      <button onClick={presentStudent}>
        Present +
      </button>

      <button onClick={absentStudent}>
        Absent -
      </button>

      <button onClick={resetAttendance}>
        Reset
      </button>

      <h2>
        {count === 10 ? "Class Full ✅" : "Seats Available"}
      </h2>
    </div>
  );
}

export default Attendance;