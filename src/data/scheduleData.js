// Definimos y exportamos los nombres de los entrenadores para poder reutilizarlos
export const COACHES = {
  MATILLA: "Ivan Matilla",
  CABEZUELO: "Àngel Cabezuelo",
  GOMEZ: "Àngel Gómez",
};

// Exportamos el array del horario
// src/data/scheduleData.js

export const schedule = [
  {
    day: "Lunes",
    classes: [
      { time: "09:00", name: "BJJ" },
      { time: "11:00", name: "MMA" },
      { time: "18:00", name: "BJJ" },
      { time: "19:15", name: "MMA" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "17:00", name: "BJJ KIDS" },
      { time: "18:00", name: "NOGI" },
      { time: "19:15", name: "MMA" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "09:00", name: "BJJ" },
      { time: "11:00", name: "MMA" },
      { time: "18:00", name: "BJJ" },
      { time: "19:15", name: "MMA" },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { time: "16:45", name: "BJJ KIDS" },
      { time: "17:45", name: "NOGI (derribos)" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { time: "09:00", name: "BJJ" },
      { time: "11:00", name: "MMA" },
      { time: "18:00", name: "BJJ" },
    ],
  },
];