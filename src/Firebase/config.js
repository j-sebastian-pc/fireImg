import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyD0LDsbfRfhgbWYx0JfVEkUz6Z9A6DlEro",
  authDomain: "gestor-de-imagen.firebaseapp.com",
  projectId: "gestor-de-imagen",
  storageBucket: "gestor-de-imagen.appspot.com",
  messagingSenderId: "1078515517223",
  appId: "1:1078515517223:web:240f48c9f7414cee7ecb02"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadFile(file) {
  try {
    const uniqueFileName = uuidv4(); // Genera un nombre de archivo único
    const storageRef = ref(storage, uniqueFileName);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error al cargar el archivo:", error);
    throw error; // Re-lanza el error para que pueda ser manejado externamente si es necesario
  }
}
