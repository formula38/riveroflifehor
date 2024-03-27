module "app_production" {
  source              = "../../modules/app"
  application_name    = "riveroflifehor"
  application_version = "c341f5c"
  artifact_bucket     = "rolbank"
  worker_ami          = "ami-0c101f26f147fa7fd"
  instance_profile    = "allow_s3_ec2_rds_github"
  backend_port        = 8080
  subnets             = [
    {
      az     = "us-west-2a"
      prefix = "10.1.1.0/24"
    },
    {
      az     = "us-west-2b"
      prefix = "10.1.2.0/24"
    },
    {
      az     = "us-west-2c"
      prefix = "10.1.3.0/24"
    }
  ]
  create_rds_database  = true
  db_instance_class    = "db.t3.micro"
  db_engine            = "postgres"
  db_engine_version    = "16.2"
  db_name              = "roldata"
  db_username          = "postgres"
  db_password          = "postgres"
  db_subnet_group_name = "roldata-subnet-grp"
}
