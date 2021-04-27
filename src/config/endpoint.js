import instance from "./config";

const index = () => instance.get("/api/dev/food");
const detail = (data) => instance.get("/api/dev/food/" + data);
const search = (data) => instance.get("/api/dev/food" + data, data);

const apiCulture = {
  index,
  detail,
  search,
};

export default apiCulture;
