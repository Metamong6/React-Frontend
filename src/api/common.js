import axios from "axios";

export const api = axios.create({
  baseURL: "https://ysflow.com/seldon"
});

export const postTest = async () => {

  const param = {
    "data": {
      "ndarray":[[1.0, 2.0, 5.0, 6.0]]
    }
  }

  console.log(param);

  const response = await api.post("/seldon-deploy/iris-model/api/v1.0/predictions", param)

  console.log(response);
  console.log(response.data);
  return response.data
}
