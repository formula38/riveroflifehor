variable "region" {
  description = "The AWS region to deploy resources into."
  type        = string
}

variable "backend_bucket" {
  description = "The name of the S3 bucket to store Terraform state."
  type        = string
}

variable "backend_key" {
  description = "The key name for the Terraform state file in the S3 bucket."
  type        = string
}

variable "backend_region" {
  description = "The AWS region where the S3 bucket for Terraform state is located."
  type        = string
}

