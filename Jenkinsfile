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

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Ensure sonar-scanner has execute permissions
                    bat 'docker exec sit223_hd-backend-1 chmod +x node_modules/.bin/sonar-scanner'

                    // Run SonarQube scanner
                    bat 'docker exec sit223_hd-backend-1 node_modules/.bin/sonar-scanner'
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
