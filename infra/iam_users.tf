resource "aws_iam_user" "tbaba_info" {
  name          = "tbaba-info"
  path          = "/"
  force_destroy = true
}

resource "aws_iam_role" "tbaba_info_role" {
  name               = "tbaba_info_role"
  assume_role_policy = <<EOT
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOT
}

resource "aws_iam_policy" "tbaba_info_policy" {
  name        = "tbaba-info-policy"
  description = "Manage the bucket of tbaba.info"

  policy = <<EOT
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOT
}

resource "aws_iam_policy_attachment" "tbaba_info_policy_attachment" {
  name       = "tbaba-info-policy-attachment"
  users      = [aws_iam_user.tbaba_info.name]
  roles      = [aws_iam_role.tbaba_info_role.name]
  policy_arn = aws_iam_policy.tbaba_info_policy.arn
}

resource "aws_iam_access_key" "tbaba_info_access_keys" {
  user    = aws_iam_user.tbaba_info.name
  pgp_key = var.pgp_key
}
