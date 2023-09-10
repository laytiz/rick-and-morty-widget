import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Person, getPerson } from "../../api/api";
import PersonItem from "../person-item/PersonItem";

const Persons: FC = () => {
  const [data, setData] = useState<null | Person[]>(null);
  const [params] = useSearchParams();
  const [ids, setIds] = useState<number[]>([]);
  console.log();

  useEffect(() => {
    const currentIds = params
      .get("ids")
      ?.split(",")
      .map((item) => Number(item));
    if (currentIds) {
      setIds(currentIds);
    }
  }, [params]);

  useEffect(() => {
    (async () => {
      if (ids.length > 0) {
        const data = await getPerson(ids);
        setData(data);
      }
    })();
  }, [ids]);
  console.log(data);

  return (
    <div>
      {data?.map((person) => (
        <PersonItem key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Persons;
