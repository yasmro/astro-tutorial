import type React from "react";
import { useState } from "react";
type Props = {
  slug: string;
};

const options = ["aaa", "bbb", "ccc"];

export const Tab: React.VFC<Props> = ({ slug }) => {
  const [selected, setSelected] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);

  return (
    <div>
      <h2>{slug}</h2>
      <p>selected: {selected}</p>
      <select value={selected} onChange={(e) => handleChange(e)}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
