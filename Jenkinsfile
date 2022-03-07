pipeline{
    agent any
    
    stages {
        stage('Initialize'){
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                  sh 'docker build -t whats-up .'
                }
            }
        }
        stage('Deploy Docker Image') {
            steps {
                script {
                // change to your dockerhub credentials
                 withCredentials([string(credentialsId: '<dockerhub-pwd>', variable: '<dockerhubpwd>')]) {
                    sh 'docker login -u devopshint -p ${dockerhubpwd}'
                 }  
                 sh 'docker push dchsiu/whats-up'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sshagent(['k8s']) {
                    script {
                        try {
                            sh "ssh ubuntu@k8scluster kubectl create -f ."
                        } catch (error) {
                            sh "ssh ubuntu@k8scluster kubectl create -f ."
                        }
                    }
                }
            }
        }
    }
}
