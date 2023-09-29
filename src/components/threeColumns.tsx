type columnProps = {
  svgUrl: string;
  labelText: string;
  descriptionText: string;
};
type SVGColumnsProps = {
  componentTitle: string;
  columnData: columnProps[];
};

export const SVGColumns: React.FC<SVGColumnsProps> = ({
  componentTitle,
  columnData,
}) => {
  return (
    <div className="three-col-wrapper">
      <h2>{componentTitle}</h2>
      <div className="three-col-inner">
        {columnData.map((data) => (
          <div className="col">
              <img
                src={data.svgUrl}
                alt={data.labelText}
              />
            <h3>{data.labelText}</h3>
            <p>{data.descriptionText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SVGColumns;
