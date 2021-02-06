resource "aws_route53_zone" "tbaba_info_zone" {
  name = var.root_domain

  tags = {
    Name = var.root_domain
  }
}

resource "aws_route53_record" "tbaba_info" {
  zone_id = aws_route53_zone.tbaba_info_zone.zone_id
  name    = var.site_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
