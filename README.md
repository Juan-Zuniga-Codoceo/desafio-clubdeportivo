
# Club Deportivo Discipline Spa

Este repositorio contiene el código para un sistema CRUD (Crear, Leer, Actualizar, Eliminar) que gestiona los deportes ofrecidos por el Club Deportivo Discipline Spa. El sistema utiliza un archivo JSON para persistir los datos de los deportes.

## Requerimientos

- Node.js
- npm (administrador de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm:

    ```
    npm install
    ```

3. Inicia el servidor:

    ```
    npm start
    ```

4. Abre tu navegador web y visita [http://localhost:3000](http://localhost:3000) para acceder al sistema.

## Uso

El sistema proporciona las siguientes funcionalidades:

- **Agregar deporte**: Permite agregar un nuevo deporte especificando su nombre y precio.
- **Ver deportes**: Muestra todos los deportes registrados en el sistema.
- **Editar deporte**: Permite editar el precio de un deporte existente.
- **Eliminar deporte**: Permite eliminar un deporte existente.

## Estructura del proyecto

- **`index.js`**: Archivo principal que inicia el servidor.
- **`routes/router.js`**: Contiene las rutas y controladores para manejar las solicitudes HTTP.
- **`public/index.html`**: Página HTML para realizar consultas y mostrar los deportes registrados.
- **`data/deportes.json`**: Archivo JSON que almacena los datos de los deportes.

## Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript
- HTML
- CSS
- JSON

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.


