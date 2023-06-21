/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import axios from "axios";
import sfondo from "../public/images/sfondo.svg";
import { useNavigate } from "react-router-dom";
import logo from "../public/images/logo.svg";

const AggiungiCircuito: React.FC = () => {
  const [input, setInput] = useState({
    Round: 1,
    Circuito: "",
    Paese: "",
    Data: "",
    Lunghezza_Giro: 5000,
    Numero_Giri: 1,
    Lunghezza_Gara: 300000,
    Recorde_Vittorie: "",
    Pole_Position: "",
    Secondo_Posto: "",
    Terzo_Posto: "",
  });

  const [inputError, setInputError] = useState({
    Round: { isError: false, message: "" },
    Circuito: { isError: false, message: "" },
    Paese: { isError: false, message: "" },
  });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col justify-between items-center lg:h-screen w-full"
        style={{
          backgroundImage: `url(${sfondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full overflow-y-auto lg:mb-0">
          <div className="flex flex-col items-center h-[90%] w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 justify-between lg:mt-14 mb-10 lg:mb-0">
            <div className="flex flex-col item-center justify-center">
              <img src={logo} width={100} height={100} />
            </div>
            <p className="font-body text-white font-bold text-3xl pb-10">
              Inserisci Circuito
            </p>
            <div className="flex flex-col justify-center items-center w-full h-[100%] lg:mb-10">
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Round
                  </p>
                  <NumberInput
                    defaultValue={1}
                    min={1}
                    max={25}
                    placeholder="Round"
                    bg="white"
                    focusBorderColor="#C01EE1"
                    className="rounded-lg"
                    onChange={(event) => {
                      setInput({ ...input, Round: parseInt(event) });
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <p className="font-body text-base 2xl:text-lg text-red-700">
                    {inputError.Round.isError && inputError.Round.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Circuito
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Circuito"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Circuito: event.target.value });
                      }}
                    />
                  </InputGroup>
                  <p className="font-body text-base 2xl:text-lg text-red-700">
                    {inputError.Circuito.isError && inputError.Circuito.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Paese
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Paese"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Paese: event.target.value });
                      }}
                    />
                  </InputGroup>
                  <p className="font-body text-base 2xl:text-lg text-red-700">
                    {inputError.Paese.isError && inputError.Paese.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Data
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Data"
                      bg="white"
                      type="date"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Data: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Lunghezza Giro
                  </p>
                  <NumberInput
                    defaultValue={5000}
                    min={1}
                    max={10000}
                    placeholder="Lunghezza Giro"
                    bg="white"
                    focusBorderColor="#C01EE1"
                    className="rounded-lg"
                    onChange={(event) => {
                      setInput({ ...input, Lunghezza_Giro: parseInt(event) });
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Numero Giri
                  </p>
                  <NumberInput
                    defaultValue={1}
                    min={1}
                    max={100}
                    placeholder="Numero Giri"
                    bg="white"
                    focusBorderColor="#C01EE1"
                    className="rounded-lg"
                    onChange={(event) => {
                      setInput({ ...input, Numero_Giri: parseInt(event) });
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0 lg:ml-48">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Lunghezza Gara
                  </p>
                  <NumberInput
                    defaultValue={300000}
                    min={1}
                    max={310000}
                    placeholder="Lunghezza Gara"
                    bg="white"
                    focusBorderColor="#C01EE1"
                    onChange={(event) => {
                      setInput({ ...input, Lunghezza_Gara: parseInt(event) });
                    }}
                    className="rounded-lg"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] lg:mr-48">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Record Vittorie
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Record Vittorie"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({
                          ...input,
                          Recorde_Vittorie: event.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Pole Position
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Pole Position"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({
                          ...input,
                          Pole_Position: event.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Secondo Posto
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Secondo Posto"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({
                          ...input,
                          Secondo_Posto: event.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Terzo Posto
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Terzo Posto"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Terzo_Posto: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer mt-5 mb-4 lg:mt-0 lg:mb-0"
              colorScheme="brand"
              borderRadius={"80rem"}
              size="lg"
              _hover={{ bg: "#C01EE1" }}
              onClick={async () => {
                const inputError = {
                  Round: { isError: false, message: "" },
                  Circuito: { isError: false, message: "" },
                  Paese: { isError: false, message: "" },
                };

                if (input.Circuito.trim() != "" && input.Paese.trim() !== "") {
                  await axios
                    .post("/inserisci_circuito", {
                      circuito: input,
                    })
                    .then((res) => {
                      console.log("sono in res");

                      navigate("/");
                    })
                    .catch((err) => {
                      inputError.Round = {
                        isError: true,
                        message: "Round già presente",
                      };
                      setInputError(inputError);
                    });
                } else {
                  if (input.Circuito.trim() === "") {
                    inputError.Circuito = {
                      isError: true,
                      message: "Il campo non può essere vuoto",
                    };
                  } else if (input.Paese.trim() === "") {
                    inputError.Paese = {
                      isError: true,
                      message: "Il campo non può essere vuoto",
                    };
                  }
                }
                setInputError(inputError);
                console.log(inputError);
              }}
            >
              INSERISCI CIRCUITO
            </Button>
            <div className="flex justify-center items-center lg:mt-6 w-full">
              <p
                className="font-body text-base xl:text-lg 2xl:text-xl text-center text-white cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/");
                }}
              >
                Torna alla lista circuiti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AggiungiCircuito;
