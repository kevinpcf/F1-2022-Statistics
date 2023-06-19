import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import sfondo from "../public/images/sfondo.svg";
import axios from "axios";

type Pilota = {
  pilota: string;
  nazionalita: string;
  eta: string;
  team: string;
  punti: number;
  bahrain: string;
  arabia_saudita: string;
  australia: string;
  imola: string;
  miami: string;
  spagna: string;
  monaco: string;
  azerbaigian: string;
  canada: string;
  gran_bretagna: string;
  austria: string;
  francia: string;
  ungheria: string;
  belgio: string;
  olanda: string;
  italia: string;
  singapore: string;
  giappone: string;
  stati_uniti: string;
  messico: string;
  brasile: string;
  abu_dhabi: string;
};

type Circuito = {
  round: number;
  circuito: string;
  paese: string;
  data: string;
  lunghezza_giro: number;
  numero_giri: number;
  lunghezza_gara: number;
  record_vittorie: string;
  pole_position: string;
  vincitore: string;
  secondo_posto: string;
  terzo_posto: string;
};

const App: React.FC = () => {
  const [piloti, setPiloti] = useState<Pilota[]>([]);
  const [circuiti, setCircuiti] = useState<Circuito[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("sono in piloti");
        const response = await axios.post("/piloti");
        const piloti = response.data;
        console.log(response);
        setPiloti(piloti);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("sono in circuiti");
  //       const response = await axios.post("/circuiti");
  //       const circuiti = response.data;
  //       console.log(circuiti);
  //       setCircuiti(circuiti);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // });

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
            {/* <img
              src={require("../public/images/logo.svg")}
              width={100}
              height={100}
            /> */}
          </div>
          <div className="flex flex-col items-center w-full pb-36">
            <span className="text-white text-2xl font-bold pb-5">
              Tabella Piloti
            </span>
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
                    key={e.pilota}
                    onClick={() => {}}
                    className={`cursor-pointer text-sm ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                  >
                    <td className="font-normal text-center truncate">
                      <span>{e.pilota}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.nazionalita}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.eta}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.team}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.punti}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.bahrain}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.arabia_saudita}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.australia}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.imola}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.miami}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.spagna}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.monaco}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.azerbaigian}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.canada}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.gran_bretagna}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.austria}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.francia}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.ungheria}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.belgio}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.olanda}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.italia}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.singapore}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.giappone}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.stati_uniti}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.messico}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.brasile}</span>
                    </td>
                    <td className="font-normal text-center truncate">
                      <span>{e.abu_dhabi}</span>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <IconButton
                          colorScheme="blue"
                          aria-label="Search database"
                          icon={<EditIcon />}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <IconButton
                          onClick={() => {}}
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
                  //  router.push("/AggiungiPista");
                }}
              >
                INSERISCI PISTA
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center w-full pb-6">
            <span className="text-white text-2xl font-bold pb-5">
              Tabella Circuiti
            </span>
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
                      key={e.round}
                      onClick={() => {}}
                      className={`h-16 cursor-pointer text-sm ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                      }`}
                    >
                      <td className="font-normal text-center truncate">
                        <span>{e.round}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.circuito}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.paese}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.data}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.lunghezza_giro}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.numero_giri}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.lunghezza_gara}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.record_vittorie}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.pole_position}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.vincitore}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.secondo_posto}</span>
                      </td>
                      <td className="font-normal text-center truncate">
                        <span>{e.terzo_posto}</span>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <IconButton
                            colorScheme="blue"
                            aria-label="Search database"
                            icon={<EditIcon />}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <IconButton
                            colorScheme="blue"
                            aria-label="Search database"
                            icon={<CloseIcon />}
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
                  // router.push("/AggiungiCircuito");
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
