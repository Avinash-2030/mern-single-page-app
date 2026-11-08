pipeline {

    agent {
        label 'mern'
    }

    options {
        timeout(time: 20, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm

                sh '''
                    echo "Repository cloned successfully"
                    echo "Commit:"
                    git rev-parse --short HEAD
                '''
            }
        }

        stage('Verify Build Environment') {
            steps {
                sh '''
                    echo "===== NODE ====="
                    node -v

                    echo "===== NPM ====="
                    npm -v

                    echo "===== GIT ====="
                    git --version

                    echo "===== DOCKER ====="
                    docker --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "Installing backend dependencies..."
                    npm ci

                    echo "Installing frontend dependencies..."
                    npm install --prefix client --include=dev
                '''
            }
        }

        stage('Validate Backend') {
            steps {
                sh '''
                    echo "Checking Express server syntax..."
                    node --check server/server.js

                    echo "Backend syntax validation successful"
                '''
            }
        }

        stage('Build React Frontend') {
            steps {
                sh '''
                    echo "Building React application..."

                    npm run build --prefix client

                    echo "Checking production build..."

                    test -d client/dist

                    ls -lh client/dist/
                '''
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts(
                    artifacts: 'client/dist/**',
                    fingerprint: true
                )
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: MERN application build completed!'
        }

        failure {
            echo 'FAILED: Check the Jenkins console output.'
        }

        always {
            echo 'Pipeline execution completed.'
        }
    }
}
