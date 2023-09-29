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
    <div className="svgcol-wrp">
      <h2>{componentTitle}</h2>
      <div className="svgcol-cont">
        {columnData.map((data) => (
          <div className="svgcol-inner">
            <div className="img-wrp">
              <img
                src={data.svgUrl}
                alt={data.labelText}
                // height={"auto"}
                // width={"150rem"}
              />
            </div>
            <h4>{data.labelText}</h4>
            <p>{data.descriptionText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SVGColumns;
