import mongoose from "mongoose";

const url ="mongodb+srv://electrictiesto:OzRIMlCDq5OhRVBI@cluster0.c9wxd9o.mongodb.net/nombre_de_la_base_de_datos?retryWrites=true&w=majority&appName=Cluster0/examen";

(async () => {
    try {
        await mongoose.connect(url);
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error de conexión:", error);
    }
})();
