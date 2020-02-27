import React from "react";
import Select from "react-select";
import "../styles/sectionSelector.css";
import { getAllSectionsForCourse } from "../Utils/utils";

const SectionSelector = props => {
  const secList = getAllSectionsForCourse(props.currCourse, props.coursesList);

  if (props.newSectionEntered) {
    secList.unshift({
      value: props.newSectionName,
      label: props.newSectionName
    });
  }

  const selectSection = selectedOption => {
    props.handleSelectSection(selectedOption.label);
  };

  return (
    <Select
      className="sectionSelector"
      onChange={selectSection}
      options={secList}
      placeholder="Select a Section"
    />
  );
};

export default SectionSelector;
