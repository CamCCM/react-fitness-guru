import React from "react";
import "../Components/Sidebar.css";
import { useState, useEffect } from "react";
import "./Exercise.css";
import { TbArrowBackUp } from "react-icons/tb";

export default function Excercise() {
  const [exercise, setExercise] = useState("");
  const [items, setItems] = useState([]);
  const [inspectExercise, setInspectExercise] = useState(false);

  useEffect(() => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${exercise}`, {
      headers: {
        //"X-RapidAPI-Key": YOURKEYHERE,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [exercise]);

  function ExerciseInspect() {
    return (
      <div className="exercise-inspect">
        <div className="back-btn" onClick={() => setInspectExercise(false)}>
          <TbArrowBackUp className="arrow" />
          <span>Back</span>
        </div>
        <img src={inspectExercise.gifUrl} alt={inspectExercise.name}></img>
        <div className="inspected-txt">
          <div className="inspected-body-part">
            <label>Body Part: </label>
            <span>{inspectExercise.bodyPart}</span>
          </div>
          <div className="inspected-target">
            <label>Target Muscle: </label>
            <span>
              {inspectExercise.target.charAt(0).toUpperCase() +
                inspectExercise.target.slice(1)}
            </span>
          </div>
          <div className="inspected-equipment">
            <label>Equipment: </label>
            <span>
              {inspectExercise.equipment.charAt(0).toUpperCase() +
                inspectExercise.equipment.slice(1)}
            </span>
          </div>
          <div className="inspected-name">
            <label>Exercise: </label>
            <span>{inspectExercise.name}</span>
          </div>
        </div>
      </div>
    );
  }

  function TargetMuscles() {
    const data = [
      "Abductors",
      "Abs",
      "Adductors",
      "Biceps",
      "Calves",
      "Cardiovascular System",
      "Delts",
      "Forearms",
      "Glutes",
      "Hamstrings",
      "Lats",
      "Pectorals",
      "Quads",
      "Serratus Anterior",
      "Spine",
      "Traps",
      "Triceps",
      "Upper Back",
    ];

    return (
      <div className="sidebar">
        <ul className="sidebar-items">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="sidebar-item"
                onClick={(event) =>
                  setExercise(event.target.innerText.toLowerCase())
                }
              >
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  function DisplayExercises() {
    if (exercise.length < 1) {
      return "";
    } else {
      return (
        <div className="display-exercises">
          <ul className="exercise-items">
            {items.map((item, index) => {
              item.bodyPart =
                item.bodyPart.charAt(0).toUpperCase() + item.bodyPart.slice(1);
              item.name =
                item.name.charAt(0).toUpperCase() + item.name.slice(1);

              return (
                <li key={index} onClick={() => setInspectExercise(item)}>
                  <img src={item.gifUrl} alt={item.name}></img>
                  <div className="exercise-text">
                    <span className="body-part">{item.bodyPart}</span>
                    <span className="exercise-name">{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  return (
    <React.Fragment>
      {inspectExercise && <ExerciseInspect />}
      {!inspectExercise && <TargetMuscles />}
      {!inspectExercise && <DisplayExercises />}
    </React.Fragment>
  );
}
