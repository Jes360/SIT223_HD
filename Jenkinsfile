pipeline {
    agent any

    stages {
        stage('SonarQube Analysis') {
            steps {
                script {
                    // Assuming 'SonarScanner' is the name configured in Jenkins Global Tool Configuration
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube') { // Ensure the name here matches the SonarQube configuration in Jenkins
                        bat "${scannerHome}/bin/sonar-scanner"
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
