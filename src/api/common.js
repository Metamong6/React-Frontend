import axios from "axios";

export const api = axios.create({
  baseURL: "http://13.124.36.34:32056"
});

export const postSeldon = async (data) => {

  const param = {
    "data":{
      "ndarray":
        [4, 1.2001953125, [40.681256,-73.906999], [40.69133,-73.893018], 1, "2022-10-20T10:30", 8.6484375]
    }
  }

  const response = await api.post("/seldon/seldon-deploy/startup-pj/api/v1.0/predictions", param)

  console.log(response.data.data.ndarray);
  return response.data.data.ndarray
}
