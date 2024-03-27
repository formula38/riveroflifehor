terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.2.0"
    }
  }
}

provider "aws" {
  region = var.region
}

backend "s3" {
  bucket = var.backend_bucket
  key    = var.backend_key
  region = var.backend_region
}
