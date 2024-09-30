pipeline {
    agent any
    stages {
        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('Backend') {
                        // Build the Docker image for the backend using a Windows batch command
                        bat 'docker build -t backend-app .'
                    }
                }
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('Frontend') {
                        // Build the Docker image for the frontend using a Windows batch command
                        bat 'docker build -t frontend-app .'
                    }
                }
            }
        }
        // Additional stages for testing, deployment, etc., can be added here
    }
    post {
        always {
            // Add any cleanup scripts if necessary
            echo "Build process completed."
        }
    }
}
