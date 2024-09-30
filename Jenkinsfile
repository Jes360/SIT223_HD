pipeline {
    agent any

     stage('Run Tests') {
            steps {
                dir('Backend') { // Ensure commands run in the Backend directory
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
       
   
