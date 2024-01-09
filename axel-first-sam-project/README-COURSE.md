# LAMBDA WITH SAM COURSE NOTES

## BEFORE STARTING

* Create a IAM Group and user instead of using the root user
* Lambda is composed from triggers, handler function and code
* Most popular triggers are:
  * API Gateway: http endpoints for serverless apps
  * S3:  storage
  * DynamoDB: NoSQL Database
  * SQS: message queue
  * Kynesis: streams for real time messages
  * API Gateway: fully managed service, accepts and processes requests, handles authorization, access control, etc. Pay for how much you use. Supports websockets
* You can monitor your Lambda functions under the monitor tab from the detail page using the CloudWatch service, as well as see the logs

## REQUIREMENTS

* Install Docker
* Install Python
* Install [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
* Install [aws-sam-cli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

## CONFIGURATION AND GETTING STARTED

* Run `aws configure` and input  your *aws access key id* and your *aws secret access key*y
* Set your default region name
* Create a folder for your project and go inside it
* Run `sam init –runtime nodejs18.x`
* If working in VS code install the *AWS toolkit* anb *yaml* extensions

## DEPLOY AND BUILD

* Build your app with `sam build`
* Create a s3 bucket if you don’t have one already created with: `aws s3 mb s3://axel-first-sam-project --region [your-region]`. Where ‘mb’ stands for make bucket
* Package your app with: `sam package --template-file template.yaml --output-template-file pck.yml --s3-bucket axel-first-sam-project`. If you encounter issues with this command, make sure you don’t have `resolve_s3 = true` in your `samconfig.toml` file
* Run `sam deploy --capabilities CAPABILITY_IAM --template-file pck.yml --stack-name axel-first-sam-project`
* Go to your AWS console and your should see your new stack created in the cloudformation service
* Now you can test your api gateway with postman
* To check logs for your functions: `sam logs --name CLockFunction --stack-name`
