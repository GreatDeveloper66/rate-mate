# Rate Mate

Rate Mate is a finance application designed to help users track and analyze currency exchange rates. The app features a **React** frontend and a **Java Spring Boot** backend for a seamless and efficient user experience.

## Features

- Real-time currency exchange rate tracking.
- Historical data visualization.
- User-friendly interface for managing favorite currencies.
- Secure and scalable backend.

## Tech Stack

### Frontend

- **React**: For building a dynamic and responsive user interface.
- **CSS/SCSS**: For styling the application.

### Backend

- **Java Spring Boot**: For handling API requests and business logic.
- **REST APIs**: For communication between frontend and backend.

### Database

- **PostgreSQL/MySQL**: For storing user data and currency information.

## Getting Started

### Prerequisites

- Node.js and npm installed for the frontend.
- Java 11+ and Maven for the backend.
- A running instance of PostgreSQL/MySQL.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/rate-mate.git
    cd rate-mate
    ```

2. **Setup the backend**:
    - Navigate to the `backend` directory:

      ```bash
      cd backend
      ```

    - Configure the database connection in `application.properties`.
    - Build and run the Spring Boot application:

      ```bash
      mvn spring-boot:run
      ```

3. **Setup the frontend**:
    - Navigate to the `frontend` directory:

      ```bash
      cd ../frontend
      ```

    - Install dependencies and start the development server:

      ```bash
      npm install
      npm start
      ```

4. Access the app at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [your-email@example.com].  
