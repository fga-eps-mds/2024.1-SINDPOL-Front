import axios from "axios"

const Authorization = localStorage.getItem("token")
  ? `Bearer ${localStorage.getItem("token")}`
  : ""

export default axios.create({
  baseURL: "https://2023-2-sindpol-gateway.vercel.app/api",
  //baseURL: "http://localhost:8001/",
  headers: {
    "Content-Type": "application/json",
    Authorization,
  },
})
