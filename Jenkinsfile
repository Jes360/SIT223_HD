pipeline {
    agent any
    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker image for the backend
                    sh 'docker build -t backend-app ./Backend'
                    // Build Docker image for the frontend
                    sh 'docker build -t frontend-app ./Frontend'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run tests on the backend image
                    sh 'docker run backend-app npm test'
                    // Optionally, run frontend tests if applicable
                }
            }
        }
       
        stage('Deploy') {
            steps {
                script {
                    // Use Docker Compose to start the services
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            // Clean up, ensure Docker Compose services are taken down
            sh 'docker-compose down'
        }
    }
}
