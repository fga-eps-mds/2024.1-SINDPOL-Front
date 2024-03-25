import axios from "axios"

const Authorization = localStorage.getItem("token")
  ? `Bearer ${localStorage.getItem("token")}`
  : ""

export default axios.create({
  baseURL: "api-p1--api-gateway--njw77y9vvqrk.code.run",
  //baseURL: "http://localhost:8002/",
  headers: {
    "Content-Type": "application/json",
    Authorization,
  },
})
