// Definimos y exportamos los nombres de los entrenadores para poder reutilizarlos
export const COACHES = {
  MATILLA: "Ivan Matilla",
  CABEZUELO: "Àngel Cabezuelo",
  GOMEZ: "Àngel Gómez",
};

// Exportamos el array del horario
export const schedule = [
  {
    day: "Lunes",
    classes: [
      { time: "09:00 - 10:00", name: "Adults BJJ", coach: COACHES.MATILLA },
      { time: "11:00 - 12:00", name: "MMA", coach: COACHES.MATILLA },
      { time: "18:00 - 19:00", name: "Adults BJJ", coach: COACHES.CABEZUELO },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "09:00 - 10:00", name: "Adults NoGi", coach: COACHES.GOMEZ },
      { time: "16:00 - 17:15", name: "MMA", coach: COACHES.GOMEZ },
      { time: "17:30 - 18:30", name: "Kids BJJ", coach: COACHES.GOMEZ },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "09:00 - 10:00", name: "Adults BJJ", coach: COACHES.MATILLA },
      { time: "11:00 - 12:00", name: "MMA", coach: COACHES.MATILLA },
      { time: "18:00 - 19:00", name: "Adults BJJ", coach: COACHES.CABEZUELO },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { time: "09:00 - 10:00", name: "Adults NoGi", coach: COACHES.GOMEZ },
      { time: "16:00 - 17:15", name: "MMA", coach: COACHES.GOMEZ },
      { time: "17:30 - 18:30", name: "Kids BJJ", coach: COACHES.GOMEZ },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { time: "09:00 - 10:00", name: "Adults BJJ", coach: COACHES.MATILLA },
      { time: "11:00 - 12:00", name: "MMA", coach: COACHES.MATILLA },
      { time: "18:00 - 19:00", name: "Adults BJJ", coach: COACHES.CABEZUELO },
    ],
  },
];