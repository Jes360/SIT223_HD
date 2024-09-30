pipeline {
    agent any
    
    stages {
        stage('Run Tests') {
            steps {
                dir('Backend') { // Ensures commands run in the Backend directory
                    sh 'npm test' // Executes npm test
                }
            }
        }
    }

    post {
        always {
            // Cleanup or post-build actions
            echo 'Testing completed.'
        }
    }
}
