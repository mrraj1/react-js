pipeline {
    agent { label 'node-js' }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning Github Repository...'
                git branch: 'main', url: 'https://github.com/mrraj1/react-js.git'
            }
        }
        stage('Check Node and npm') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Clean Build Directory') {
            steps {
                echo 'Cleaning previous build files...'
                sh 'rm -rf build' // Clean up old build directory
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building ReactJS Application...'
                sh 'npm install --verbose' // Add verbose for more info
                sh 'npm run build --verbose'  
            }
        }

        stage('Deploy to Apache') {
            steps {
                echo 'Deploying to Apache...'
                sh 'sudo rm -rf /var/www/html/*'  
                sh 'sudo cp -r build/* /var/www/html/' 
            }
        }

        stage('Restart Apache') {
            steps {
                echo 'Restarting Apache server...'
                sh 'sudo systemctl restart apache2'  
            }
        }

        stage('Hello') {
            steps {
                echo 'Hello World from Node.js Slave'
            }
        }
    }
}
