import React, { FC } from "react";
import { Person } from "../../api/api";
import style from './PersonItem.module.css'

interface PersonItemProps {
  person: Person;
}

const PersonItem: FC<PersonItemProps> = ({ person }) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img className={style.img} src={person.image} alt={person.name} />
      </div>
      <div className={style.name}>
        {person.id}. {person.name}.
      </div>
      <div className={style.status}>{person.status}</div>
    </div>
  );
};

export default PersonItem;
