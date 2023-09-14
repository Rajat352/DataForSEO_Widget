import { useState } from "react";

interface ApiResponse {
  version: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  tasks_count: number;
  tasks_error: number;
  tasks: [];
}

interface DisplayDataType {
  data: ApiResponse;
}

const DisplayData: React.FC<DisplayDataType> = ({ data }) => {
  return <h1>Hello</h1>;
};

export default DisplayData;
