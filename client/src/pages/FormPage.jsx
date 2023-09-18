import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CssBaseline,
} from "@mui/material";

const questions = [
  {
    id: 1,
    text: "Me considero una persona…",
    options: ["Cercana", "Dinámica", "Orientada a resultados", "Formal", "Abierta al cambio", "Orientada al bienestar"],
  },
  {
    id: 2,
    text: "Me considero una persona…",
    options: ["Altruista", "Creativa", "Autoexigente", "Bien organizada", "Analítica", "Íntegra"],
  },
  {
    id: 3,
    text: "Me considero una persona…",
    options: ["Sociable", "Autónoma", "Competitiva", "Estable", "Cooperativa", "Transparente"],
  },
  {
    id: 4,
    text: "Me considero una persona…",
    options: ["Leal", "Innovadora", "Ganadora", "Responsable", "Comprensiva", "Respetuosa"],
  },
  {
    id: 5,
    text: "Me considero una persona…",
    options: ["Confiable", "Arriesgada", "Ambiciosa", "Perseverante", "Curiosa", "Plural"],
  },
  {
    id: 6,
    text: "Me considero una persona…",
    options: ["Comprometida", "Pionera", "Líder", "Eficiente", "Empática", "Pro Sostenibilidad"],
  },
];

function FormPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill([]));

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Si es la última pregunta, redirige a los resultados
      setCurrentQuestion(questions.length);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionClick = (optionIndex) => {
    const updatedAnswers = [...answers];
    const currentAnswer = [...updatedAnswers[currentQuestion]];

    // Si la opción ya está en la respuesta, quítala
    if (currentAnswer.includes(optionIndex)) {
      currentAnswer.splice(currentAnswer.indexOf(optionIndex), 1);
    } else {
      // Si la opción no está en la respuesta, agrégala al final
      currentAnswer.push(optionIndex);
    }

    updatedAnswers[currentQuestion] = currentAnswer;
    setAnswers(updatedAnswers);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div>
        {currentQuestion < questions.length && (
          <Typography variant="h5" gutterBottom>
            {`${currentQuestion + 1}/${questions.length}`}
          </Typography>
        )}
        {currentQuestion < questions.length && (
          <>
            <Typography variant="body1">{questions[currentQuestion].text}</Typography>
            <List>
              {questions[currentQuestion].options.map((option, index) => (
                <ListItem
                  key={option}
                  button
                  onClick={() => handleOptionClick(index)}
                  selected={answers[currentQuestion].includes(index)}
                >
                  <ListItemText primary={option} />
                </ListItem>
              ))}
            </List>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Anterior
              </Button>
              {currentQuestion === questions.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextQuestion}
                >
                  Resultados
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === questions.length - 1}
                >
                  Siguiente
                </Button>
              )}
            </div>
          </>
        )}
        {/* Mostrar resultados al final */}
        {currentQuestion === questions.length && (
          <>
            <Typography variant="h6" gutterBottom>
              Resultados:
            </Typography>
            <ul>
              {answers.map((selectedOptions, index) => (
                <li key={questions[index].id}>
                  {`Pregunta ${index + 1}: ${selectedOptions
                    .map((optionIndex) => questions[index].options[optionIndex])
                    .join(", ")}`}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Container>
  );
}

export default FormPage;
