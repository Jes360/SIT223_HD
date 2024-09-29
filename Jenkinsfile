pipeline {
    agent any  // This specifies that the pipeline can run on any available agent
    environment {
        // Define environment variables that your scripts might depend on
        DOCKER_IMAGE = "myapp"
    }
    stages {
        stage('Build') {
            steps {
                script {
                    // Commands to build your Docker images
                    sh 'docker-compose build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Commands to run tests
                    sh 'docker-compose run backend npm test'
                }
            }
        }
    }
    post {
        // Define actions to take based on the outcome of the pipeline stages
        always {
            // Clean up after the pipeline runs
            sh 'docker-compose down'
        }
    }
}
