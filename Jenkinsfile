pipeline {
    agent { label 'node-js' }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning GitLab Repository...'
                git branch: 'main', url: 'https://gitlab.com/jnbhol101/react-js.git'  
            }
        }


        stage('Build Application') {
            steps {
                echo 'Building ReactJS Application...'
                sh 'npm run build'  
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
