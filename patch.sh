kubectl patch deployment front --patch "{\"spec\": {\"template\": {\"spec\": {\"containers\": [{\"name\": \"front\",\"image\": \"$1\"}]}}}}"
