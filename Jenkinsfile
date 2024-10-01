pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images for both backend and frontend
                    dir('Backend') {
                        bat 'docker build -t backend-app .'
                    }
                    dir('Frontend') {
                        bat 'docker build -t frontend-app .'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Running tests on the backend image
                    bat 'docker run backend-app npm test'
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
                    // Use Docker Compose to deploy containers
                    bat 'docker-compose -f docker-compose.yml up --build -d'
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo 'Mock deployment to AWS would occur here.'
            }
        }

        stage('Monitoring Setup') {
            steps {
                echo 'Setup for Prometheus and Grafana would be configured here.'
            }
        }

        stage('Cleanup') {
            steps {
                // Leaving the containers running as requested
                echo 'Cleanup skipped to keep the server running.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete!'
        }
    }
}
