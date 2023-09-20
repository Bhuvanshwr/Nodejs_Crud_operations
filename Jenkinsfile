pipeline {
    agent  any
    stages {
        stage('deployments') {
              stage('build') {
                    steps {
                        echo 'build done'
                        sleep(5)
                    }
                }
                stage('deploy to dd1') {
                    steps {
                        echo 'stg deployment done'
                        sleep(5)
                    }
                }
                 stage('deploy to mo') {
                    steps {
                        echo 'prod deployment done'
                         sleep(5)
                    }
                }
                stage('deploy to prod') {
                    steps {
                        echo 'prod deployment done'
                         sleep(5)
                    }
                }
            
        }
        
    }
}
