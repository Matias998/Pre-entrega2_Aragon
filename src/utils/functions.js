// import {loadDB} from "./firebase.js"

export const fetchProductJSON = async (ruta) => {
   const response = await fetch(ruta)
   const productos = await response.json()
   return productos
}

// loadDB()