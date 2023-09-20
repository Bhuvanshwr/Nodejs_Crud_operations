pipeline {
    agent  any
    stages {
        stage('deployments') {
            parallel {
                stage('deploy to dd1') {
                    steps {
                        echo 'stg deployment done'
                    }
                }
                 stage('deploy to mo') {
                    steps {
                        echo 'prod deployment done'
                    }
                }
                stage('deploy to prod') {
                    steps {
                        echo 'prod deployment done'
                    }
                }
            }
        }
        
    }
}
