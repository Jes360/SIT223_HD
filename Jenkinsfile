pipeline {
    agent any
        stage('SonarQube Analysis') {
            steps {
                script {
                    // Running SonarQube scanner; ensure 'SonarScanner' is configured in Jenkins Global Tool Configuration
                    withSonarQubeEnv('SonarQube') { 
                      
                        bat "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        // Additi
        // Additional stages for testing, deployment, etc., can be added here
    }
    post {
        always {
            // Add any cleanup scripts if necessary
            echo "Build process completed."
        }
    }
}
