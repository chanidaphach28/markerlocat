import axios from "axios";

export const listlocation = async() =>
    await axios.get("http://localhost:3000/api/getDors")