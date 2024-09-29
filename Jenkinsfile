pipeline {
    agent any
    stages {
        stage('SonarQube Analysis') {
            steps {
                sh """
                sonar-scanner \
                  -Dsonar.projectKey=Test \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=http://localhost:9000 \
                  -Dsonar.login=sqp_f149f7f7bdcf19ebee133c84310992dae0607afb
                """
            }
        }
    }
}
