pipeline {
    agent { label 'agent1' }   // must match the label on your Jenkins agent

    options {
        timestamps()
        timeout(time: 20, unit: 'MINUTES')
    }

    stages {
        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Backend') {
            steps {
                dir('server') {
                    sh 'npm ci || npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('client') {
                    sh 'npm ci || npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('server') {
                    sh 'npm test --if-present'
                }
                dir('client') {
                    sh 'CI=true npm test --if-present'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success { echo 'Pipeline succeeded' }
        success { archiveArtifacts artifacts: 'client/dist/**', allowEmptyArchive: true }
        failure { echo 'Pipeline failed' }
        always  { cleanWs() }
    }
}
