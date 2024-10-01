pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images for both backend and frontend without starting them
                    bat 'docker-compose -f docker-compose.yml build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Execute tests inside the backend container, ensuring the environment is correct
                    bat 'docker-compose -f docker-compose.yml run backend-app npm test'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run SonarScanner directly on Jenkins
                    withSonarQubeEnv('SonarQube') {
                        bat 'C:/SonarQube/sonar-scanner-6.2.0.4584-windows-x64/bin/sonar-scanner -Dsonar.projectKey=Jekins -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_2b3c30cee20a131c1ceae8e37dfe704b092efe96'
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Deploy all services using Docker Compose
                    bat 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Stop and remove containers, networks, images, and volumes
                    bat 'docker-compose -f docker-compose.yml down --rmi all --volumes'
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
