output "cloudfront_distribution_domain_name" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "zone_name_servers" {
  value = aws_route53_zone.tbaba_info_zone.name_servers
}
