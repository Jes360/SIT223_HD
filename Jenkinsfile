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
                    // Run SonarScanner directly on Jenkins
                    withSonarQubeEnv('SonarQube') {
                        bat 'sonar-scanner-Dsonar.projectKey=Jekins-Dsonar.sources=. -Dsonar.host.url=http://localhost:9000  -Dsonar.token=sqp_2b3c30cee20a131c1ceae8e37dfe704b092efe96'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Executes npm test in the 'backend-app-container'
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
