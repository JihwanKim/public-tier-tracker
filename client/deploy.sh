flutter build web --pwa-strategy offline-first --release
aws s3 sync ./build/web s3://{required:target_bucket}