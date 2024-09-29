pipeline {
    agent any
    stages {
<<<<<<< HEAD
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker image for the backend
                    sh 'docker build -t backend-app ./Backend'
                    // Build Docker image for the frontend
                    sh 'docker build -t frontend-app ./Frontend'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run tests on the backend image
                    sh 'docker run backend-app npm test'
                    // Optionally, run frontend tests if applicable
                }
            }
        }
        
        }
        stage('Deploy') {
            steps {
                script {
                    // Use Docker Compose to start the services
                    sh 'docker-compose up -d'
=======
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
>>>>>>> 1591254e7ee103f57a9af732de193373e7282dae
                }
            }
        }
        // Additional stages for testing, deployment, etc., can be added here
    }
    post {
        always {
<<<<<<< HEAD
            // Clean up, ensure Docker Compose services are taken down
            sh 'docker-compose down'
=======
            // Add any cleanup scripts if necessary
            echo "Build process completed."
>>>>>>> 1591254e7ee103f57a9af732de193373e7282dae
        }
    }
}
