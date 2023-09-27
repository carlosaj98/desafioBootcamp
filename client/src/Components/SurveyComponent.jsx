import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import MobileStepper from "@mui/material/MobileStepper";
import "survey-core/defaultV2.min.css";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import { themeJson } from "../theme";
import { useNavigate } from "react-router-dom";


function SurveyComponent({
  data,
  maxSteps,
  activeStep,
  onNext,
  onBack,
  allResults
}) {
  // console.log(allResults);
  const survey = new Model(data);
  const theme = useTheme();
  const navigate = useNavigate()

  // You can delete the line below if you do not use a customized theme

  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    const result = sender.data["Me considero una persona…"].join("");
    onNext(result);
  });

  survey.onValueChanged.add((sender, options) => {
    const container = document.querySelector(".sv-ranking__container.sv-ranking__container--to");
    if (container) {
      const items = container.getElementsByClassName("sv-ranking-item__index");
      Array.from(items).forEach((item, index) => {
        item.innerHTML = items.length - index;
      });
    }
  });


  const dataHardcode = {
    client_id: 533,
    survey_id: 2113,
    data_all: ""
  };

  const isLastStep = activeStep === maxSteps - 1;

  return (
    <>
      <Survey
        model={survey}
        showNavigationButtons="none"
        choicesOrder="one"
        allResults

      />

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}

        nextButton={
          <Button
            size="large"
            onClick={() => {
              if (isLastStep) {
                survey.completeLastPage();
                //Ir a pagina de registro
                navigate("/register", { replace: true })
                // fetch();
                dataHardcode.data_all =
                  allResults +
                  "999999999999999999999999999999999999999999999999999999999999999999999999";
              } else {
                survey.completeLastPage();
              }
            }}
            disabled={false}
          >
            {isLastStep ? "Enviar" : "Next"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={onBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}

export default SurveyComponent;
