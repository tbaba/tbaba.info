resource "aws_s3_bucket" "tbaba_info" {
  bucket = var.s3_bucket_name
  acl    = "private"
}

resource "aws_s3_bucket_policy" "tbaba_info" {
  bucket = aws_s3_bucket.tbaba_info.id
  policy = data.aws_iam_policy_document.s3_site_policy.json
}

data "aws_iam_policy_document" "s3_site_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.tbaba_info.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.site.iam_arn]
    }
  }
}
