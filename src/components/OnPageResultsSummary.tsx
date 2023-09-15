interface DataType {
  results: number | null;
}

const OnPageResultsSummary: React.FC<DataType> = ({ results }) => {
  return <div className="text-4xl">Overall OnPage Score: {results}%</div>;
};

export default OnPageResultsSummary;
