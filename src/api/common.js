import axios from "axios";

export const api = axios.create({
  baseURL: "https://ysflow.com/seldon"
});

export const postTest = async (props) => {

const param = {
  "data":{
    "ndarray":
      [4, 1.2001953125, [40.681256,-73.906999], [40.69133,-73.893018], 1, "2022-10-20T10:30", 8.6484375]
  }
}

  console.log(param);

  const response = await api.post("seldon-deploy/startup-pj/api/v1.0/doc", param)

  console.log(response);
  console.log(response.data);
  return response.data
}
