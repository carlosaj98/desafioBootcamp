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
  
  useEffect(() => {
    setAllResults((prevResults) => prevResults + newResult);
  }, [newResult]);
  
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

  
  //Logica boton Back
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setAllResults((prevResults) => {
      const updatedResults = prevResults.slice(0, -6); 
      return updatedResults;
    });
  };


  //LocalStorage
  useEffect(() => {
    const savedAllResults = localStorage.getItem("allResults");
    if (savedAllResults && savedAllResults.length !== 0) {
      setAllResults("");
    } else {
      setAllResults("");
    }
  }, []);

  // Cuando actualices allResults, también guárdalo en localStorage
  useEffect(() => {
    localStorage.setItem("allResults", allResults);
    
  }, [allResults]);

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto"}}>
      <img src="/logoCF_text.png" alt="Logo CulturaFit" />
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px"}}>
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