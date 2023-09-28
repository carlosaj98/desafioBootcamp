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
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SurveyComponent2({ data, maxSteps, activeStep, onNext, onBack }) {
  const [allResults, setAllResults] = React.useState("");
  const navigate = useNavigate();
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

  const survey = new Model(data);
  const theme = useTheme();

  // You can delete the line below if you do not use a customized theme

  survey.applyTheme(themeJson);
  survey.onComplete.add(async (sender, options) => {
    const data_user = JSON.stringify(sender.data, null, 3);
    //Hacer el post para el registro y obtener el id(survey_id)
    const data_user_obj = JSON.parse(data_user);
    const email = data_user_obj.email;

    const data_user_post = {
      client_id: "533",
      email: email,
    };
    console.log(data_user_post);

    const apiUrl = `https://culturalfit.es/api/store-client?client_id=533&email=${encodeURIComponent(
      email
    )}`;
    console.log(apiUrl);

    try {
      const response = await axios.post(apiUrl);
      console.log("Respuesta de la API:", response.data.message);

      const localStorageData = localStorage.getItem("allResults");

      // Segundo post (store-result)
      const data_result_post = {
        client_id: 533,
        survey_id: response.data.message.id,
        data_all:
          localStorageData +
          "999999999999999999999999999999999999999999999999999999999999999999999999999999",
      };
      console.log(data_result_post);

      const secondApiUrl = `https://culturalfit.es/api/store-result?client_id=533&survey_id=${
        data_result_post.survey_id
      }&data_all=${encodeURIComponent(data_result_post.data_all)}`;
      const secondResponse = await axios.post(secondApiUrl);
      console.log(
        "Respuesta del segundo POST:",
        secondResponse.data.message.token
      );
      //Aqui necesito almacenar en localstorage la data de token
      const token = secondResponse.data.message.token;

      // Almacena el token en localStorage
      localStorage.setItem("token", token);
      navigate("/result", { replace: true });
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  });
  const isLastStep = activeStep === maxSteps - 1;
  return (
    <>
      <Survey
        model={survey}
        showNavigationButtons="none"
        choicesOrder="one"
        sx={{ background: "red" }}
      />

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        data_user
        nextButton={
          <Button
            size="large"
            onClick={() => {
              if (isLastStep) {
                survey.completeLastPage();

                // Primer post para conseguir el id
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
      />
    </>
  );
}

export default SurveyComponent2;
