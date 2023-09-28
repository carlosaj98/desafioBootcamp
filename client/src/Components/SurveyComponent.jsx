import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import MobileStepper from "@mui/material/MobileStepper";
import "survey-core/defaultV2.min.css";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { themeJson } from "../theme";
import { useNavigate } from "react-router-dom";
import { isScreenWideEnough } from "../Data/json";

function SurveyComponent({
  data,
  maxSteps,
  activeStep,
  onNext,
  onBack,
  allResults,
}) {
  const survey = new Model(data);

  const stepData = localStorage
    .getItem("allResults")
    ?.split("")
    .slice(activeStep * 6, activeStep * 6 + 6);

  if (stepData) {
    survey.data = {
      [data.elements[activeStep]]: [1, 2, 6, 5, 4, 3],
    };
  }

  const theme = useTheme();
  const navigate = useNavigate();

  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    const result = sender.data["Me considero una persona…"].join("");
    onNext(result);
  });

  survey.onValueChanged.add((sender, options) => {
    if (!isScreenWideEnough()) return;

    const container = document.querySelector(
      ".sv-ranking__container.sv-ranking__container--to"
    );
    if (container) {
      const items = container.getElementsByClassName("sv-ranking-item__index");
      Array.from(items).forEach((item, index) => {
        item.innerHTML = items.length - index;
      });
    }
  });

  survey.onValueChanged.add((sender, options) => {
    setTimeout(() => {
      if (isScreenWideEnough()) return;
      const container = sender.rootElement.querySelectorAll(
        ".sv-ranking-item__index.sd-ranking-item__index"
      );
      container.forEach((item, index) => {
        item.innerText = container.length - index;
      });
    }, 0);
  });

  const dataHardcode = {
    client_id: 533,
    survey_id: 2113,
    data_all: "",
  };

  const isLastStep = activeStep === maxSteps - 1;

  const [open, setOpen] = React.useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <>
      <Button onClick={modalOpen} sx={{ marginLeft: "auto", display: "block"  }}>Instrucciones Encuesta</Button>
      <Modal open={open} onClose={modalClose} sx={modalStyle}>
        <Box sx={modalBoxStyle}>
          <Typography variant="h5" sx={{marginBottom:"10px"}}>Instrucciones</Typography>
          <Typography variant="body1" sx={{marginBottom:"10px"}}>1.Ordena de Mayor a Menor, segun tu preferencia (Siendo 6 la puntuacion mas alta).</Typography>
          <Typography variant="body1" sx={{marginBottom:"10px"}}>2.Para ordenar manten pulsada la opcion y arrastrala hasta su posición.</Typography>
          <Typography variant="body1" sx={{marginBottom:"10px"}}>3.Tienes que marcar las 6 opciones obligatoriamente.</Typography>
          <Button onClick={modalClose} sx={{marginLeft:"80%"}}>Cerrar</Button>
        </Box>
      </Modal>
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
                navigate("/register", { replace: true });
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

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalBoxStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  
};

export default SurveyComponent;

