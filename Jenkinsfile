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

        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') { // 'SonarQube' is the name of the SonarQube configuration in Jenkins
                        bat 'docker exec sit223_hd-backend-1 npm install sonar-scanner --save-dev'
                        bat 'docker exec sit223_hd-backend-1 node_modules/.bin/sonar-scanner'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run npm tests inside the backend container
                    bat 'docker exec sit223_hd-backend-1 npm test'
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
