pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Make sure NodeJS is configured in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Checks out source code from the repository configured in Jenkins job
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('Backend') { // Assuming your Node.js project is in the 'Backend' directory
                    sh 'npm install' // Installs npm dependencies
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('Backend') {
                    sh 'npm test' // Runs Jest tests
                }
            }
        }
        stage('Publish Test Results') {
            steps {
                dir('Backend') {
                    junit 'test-results/*.xml' // Change this path to wherever your Jest test results are configured to output
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up'
            cleanWs() // Cleans up the workspace after the build completes
        }
    }
}
