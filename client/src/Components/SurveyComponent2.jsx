import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import { themeJson } from "../theme";

function SurveyComponent2({ data, maxSteps, activeStep, onNext, onBack }) {
  const [allResults, setAllResults] = React.useState("");

  React.useEffect(() => {
    // Cargar el valor inicial de allResults desde localStorage (si existe)
    const savedAllResults = localStorage.getItem("allResults");
    if (savedAllResults) {
      setAllResults(savedAllResults);
    }
  }, []);

  // Cuando actualices allResults, también guárdalo en localStorage
  React.useEffect(() => {
    localStorage.setItem("allResults", allResults);
    console.log(allResults, "SurveyComponet2");
  }, [allResults]);

  // console.log(allResults);
  const survey = new Model(data);
  const theme = useTheme();

  // You can delete the line below if you do not use a customized theme

  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  const dataHardcode = {
    client_id: 533,
    survey_id: 2113,
    data_all: ""
  };

  const isLastStep = activeStep === maxSteps - 1;

  // Utiliza un useEffect para imprimir allResults cuando cambie
  React.useEffect(() => {
    console.log("Envio de data", allResults);
  }, [allResults]);

  return (
    <>
      <Survey model={survey} showNavigationButtons="none" choicesOrder="one" />

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
                // fetch();
                dataHardcode.data_all =
                  allResults +
                  "999999999999999999999999999999999999999999999999999999999999999999999999";
                console.log(dataHardcode);

                // const apiUrl = `https://loving-germain.82-223-101-75.plesk.page/api/store-result?client_id=533&survey_id=2114&data_all=${encodeURIComponent(
                //   dataHardcode.data_all
                // )}`;
                // console.log(apiUrl);
                // // Realiza la solicitud GET a la API
                // fetch(apiUrl)
                //   .then((response) => response.json())
                //   .then((responseData) => {
                //     // Manejar la respuesta de la API aquí
                //     console.log("Respuesta de la API:", responseData);
                //   })
                //   .catch((error) => {
                //     // Manejar errores de la solicitud aquí
                //     console.error("Error al enviar datos:", error);
                //   });
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

export default SurveyComponent2;