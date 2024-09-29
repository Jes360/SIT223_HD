pipeline {
    agent any
    stages {
<<<<<<< HEAD
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
=======
        stage('Build Docker Images') {
>>>>>>> a1e699ccdde8853ae24e1cf1c0c5e29ec6ea26db
            steps {
                script {
                    // Build Docker image for the backend
                    bat 'docker build -t backend-app ./Backend'
                    // Build Docker image for the frontend
                    bat 'docker build -t frontend-app ./Frontend'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
<<<<<<< HEAD
                    dir('Frontend') {
                        // Build the Docker image for the frontend using a Windows batch command
                        bat 'docker build -t frontend-app .'
                    }
>>>>>>> 1591254e7ee103f57a9af732de193373e7282dae
=======
                    // Run tests on the backend image
                    bat 'docker run backend-app npm test'
                    // Optionally, run frontend tests if applicable
                }
            }
        }
       
        stage('Deploy') {
            steps {
                script {
                    // Use Docker Compose to start the services
                    bat 'docker-compose up -d'
>>>>>>> a1e699ccdde8853ae24e1cf1c0c5e29ec6ea26db
                }
            }
        }
    }
    post {
        always {
<<<<<<< HEAD
<<<<<<< HEAD
            // Clean up, ensure Docker Compose services are taken down
            sh 'docker-compose down'
=======
            // Add any cleanup scripts if necessary
            echo "Build process completed."
>>>>>>> 1591254e7ee103f57a9af732de193373e7282dae
=======
            // Clean up, ensure Docker Compose services are taken down
            bat 'docker-compose down'
>>>>>>> a1e699ccdde8853ae24e1cf1c0c5e29ec6ea26db
        }
    }
}
