import toCurrencyConverter from "../utils/CurrnecyAdder";
import ProjectsData from "../utils/ProjectsData";
import Avatars from "./Avatars";
import ProgressBar from "./ProgressBar";
export default function ProjectsRows() {
    return (
      <>
        {ProjectsData.map(e => (
          <tr key={e.id}>
            <td className="text-l w-[50%] font-bold">{e.name}</td>
            <td><Avatars /></td>
            <td className="text-l font-bold">
              {toCurrencyConverter(e.budget)}
            </td>
            <td>
              <ProgressBar value={e.progress} />
            </td>
          </tr>
        ))}
      </>
    );
  }
  