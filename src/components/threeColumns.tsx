import React, { useMemo } from "react";

type columnProps = {
  url: string;
  labelText: string;
  descriptionText: string;
};

type ThreeColumnsProps = {
  componentTitle: string;
  columnData: columnProps[];
};

export const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  componentTitle,
  columnData,
}) => {
  const theColumnData = useMemo(() => columnData, [columnData]);
  return (
    <div className="three-col-wrapper">
      <h2>{componentTitle}</h2>
      <div className="three-col-inner">
        {theColumnData.map((data) => (
          <div key={Math.random()} className="col">
            <img src={data.url} alt={data.labelText} />
            <h3>{data.labelText}</h3>
            <p>{data.descriptionText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
