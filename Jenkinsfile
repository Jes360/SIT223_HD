pipeline {
    agent any

    stages {
        stage('Build and Run with Docker Compose') {
            steps {
                script {
                    // Builds and runs containers in the background
                    bat 'docker-compose -f docker-compose.yml up --build -d'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests inside the backend container
                    bat 'docker exec sit223_hd-backend-1 npm test'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Bring down the containers, removing them and their networks
                    bat 'docker-compose -f docker-compose.yml down'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete!'
        }
    }
}
