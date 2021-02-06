terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>3.27.0"
    }
  }
}

provider "aws" {
  profile = "tbaba"
  region  = "us-east-1"
}
