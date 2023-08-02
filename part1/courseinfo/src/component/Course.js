const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total course={course} total={course.parts} />
        </div>
      ))}
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Total = (props) => {
  // Calculate the total sum of exercises using reduce
  const totalExercises = props.total.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

export default Course;
