pipeline {
    agent  any
    stages {
              stage('build') {
                    steps {
                        echo 'build done'
                        sleep(15)
                    }
                }
                stage('deploy to dd1') {
                    steps {
                        echo 'stg deployment done'
                      sleep(15)
                    }
                }
                 stage('deploy to mo') {
                    steps {
                        echo 'prod deployment done'
                         sleep(15)
                    }
                }
                stage('deploy to prod') {
                    steps {
                        echo 'prod deployment done'
                          sleep(15)
                    }
                }
        
    }
}
