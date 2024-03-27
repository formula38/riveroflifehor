module "app" {
    source = "./webapp_deployment"
    application_name = "riveroflifehor"
    application_version = "c341f5c"
    artifact_bucket = "rolbank"
    worker_ami = "ami-0abfe55c2cc86d5ad"
    instance_profile = "allow_s3_ec2_github_demo"
    backend_port = 8080
    subnets = [
    {
      az     = "us-west-2a",
      prefix = "10.1.1.0/24"
    },
    {
      az     = "us-west-2b",
      prefix = "10.1.2.0/24"
    },
    {
      az     = "us-west-2c",
      prefix = "10.1.3.0/24"
    }
  ]
  # Define the RDS database configuration
  create_rds_database = true
  db_instance_class = "db.t3.micro"  # Choose an appropriate instance class
  db_engine = "postgres"
  db_engine_version = "13.4"
  db_name = "roldata"
  db_username = "postgres"
  db_password = "postgres"
  db_subnet_group_name = "roldata-subnet-grp"  # Create a subnet group for RDS in the same VPC as your EC2 instances

}
