import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";

import SurveyComponent from "../../Components/SurveyComponent";
import { questions, questionsWideScreen, questionsNarrowScreen, isScreenWideEnough } from "../../Data/json";

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [newResult, setNewResult] = React.useState("");
  const [allResults, setAllResults] = React.useState(""); // Inicializar allResults con el valor de newResult
  console.log(allResults, "aqui esta");
  useEffect(() => {
    setAllResults((prevResults) => prevResults + newResult);
  }, [newResult]);
  console.log(isScreenWideEnough())
  const currentQuestions = isScreenWideEnough() ? questionsWideScreen : questionsNarrowScreen;
  const maxSteps = isScreenWideEnough() ? questionsWideScreen.length : questionsNarrowScreen.length;

  const handleNext = async (newResult) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setAllResults((prevResults) => {
      const updatedResults = prevResults + newResult;
      // Muestra el valor actualizado de newResult y allResults
      return updatedResults;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //LocalStorage
  // Cargar el valor inicial de allResults desde localStorage (si existe)
  useEffect(() => {
    const savedAllResults = localStorage.getItem("allResults");
    if (savedAllResults && savedAllResults.length !== 0) {
      setAllResults("");
      console.log(allResults, "otro");
    } else {
      // Si no hay un valor en localStorage, inicializa allResults a una cadena vacía
      setAllResults("");
    }
  }, []);

  // Cuando actualices allResults, también guárdalo en localStorage
  useEffect(() => {
    localStorage.setItem("allResults", allResults);
    console.log(allResults, "localstorage");
  }, [allResults]);

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto", marginTop:"100px"}}>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", background:"red"}}>
        <Typography variant="h6" gutterBottom>
          Test Cultural
        </Typography>
        <SurveyComponent
          data={currentQuestions[activeStep]}
          activeStep={activeStep}
          maxSteps={maxSteps}
          onNext={handleNext}
          onBack={handleBack}
          allResults={allResults}
          newResult={newResult}
          setNewResult={setNewResult}
          setAllResults={setAllResults}
        />
      </Paper>
    </Box>
  );
}