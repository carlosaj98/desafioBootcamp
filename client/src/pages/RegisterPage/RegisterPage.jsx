import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";

import SurveyComponent2 from "../../Components/SurveyComponent2";
import { question2 } from "../../Data/json2";

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [newResult, setNewResult] = React.useState("");
  const [allResults, setAllResults] = React.useState(""); // Inicializar allResults con el valor de newResult

  useEffect(() => {
    setAllResults((prevResults) => prevResults + newResult);
  }, [newResult]);

  const maxSteps = question2.length;

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

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: "auto" }}>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h6" gutterBottom>
          Test Cultural
        </Typography>
        <SurveyComponent2
          data={question2[activeStep]}
          activeStep={activeStep}
          maxSteps={maxSteps}
          onNext={handleNext}
          onBack={handleBack}
          // allResults={allResults}
          // newResult={newResult}
          // setNewResult={setNewResult}
          // setAllResults={setAllResults}
        />
      </Paper>
    </Box>
  );
}