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
          stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner -Dsonar.projectKey=sqa_e787da2515bcca2eb35803ba044304b05cc0b639 -Dsonar.sources=./src -Dsonar.host.url=http://localhost:9000'
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
