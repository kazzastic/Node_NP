pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'building package'
        sh 'npm install'
      }
    }

    stage('Test') {
      parallel {
        stage('Test Response') {
          environment {
            DB_CONNECTION = 'mongodb+srv://kazzastic:megacloud1@cluster0.6wesf.mongodb.net/test?retryWrites=true&w=majority'
            PORT = '5000'
          }
          steps {
            echo 'Testing the build'
            sh 'script/test'
            catchError(catchInterruptions: true, message: 'One of the tests failed') {
              mail(subject: 'Build Failure | TEST', body: 'One of the Test failed', from: 'rkazim79@gmail.com', to: 'rkazim79@gmail.com')
            }

          }
        }

        stage('Testing Lint') {
          steps {
            echo 'Testing Coding Practices'
          }
        }

      }
    }

    stage('CD permission') {
      steps {
        echo 'inside CD'
        input 'Ok to deploy?'
      }
    }

    stage('CD ') {
      steps {
        echo 'Deployed to Heroku'
      }
    }

  }
  environment {
    DB_CONNECTION = 'mongodb+srv://kazzastic:megacloud1@cluster0.6wesf.mongodb.net/test?retryWrites=true&w=majority'
    PORT = '5000'
  }
}