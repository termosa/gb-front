tee patch.yaml 2>&1 >> /dev/null <<- EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: front
  namespace: default
spec:
  template:
    spec:
      containers:
      - image: $1
        imagePullPolicy: Always
        name: front
EOF
