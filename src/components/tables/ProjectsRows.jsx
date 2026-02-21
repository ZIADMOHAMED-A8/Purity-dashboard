import { useQuery } from "@tanstack/react-query";
import toCurrencyConverter from "../../utils/currencyAdder";
import ProjectsData from "../../utils/ProjectsData";
import Avatars from "../ui/Avatars";
import ProgressBar from "../ui/ProgressBar";
import { getProjects } from "../../api/getDashboardData/getProjects";
import Skeleton from "react-loading-skeleton";

export default function ProjectsRows() {
  const {data,isLoading}=useQuery({
    queryKey:['projects'],
    queryFn:getProjects
  })
  if(isLoading){
    return (
      <>
        {Array.from({ length: 5 }).map((_, idx) => (
          <tr key={`projects-skeleton-${idx}`}>
            <td><Skeleton height={20} /></td>
            <td><Skeleton height={20} /></td>
            <td><Skeleton height={20} /></td>
            <td><Skeleton height={20} /></td>
          </tr>
        ))}
      </>
    )
  }
    return (
      <>
        {ProjectsData.map(e => (
          <tr key={e.id}>
            <td className="w-[50%] font-bold text-sm sm:text-base">{e.name}</td>
            <td><Avatars /></td>
            <td className="font-bold text-sm sm:text-base whitespace-nowrap">
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
