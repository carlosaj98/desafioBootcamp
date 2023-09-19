import React, { useState, useEffect  } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CssBaseline,
  Modal,
  Dialog,
  DialogTitle
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
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);


  useEffect(() => {
    const currentAnswer = answers[currentQuestion];
    if (currentAnswer && currentAnswer.length === questions[currentQuestion].options.length) {
      setIsNextButtonDisabled(false);
    } else {
      setIsNextButtonDisabled(true);
    }
  }, [currentQuestion, answers]);

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
  const cleanQuestion = () => {
    const updatedAnswers = [...answers];
    if (updatedAnswers[currentQuestion]) {
      updatedAnswers[currentQuestion] = [];
      setAnswers(updatedAnswers);
    }
  };
  const handleInstructionsModalOpen = () => {
    setIsInstructionsModalOpen(true);
  };

  const handleInstructionsModalClose = () => {
    setIsInstructionsModalOpen(false);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: "80px" }}>
      <CssBaseline />
      <div>
        {currentQuestion < questions.length && (
          <Typography variant="h5" gutterBottom sx={{ display: "flex", justifyContent: "right", gap: "35%" }}>
            {`${currentQuestion + 1}/${questions.length}`}
            <Button
              variant="contained"
              color="primary"
              onClick={handleInstructionsModalOpen}
              sx={{ marginLeft: "10px" }}
            >
              ?
            </Button>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Anterior
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={cleanQuestion}
              >
                Limpiar
              </Button>
              {currentQuestion === questions.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextQuestion}
                  disabled={isNextButtonDisabled}
                >
                  Resultados
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextQuestion}
                  disabled={isNextButtonDisabled}
                  
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
      <Modal
        open={isInstructionsModalOpen}
        onClose={handleInstructionsModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: "100vw" }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            gap: "10px"
          }}
        >
          <Typography variant="h6" id="modal-modal-title" gutterBottom>
            Instrucciones del Test
          </Typography>
          <ul variant="body1" id="modal-modal-description">
            <li>La primera opción que pulses recibe 6 puntos, y continúas en orden descendente hasta 1</li>
            <li>Puedes deshacer tu elección haciendo click sobre el término a cambiar</li>
            <li> Puedes deshacer todas tus respuestas de una pregunta haciendo click en el icono</li>
            <li>Puedes deshacer todas tus respuestas de una pregunta haciendo click en el icono</li>
            <li>Puedes volver a la pregunta anterior pulsando el icono</li>
            <li>Sólo puedes pasar a la siguiente pregunta cuando hayas puntuado todos los términos de la pantalla.</li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            onClick={handleInstructionsModalClose}
            sx={{ marginTop: "10px" }}
          >
            Cerrar
          </Button>
        </div>
      </Modal>
    </Container>
  );
}

export default FormPage;
