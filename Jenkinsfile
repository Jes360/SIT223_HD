pipeline {
    agent any

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
                    // Executes npm test in the 'backend-app-container'
                    bat 'docker exec backend-app-container npm test'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Brings down the containers, removing them and their networks
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
