import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import sfondo from "../public/images/sfondo.svg";
import axios from "axios";
import { useNavigate } from "react-router";
import logo from "../public/images/logo.svg";

type Pilota = {
  Pilota: string;
  Nazionalita: string;
  Eta: string;
  Team: string;
  Punti: number;
  Bahrain: string;
  Arabia_Saudita: string;
  Australia: string;
  Imola: string;
  Miami: string;
  Spagna: string;
  Monaco: string;
  Azerbaigian: string;
  Canada: string;
  Gran_Bretagna: string;
  Austria: string;
  Francia: string;
  Ungheria: string;
  Belgio: string;
  Olanda: string;
  Italia: string;
  Singapore: string;
  Giappone: string;
  Stati_Uniti: string;
  Messico: string;
  Brasile: string;
  Abu_Dhabi: string;
  _id: string;
};

type Circuito = {
  Round: number;
  Circuito: string;
  Paese: string;
  Data: string;
  Lunghezza_Giro: number;
  Numero_Giri: number;
  Lunghezza_Gara: number;
  Recorde_Vittorie: string;
  Pole_Position: string;
  Vincitore: string;
  Secondo_Posto: string;
  Terzo_Posto: string;
  _id: string;
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const [piloti, setPiloti] = useState<Pilota[]>([]);
  const [circuiti, setCircuiti] = useState<Circuito[]>([]);

  const [selectPiloti, setSelectPiloti] = useState<[]>([]);
  const [sliderPunti, setSliderPunti] = useState([0, 100]);
  const [sliderLunghezzaGara, setSliderLunghezzaGara] = useState([0, 100]);
  const [sliderNumeroGiri, setSliderNumeroGiri] = useState([0, 100]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/piloti");
        const pilotiResponse = response.data.piloti.map(
          (pilota: {
            Pilota: any;
            Nazionalita: any;
            Eta: any;
            Team: any;
            Punti: any;
            Bahrain: any;
            Arabia_Saudita: any;
            Australia: any;
            Imola: any;
            Miami: any;
            Spagna: any;
            Monaco: any;
            Azerbaigian: any;
            Canada: any;
            Gran_Bretagna: any;
            Austria: any;
            Francia: any;
            Ungheria: any;
            Belgio: any;
            Olanda: any;
            Italia: any;
            Singapore: any;
            Giappone: any;
            Stati_Uniti: any;
            Messico: any;
            Brasile: any;
            Abu_Dhabi: any;
            _id: any;
          }) => ({
            Pilota: pilota.Pilota,
            Nazionalita: pilota.Nazionalita,
            Eta: pilota.Eta,
            Team: pilota.Team,
            Punti: pilota.Punti,
            Bahrain: pilota.Bahrain,
            Arabia_Saudita: pilota.Arabia_Saudita,
            Australia: pilota.Australia,
            Imola: pilota.Imola,
            Miami: pilota.Miami,
            Spagna: pilota.Spagna,
            Monaco: pilota.Monaco,
            Azerbaigian: pilota.Azerbaigian,
            Canada: pilota.Canada,
            Gran_Bretagna: pilota.Gran_Bretagna,
            Austria: pilota.Austria,
            Francia: pilota.Francia,
            Ungheria: pilota.Ungheria,
            Belgio: pilota.Belgio,
            Olanda: pilota.Olanda,
            Italia: pilota.Italia,
            Singapore: pilota.Singapore,
            Giappone: pilota.Giappone,
            Stati_Uniti: pilota.Stati_Uniti,
            Messico: pilota.Messico,
            Brasile: pilota.Brasile,
            Abu_Dhabi: pilota.Abu_Dhabi,
            _id: pilota._id,
          })
        );
        setPiloti(pilotiResponse);

        setSelectPiloti(
          pilotiResponse.reduce((accumulator: any[], obj: { Team: any }) => {
            if (!accumulator.includes(obj.Team)) {
              accumulator.push(obj.Team);
            }
            return accumulator;
          }, [])
        );

        let valoreMassimo = Number.NEGATIVE_INFINITY;
        let valoreMinimo = Number.POSITIVE_INFINITY;

        for (let oggetto of pilotiResponse) {
          const valoreCorrente = oggetto.Punti;
          if (valoreCorrente > valoreMassimo) {
            valoreMassimo = valoreCorrente;
          }
          if (valoreCorrente < valoreMinimo) {
            valoreMinimo = valoreCorrente;
          }
        }
        setSliderPunti([valoreMinimo, valoreMassimo]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [circuiti]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/circuiti");
        const circuitiResponse = response.data.circuiti.map(
          (circuito: {
            Round: any;
            Circuito: any;
            Paese: any;
            Data: any;
            Lunghezza_Giro: any;
            Numero_Giri: any;
            Lunghezza_Gara: any;
            Recorde_Vittorie: any;
            Pole_Position: any;
            Vincitore: any;
            Secondo_Posto: any;
            Terzo_Posto: any;
            _id: any;
          }) => ({
            Round: circuito.Round,
            Circuito: circuito.Circuito,
            Paese: circuito.Paese,
            Data: circuito.Data,
            Lunghezza_Giro: circuito.Lunghezza_Giro,
            Numero_Giri: circuito.Numero_Giri,
            Lunghezza_Gara: circuito.Lunghezza_Gara,
            Recorde_Vittorie: circuito.Recorde_Vittorie,
            Pole_Position: circuito.Pole_Position,
            Vincitore: circuito.Vincitore,
            Secondo_Posto: circuito.Secondo_Posto,
            Terzo_Posto: circuito.Terzo_Posto,
            _id: circuito._id,
          })
        );
        setCircuiti(circuitiResponse);

        let valoreMassimo = Number.NEGATIVE_INFINITY;
        let valoreMinimo = Number.POSITIVE_INFINITY;

        for (let oggetto of circuitiResponse) {
          const valoreCorrente = parseInt(oggetto.Lunghezza_Gara, 10);
          if (valoreCorrente > valoreMassimo) {
            valoreMassimo = valoreCorrente;
          }
          if (valoreCorrente < valoreMinimo) {
            valoreMinimo = valoreCorrente;
          }
        }

        setSliderLunghezzaGara([valoreMinimo, valoreMassimo]);

        let valoreMax = Number.NEGATIVE_INFINITY;
        let valoreMin = Number.POSITIVE_INFINITY;

        for (let oggetto of circuitiResponse) {
          const valoreCorrente = oggetto.Numero_Giri;
          if (valoreCorrente > valoreMax) {
            valoreMax = valoreCorrente;
          }
          if (valoreCorrente < valoreMin) {
            valoreMin = valoreCorrente;
          }
        }
        setSliderNumeroGiri([valoreMin, valoreMax]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [pilotiSelected, setPilotiSelected] = useState({
    filter: false,
    type: "",
  });
  const [pilotiPunti, setPilotiPunti] = useState({
    filter: false,
    minValue: 0,
    maxValue: 100,
  });

  const [circuitiLunghezzaGara, setCircuitiLunghezzaGara] = useState({
    filter: false,
    minValue: 0,
    maxValue: 100,
  });

  const [circuitiNumeroGiri, setCircuitiNumeroGiri] = useState({
    filter: false,
    minValue: 0,
    maxValue: 100,
  });

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col justify-between items-center h-screen w-full"
        style={{
          backgroundImage: `url(${sfondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-between items-center w-full h-full overflow-y-auto overflow-x-auto lg:mb-0">
          <div className="pt-10 pb-8">
            <img src={logo} width={100} height={100} />
          </div>
          <div className="flex flex-col items-center w-full pb-36">
            <span className="text-white text-2xl font-bold pb-5">
              Tabella Piloti
            </span>
            <div className="flex flex-row items-end justify-between w-[98%] pb-5">
              <div className="w-3/4"></div>
              <div className="flex flex-col items-center justify-center h-20 pr-4">
                <p className="text-white text-lg font-semibold">Team</p>
                <Select
                  size={"md"}
                  bg="white"
                  focusBorderColor="#C01EE1"
                  onChange={(event) => {
                    const selectedValue = event.target.value;
                    setPilotiSelected({
                      filter: true,
                      type: selectedValue,
                    });
                  }}
                >
                  {selectPiloti.map((e) => (
                    <option value={e} className="bg-white text-black">
                      {e}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col w-[15%] pr-4">
                <p className="text-white text-lg font-semibold">Punti</p>
                <div className="flex flex-row">
                  <p className="text-white text-base pr-2">
                    {pilotiPunti.minValue}
                  </p>
                  <RangeSlider
                    size={"lg"}
                    aria-label={["min", "max"]}
                    defaultValue={[sliderPunti[0], sliderPunti[1]]}
                    min={sliderPunti[0]}
                    max={sliderPunti[1]}
                    onChange={(value) => {
                      setPilotiPunti({
                        filter: true,
                        minValue: value[0],
                        maxValue: value[1],
                      });
                    }}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0}></RangeSliderThumb>
                    <RangeSliderThumb index={1}></RangeSliderThumb>
                  </RangeSlider>
                  <p className="text-white text-base pl-2">
                    {pilotiPunti.maxValue}
                  </p>
                </div>
              </div>
              <IconButton
                onClick={async () => {
                  try {
                    let request;

                    if (pilotiSelected.filter) {
                      request = {
                        selectedFilter: true,
                        selected: pilotiSelected.type,
                      };
                    } else {
                      request = {
                        selectedFilter: false,
                      };
                    }
                    if (pilotiPunti.filter) {
                      request = {
                        ...request,
                        puntiFilter: true,
                        minValue: pilotiPunti.minValue,
                        maxValue: pilotiPunti.maxValue,
                      };
                    } else {
                      request = {
                        ...request,
                        puntiFilter: false,
                      };
                    }
                    const updatedPiloti = await axios.post("/filtra_piloti", {
                      request: request,
                    });

                    setPiloti(updatedPiloti.data.piloti);
                  } catch {}
                }}
                size={"sm"}
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
              <IconButton
                className="pl-4"
                onClick={async () => {
                  try {
                    const updatedPiloti = await axios.get("/piloti");
                    setPiloti(updatedPiloti.data.piloti);
                    setPilotiSelected({ filter: false, type: "" });
                    setPilotiPunti({
                      filter: false,
                      minValue: 0,
                      maxValue: 100,
                    });
                    setPiloti(updatedPiloti.data.piloti);
                  } catch {}
                }}
                size={"sm"}
                colorScheme="blue"
                aria-label="Search database"
                icon={<CloseIcon />}
              />
            </div>
            <div className="overflow-y-auto relative">
              <table className="font-body w-[98%] ml-auto mr-auto table-fixed shadow-md">
                <tr className="bg-gray-800 text-gray-400 text-xs h-10 w-full">
                  <th>Pilota</th>
                  <th>Nazionalità</th>
                  <th>Età</th>
                  <th>Team</th>
                  <th>Punti</th>
                  <th>Bahrain</th>
                  <th>Arabia Saudita</th>
                  <th>Australia</th>
                  <th>Imola</th>
                  <th>Miami</th>
                  <th>Spagna</th>
                  <th>Monaco</th>
                  <th>Azerbaigian</th>
                  <th>Canada</th>
                  <th>Gran Bretagna</th>
                  <th>Austria</th>
                  <th>Francia</th>
                  <th>Ungheria</th>
                  <th>Belgio</th>
                  <th>Olanda</th>
                  <th>Italia</th>
                  <th>Singapore</th>
                  <th>Giappone</th>
                  <th>Stati Uniti</th>
                  <th>Messico</th>
                  <th>Brasile</th>
                  <th>Abu_Dhabi</th>
                  <th>Modifica</th>
                  <th>Cancella</th>
                </tr>
                {piloti.map((e, index) => (
                  <tr
                    key={e._id}
                    onClick={() => {}}
                    className={`h-16 cursor-pointer text-sm ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                  >
                    <td className="font-normal text-center truncate">
                      <span>{e.Pilota}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Nazionalita}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Eta}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Team}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Punti}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Bahrain}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Arabia_Saudita}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Australia}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Imola}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Miami}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Spagna}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Monaco}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Azerbaigian}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Canada}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Gran_Bretagna}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Austria}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Francia}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Ungheria}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Belgio}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Olanda}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Italia}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Singapore}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Giappone}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Stati_Uniti}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Messico}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Brasile}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.Abu_Dhabi}</span>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <IconButton
                          onClick={() => {
                            navigate(`/aggiorna-pilota/${e.Pilota}`);
                          }}
                          size={"sm"}
                          colorScheme="blue"
                          aria-label="Search database"
                          icon={<EditIcon />}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <IconButton
                          onClick={async () => {
                            try {
                              await axios.post("/cancella_pilota", {
                                pilota: e.Pilota,
                              });
                              const updatedPiloti = piloti.filter(
                                (pilota) => pilota._id !== e._id
                              );
                              setPiloti(updatedPiloti);
                            } catch {}
                          }}
                          size={"sm"}
                          colorScheme="blue"
                          aria-label="Search database"
                          icon={<CloseIcon />}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="pt-8">
              <Button
                className="cursor-pointer mt-5 mb-4 lg:mt-0 lg:mb-0"
                colorScheme="brand"
                borderRadius={"80rem"}
                size="lg"
                _hover={{ bg: "#C01EE1" }}
                onClick={async () => {
                  navigate("/aggiungi-pilota");
                }}
              >
                INSERISCI PILOTA
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center w-full pb-6">
            <span className="text-white text-2xl font-bold pb-5">
              Tabella Circuiti
            </span>
            <div className="flex flex-row items-end justify-between w-[98%] pb-5">
              <div className="w-3/4"></div>
              <div className="flex flex-col w-[15%] pr-4">
                <p className="text-white text-lg font-semibold">
                  Lunghezza Gara
                </p>
                <div className="flex flex-row">
                  <p className="text-white text-base pr-2">
                    {circuitiLunghezzaGara.minValue}
                  </p>
                  <RangeSlider
                    size={"lg"}
                    aria-label={["min", "max"]}
                    defaultValue={[
                      sliderLunghezzaGara[0],
                      sliderLunghezzaGara[1],
                    ]}
                    min={sliderLunghezzaGara[0]}
                    max={sliderLunghezzaGara[1]}
                    onChange={(value) => {
                      setCircuitiLunghezzaGara({
                        filter: true,
                        minValue: value[0],
                        maxValue: value[1],
                      });
                    }}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0}></RangeSliderThumb>
                    <RangeSliderThumb index={1}></RangeSliderThumb>
                  </RangeSlider>
                  <p className="text-white text-base pl-2">
                    {circuitiLunghezzaGara.maxValue}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[15%] pr-4">
                <p className="text-white text-lg font-semibold">Numero Giri</p>
                <div className="flex flex-row">
                  <p className="text-white text-base pr-2">
                    {circuitiNumeroGiri.minValue}
                  </p>
                  <RangeSlider
                    size={"lg"}
                    aria-label={["min", "max"]}
                    defaultValue={[sliderNumeroGiri[0], sliderNumeroGiri[1]]}
                    min={sliderNumeroGiri[0]}
                    max={sliderNumeroGiri[1]}
                    onChange={(value) => {
                      setCircuitiNumeroGiri({
                        filter: true,
                        minValue: value[0],
                        maxValue: value[1],
                      });
                    }}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0}></RangeSliderThumb>
                    <RangeSliderThumb index={1}></RangeSliderThumb>
                  </RangeSlider>
                  <p className="text-white text-base pl-2">
                    {circuitiNumeroGiri.maxValue}
                  </p>
                </div>
              </div>
              <IconButton
                className="pr-4"
                onClick={async () => {
                  try {
                    let request;
                    if (circuitiLunghezzaGara.filter) {
                      request = {
                        lunghezzaGaraFilter: true,
                        minValueLunghezzaGara: circuitiLunghezzaGara.minValue,
                        maxValueLunghezzaGara: circuitiLunghezzaGara.maxValue,
                      };
                    } else {
                      request = {
                        lunghezzaGaraFilter: false,
                        minValueLunghezzaGara: circuitiLunghezzaGara.minValue,
                        maxValueLunghezzaGara: circuitiLunghezzaGara.maxValue,
                      };
                    }

                    if (circuitiNumeroGiri.filter) {
                      request = {
                        ...request,
                        numeroGiriFilter: true,
                        minValueNumeroGiri: circuitiNumeroGiri.minValue,
                        maxValueNumeroGiri: circuitiNumeroGiri.maxValue,
                      };
                    } else {
                      request = {
                        ...request,
                        numeroGiriFilter: false,
                      };
                    }
                    const updatedCircuiti = await axios.post(
                      "/filtra_circuiti",
                      {
                        request: request,
                      }
                    );
                    setCircuiti(updatedCircuiti.data.circuiti);
                  } catch {}
                }}
                size={"sm"}
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
              <IconButton
                onClick={async () => {
                  try {
                    const updatedCircuiti = await axios.get("/circuiti");
                    setCircuiti(updatedCircuiti.data.circuiti);
                    setCircuitiLunghezzaGara({
                      filter: false,
                      maxValue: 100,
                      minValue: 0,
                    });
                    setCircuitiNumeroGiri({
                      filter: false,
                      maxValue: 100,
                      minValue: 0,
                    });
                  } catch {}
                }}
                size={"sm"}
                colorScheme="blue"
                aria-label="Search database"
                icon={<CloseIcon />}
              />
            </div>
            <div className="overflow-y-auto relative">
              <table className="font-body w-[98%] ml-auto mr-auto table-fixed shadow-md">
                <tr className="bg-gray-800 text-gray-400 text-xs h-10 w-full">
                  <th>Round</th>
                  <th>Circuito</th>
                  <th>Paese</th>
                  <th>Data</th>
                  <th>Lunghezza Giro</th>
                  <th>Numero Giri</th>
                  <th>Lunghezza Gara</th>
                  <th>Record Vittorie</th>
                  <th>Pole Position</th>
                  <th>Vincitore</th>
                  <th>Secondo Posto</th>
                  <th>Terzo Posto</th>
                  <th>Modifica</th>
                  <th>Cancella</th>
                </tr>
                {isLoading ? (
                  <span>Caricamento</span>
                ) : (
                  circuiti.map((e, index) => (
                    <tr
                      key={e._id}
                      onClick={() => {}}
                      className={`h-16 cursor-pointer text-sm ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                      }`}
                    >
                      <td className="font-normal text-center truncate">
                        <span>{e.Round}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Circuito}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Paese}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Data}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Lunghezza_Giro}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Numero_Giri}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Lunghezza_Gara}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Recorde_Vittorie}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Pole_Position}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Vincitore}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Secondo_Posto}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.Terzo_Posto}</span>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <IconButton
                            size={"sm"}
                            colorScheme="blue"
                            aria-label="Search database"
                            icon={<EditIcon />}
                            onClick={() => {
                              navigate(`/aggiorna-circuito/${e.Circuito}`);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <IconButton
                            size={"sm"}
                            colorScheme="blue"
                            aria-label="Search database"
                            icon={<CloseIcon />}
                            onClick={async () => {
                              try {
                                await axios.post("/cancella_circuito", {
                                  circuito: e.Circuito,
                                });
                                const updatedCircuiti = circuiti.filter(
                                  (circuito) => circuito._id !== e._id
                                );
                                setCircuiti(updatedCircuiti);
                              } catch {}
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </table>
            </div>
            <div className="pt-8">
              <Button
                className="cursor-pointer mt-5 mb-4 lg:mt-0 lg:mb-0"
                colorScheme="brand"
                borderRadius={"80rem"}
                size="lg"
                _hover={{ bg: "#C01EE1" }}
                onClick={async () => {
                  navigate("/aggiungi-circuito");
                }}
              >
                INSERISCI CIRCUITO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
