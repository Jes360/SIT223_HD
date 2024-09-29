pipeline {
    agent any
    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker image for the backend
                    bat 'docker build -t backend-app ./Backend'
                    // Build Docker image for the frontend
                    bat 'docker build -t frontend-app ./Frontend'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run tests on the backend image
                    bat 'docker run backend-app npm test'
                    // Optionally, run frontend tests if applicable
                }
            }
        }
       
        stage('Deploy') {
            steps {
                script {
                    // Use Docker Compose to start the services
                    bat 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            // Clean up, ensure Docker Compose services are taken down
            bat 'docker-compose down'
        }
    }
}
