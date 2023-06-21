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

const AggiungiPilota: React.FC = () => {
  const [input, setInput] = useState({
    Pilota: "",
    Nazionalita: "",
    Eta: 18,
    Team: "",
    Punti: 0,
    Bahrain: "",
    Arabia_Saudita: "",
    Australia: "",
    Imola: "",
    Miami: "",
    Spagna: "",
    Monaco: "",
    Azerbagian: "",
    Canada: "",
    Gran_Bretagna: "",
    Austria: "",
    Francia: "",
    Ungheria: "",
    Belgio: "",
    Olanda: "",
    Italia: "",
    Singapore: "",
    Giappone: "",
    Stati_Uniti: "",
    Messico: "",
    Brasile: "",
    Abu_Dhabi: "",
  });

  const [inputError, setInputError] = useState({
    Pilota: { isError: false, message: "" },
    Nazionalita: { isError: false, message: "" },
    Team: { isError: false, message: "" },
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
          <div className="flex flex-col items-center h-[100%] w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 justify-between lg:mt-14 mb-10 lg:mb-0">
            <div className="flex flex-col item-center justify-center">
              <img src={logo} width={100} height={100} />
            </div>
            <p className="font-body text-white font-bold text-3xl pb-10">
              Inserisci Pilota
            </p>
            <div className="flex flex-col justify-center items-center w-full h-[100%] lg:mb-10">
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Pilota
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Pilota"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Pilota: event.target.value });
                      }}
                    />
                  </InputGroup>
                  <p className="font-body text-base 2xl:text-lg text-red-700">
                    {inputError.Pilota.isError && inputError.Pilota.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Nazionalità
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Nazionalità"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Nazionalita: event.target.value });
                      }}
                    />
                  </InputGroup>
                  <p className="font-body text-base 2xl:text-lg text-red-700">
                    {inputError.Nazionalita.isError &&
                      inputError.Nazionalita.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Età
                  </p>
                  <NumberInput
                    defaultValue={18}
                    min={18}
                    max={99}
                    placeholder="Età"
                    bg="white"
                    focusBorderColor="#C01EE1"
                    className="rounded-lg"
                    onChange={(event) => {
                      setInput({ ...input, Eta: parseInt(event) });
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
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Team
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Team"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Team: event.target.value });
                      }}
                    />
                  </InputGroup>
                  <p className="font-body text-base 2xl:text-lg text-red-700">
                    {inputError.Team.isError && inputError.Team.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Punti
                  </p>
                  <NumberInput
                    defaultValue={0}
                    min={0}
                    max={2000}
                    placeholder="Punti"
                    bg="white"
                    focusBorderColor="#C01EE1"
                    className="rounded-lg"
                    onChange={(event) => {
                      setInput({ ...input, Punti: parseInt(event) });
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
                    Bahrain
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Bahrain"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Bahrain: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Arabia Saudita
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Arabia Saudita"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({
                          ...input,
                          Arabia_Saudita: event.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Australia
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Australia"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Australia: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Imola
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Imola"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Imola: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Miami
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Miami"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Miami: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Spagna
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Spagna"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Spagna: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Monaco
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Monaco"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Monaco: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Azerbagian
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Azerbagian"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Azerbagian: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Canada
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Canada"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Canada: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Gran Bretagna
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Gran Bretagna"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({
                          ...input,
                          Gran_Bretagna: event.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Austria
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Austria"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Austria: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Francia
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Francia"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Francia: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Ungheria
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Ungheria"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Ungheria: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Belgio
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Belgio"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Belgio: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Olanda
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Olanda"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Olanda: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Italia
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Italia"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Italia: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mb-2 lg:mb-0">
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%] mb-2 lg:mb-0">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Singapore
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Singapore"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Singapore: event.target.value });
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-[75%] lg:w-[25%]">
                  <p className="font-body text-lg 2xl:text-xl text-white">
                    Giappone
                  </p>
                  <InputGroup className="w-[100%]">
                    <Input
                      placeholder="Giappone"
                      bg="white"
                      focusBorderColor="#C01EE1"
                      onChange={(event) => {
                        setInput({ ...input, Giappone: event.target.value });
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
                  Pilota: { isError: false, message: "" },
                  Nazionalita: { isError: false, message: "" },
                  Team: { isError: false, message: "" },
                };
                if (
                  input.Pilota.trim() != "" &&
                  /^[A-Z]{3}$/.test(input.Nazionalita) &&
                  input.Team.trim() != ""
                ) {
                  console.log("sono qui");
                  await axios
                    .post("/inserisci_pilota", { pilota: input })
                    .then(() => {
                      console.log("sono nel then");
                      navigate("/");
                    })
                    .catch(() => {
                      console.log("sono nell'er");
                      inputError.Pilota = {
                        isError: true,
                        message: "Esiste già un pilota con questo nome",
                      };
                    });
                } else if (input.Pilota.trim() === "") {
                  inputError.Pilota = {
                    isError: true,
                    message: "Il campo non può essere vuoto",
                  };
                } else if (!/^[A-Za-z]{3}$/.test(input.Nazionalita.trim())) {
                  inputError.Nazionalita = {
                    isError: true,
                    message: "Il campo deve contenere 3 lettere maiuscole",
                  };
                } else if (input.Team.trim() === "") {
                  inputError.Team = {
                    isError: true,
                    message: "Il campo non può essere vuoto",
                  };
                }
                setInputError(inputError);
              }}
            >
              INSERISCI PILOTA
            </Button>
            <div className="flex justify-center items-center lg:mt-6 w-full">
              <p
                className="font-body text-base xl:text-lg 2xl:text-xl text-center text-white cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/");
                }}
              >
                Torna alla lista piloti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AggiungiPilota;
