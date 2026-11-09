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
        stage('Deploy') {
            steps {
                sh '''
                    docker build -t mern-app:${BUILD_NUMBER} -t mern-app:latest .
                    docker network create mern-net || true
                    docker volume create mongo-data || true
                    docker start mongo || docker run -d --name mongo --network mern-net \
                      --restart unless-stopped -v mongo-data:/data/db mongo:7
                    docker rm -f mern-app || true
                    docker run -d --name mern-app --network mern-net --restart unless-stopped \
                      -p 5000:5000 -e MONGO_URI=mongodb://mongo:27017/mernsite mern-app:latest
                '''
            }
        }


    }

    post {
        success { archiveArtifacts artifacts: 'client/dist/**', allowEmptyArchive: true }
        failure { echo 'Pipeline failed' }
        always  { cleanWs() }
    }
}
