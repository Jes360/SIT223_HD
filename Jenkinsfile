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
                    sh 'sonar-scanner Dsonar.projectKey=Test -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000-Dsonar.token=sqp_f149f7f7bdcf19ebee133c84310992dae0607afb'
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
