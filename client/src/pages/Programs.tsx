import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

const api = "http://localhost:3310/api/programs";

const fetchPrograms = async () => {
  try {
    const response = await fetch(api);
    const programs = await response.json();
    return programs;
  } catch (error) {
    console.error(error);
  }
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetchPrograms().then(setPrograms);
  }, []);

  return (
    <div>
      {programs.map((program) => (
        <div
          key={program.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h2>{program.title}</h2>
          <img
            src={program.poster}
            alt={`${program.title} poster`}
            style={{ width: "200px", height: "300px" }}
          />
          <p>
            <strong>Synopsis:</strong> {program.synopsis}
          </p>
          <p>
            <strong>Pays:</strong> {program.country}
          </p>
          <p>
            <strong>Année:</strong> {program.year}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Programs;
