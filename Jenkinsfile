pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run build'
                
            }
        }
        stage('test') {
            sh 'npm run test'
        }
    }
}