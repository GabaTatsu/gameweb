import "./style.css";
import { useEffect, useState } from "react";
import greenSounds from "../../assets/sounds/simon/sounds_1.mp3";
import redSounds from "../../assets/sounds/simon/sounds_2.mp3";
import yellowSounds from "../../assets/sounds/simon/sounds_3.mp3";
import blueSounds from "../../assets/sounds/simon/sounds_4.mp3";
import errorSounds from "../../assets/sounds/simon/sounds_error.wav";

const SimonSays = () => {
  const greenSound = new Audio(greenSounds);
  const redSound = new Audio(redSounds);
  const yellowSound = new Audio(yellowSounds);
  const blueSound = new Audio(blueSounds);
  const errorSound = new Audio(errorSounds);
  const [disableStartButton, setDisableStartButton] = useState(false);
  const [listen, setListen] = useState("");
  const [round, setRound] = useState(1);
  const [classNameRed, setClassNameRed] = useState("");
  const [classNameYellow, setClassNameYellow] = useState("");
  const [classNameBlue, setClassNameBlue] = useState("");
  const [classNameGreen, setClassNameGreen] = useState("");
  const [blockedButtons, setBlockedButtons] = useState(true);
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [numeroRondas, setNumeroRondas] = useState(4);
  const [speed, setSpeed] = useState(1000);
  const totalRondas = 10;

  useEffect(() => {
    setSequence([]);
    const createSequence = () => {
      for (let i = 0; i < numeroRondas; i++) {
        setSequence((current) => [...current, Math.floor(Math.random() * 4)]);
      }
    };
    createSequence();
  }, [numeroRondas]);

  const showSequence = () => {
    let sequenceIndex = 0;
    let timer = setInterval(() => {
      selectShowColor(sequence[sequenceIndex]);
      sequenceIndex++;
      setTimeout(() => {
        setClassNameRed("");
        setClassNameYellow("");
        setClassNameBlue("");
        setClassNameGreen("");
      }, speed / 1.1);
      if (sequenceIndex >= numeroRondas) {
        clearInterval(timer);
        setBlockedButtons(false);
        setListen("YOUR TURN");
        setUserSequence([]);
      }
    }, 1000);
  };

  const selectShowColor = (num) => {
    if (num === 0) {
      setClassNameRed("redbright");
      redSound.play();
    }
    if (num === 1) {
      setClassNameYellow("yellowbright");
      yellowSound.play();
    }
    if (num === 2) {
      setClassNameBlue("bluebright");
      blueSound.play();
    }
    if (num === 3) {
      setClassNameGreen("greenbright");
      greenSound.play();
    }
  };

  const createUserSequences = (num) => {
    if (blockedButtons !== true) {
      setUserSequence([...userSequence, num]);
    }
  };

  useEffect(() => {
    const compareSequences = () => {
      if (
        sequence[userSequence.length - 1] ===
        userSequence[userSequence.length - 1]
      ) {
        if (userSequence[userSequence.length - 1] === 0) {
          redSound.play();
        } else if (userSequence[userSequence.length - 1] === 1) {
          yellowSound.play();
        } else if (userSequence[userSequence.length - 1] === 2) {
          blueSound.play();
        } else if (userSequence[userSequence.length - 1] === 3) {
          greenSound.play();
        }
        if (sequence.length !== 0 && sequence.length === userSequence.length) {
          nextRound();
        }
      } else {
        errorSound.play();
        setListen("RESTART");
        setDisableStartButton(false);
        setRound(1);
        setBlockedButtons(true);
        setNumeroRondas(4);
        setUserSequence([]);
        setSpeed(1000);
      }
    };
    compareSequences();
  }, [userSequence]);

  const nextRound = () => {
    if (round === totalRondas) {
      setListen("YOU WIN");
      const winnerArray = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
      let winnerIndex = 0;
      let winner = setInterval(() => {
        selectShowColor(winnerArray[winnerIndex]);
        winnerIndex++;
        setTimeout(() => {
          setClassNameRed("");
          setClassNameYellow("");
          setClassNameBlue("");
          setClassNameGreen("");
        }, 200 / 1.1);
        if (winnerIndex === winnerArray.length) {
          clearInterval(winner);
        }
      }, 200);
    } else {
      setDisableStartButton(false);
      setListen("PRESS START");
      setRound(round + 1);
      setBlockedButtons(true);
      setUserSequence([]);
      setNumeroRondas(numeroRondas + 1);
      setSpeed(speed - 50);
    }
  };

  return (
    <div className="simon">
      <div className="buttonContainer">
        <div
          className="square red"
          onClick={() => {
            createUserSequences(0);
          }}
        ></div>
        <div
          className="square yellow"
          onClick={() => {
            createUserSequences(1);
          }}
        ></div>
        <div
          className="square blue"
          onClick={() => {
            createUserSequences(2);
          }}
        ></div>
        <div
          className="square green"
          onClick={() => {
            createUserSequences(3);
          }}
        ></div>
        <div className={classNameRed}></div>
        <div className={classNameYellow}></div>
        <div className={classNameBlue}></div>
        <div className={classNameGreen}></div>
        <div className="bloqueoCentro"></div>
        <div className="bloqueoEquina1"></div>
        <div className="bloqueoEquina2"></div>
        <div className="bloqueoEquina3"></div>
        <div className="bloqueoEquina4"></div>
      </div>
      <div id="listen">{listen}</div>
      <div id="round">Round:{round}</div>
      <button
        disabled={disableStartButton}
        id="startButton"
        onClick={() => {
          setDisableStartButton(true);
          setListen("LISTEN");
          showSequence();
        }}
      >
        Start
      </button>
    </div>
  );
};
export default SimonSays;
