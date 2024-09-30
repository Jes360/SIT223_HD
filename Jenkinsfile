pipeline {
    agent any

    stages {
        stage('Build and Run with Docker Compose') {
            steps {
                script {
                    // Build and run containers in the background
                    bat 'docker-compose -f docker-compose.yml up --build -d'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run npm test in the correct backend container
                    bat 'docker exec sit223_hd npm test'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Bring down the containers after the test, removing them and their networks
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
